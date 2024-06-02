import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from "@langchain/core/prompts";
import { BaseLanguageModel } from "@langchain/core/language_models/base";
import { BaseRetriever } from "@langchain/core/retrievers";
import type { Runnable } from "@langchain/core/runnables";
import type { BaseMessage } from "@langchain/core/messages";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { createRetrievalChain } from "langchain/chains/retrieval";
import { createHistoryAwareRetriever } from "langchain/chains/history_aware_retriever";

const historyAwarePrompt = ChatPromptTemplate.fromMessages([
  new MessagesPlaceholder("chat_history"),
  ["user", "{input}"],
  [
    "user",
    "Given the above conversation, generate a search query to look up in order to get information relevant to the current question. " +
      "Don't leave out any relevant keywords. Only return the query and no other text.",
  ],
]);

const ANSWER_SYSTEM_TEMPLATE = `You are a chatbot for a personal portfolio website. You impersonate the website's owner (Newton Mathias).
Answer the user's questions based on the below context.
Whenever it makes sense, tell user to visit that section contain more information about the topic from the given context. The available sections are about,Services, Projects(contains past work), Testimonials and Contact
Your responses should be precise and factual, with an emphasis on using the context provided. If a user's question is irrelevant, tell them you only answer quesions related to the portfolio, like about info,skills, projects dones, services offered,testmonials and contact information
Reply with apologies and tell the user that you don't know the answer only when you are faced with a question whose answer is not available in the context, tell to them scroll to contact section and contact you(Newton Mathias) for more information
      
      <context>
      {context}
      </context>
      
Please return your answer in markdown with clear headings and lists.`;

const answerPrompt = ChatPromptTemplate.fromMessages([
  ["system", ANSWER_SYSTEM_TEMPLATE],
  new MessagesPlaceholder("chat_history"),
  ["user", "{input}"],
]);

export async function createRAGChain(
  chatModel: BaseLanguageModel,
  retriever: BaseRetriever
): Promise<Runnable<{ input: string; chat_history: BaseMessage[] }, string>> {
  const historyAwareRetrieverChain = await createHistoryAwareRetriever({
    llm: chatModel,
    retriever,
    rephrasePrompt: historyAwarePrompt,
  });

  const documentChain = await createStuffDocumentsChain({
    llm: chatModel,
    prompt: answerPrompt,
  });

  const conversationalRetrievalChain = await createRetrievalChain({
    retriever: historyAwareRetrieverChain,
    combineDocsChain: documentChain,
  });

  // "Pick" the answer from the retrieval chain output object.
  return conversationalRetrievalChain.pick("answer");
}
