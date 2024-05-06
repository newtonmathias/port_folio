import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
// Configure dotenv before other imports
import { getEmbeddingsCollection, getVectorStore } from "../lib/astradb";
import { Redis } from "@upstash/redis";
import { DocumentInterface } from "@langchain/core/documents";
import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

async function generateEmbeddings() {
  await Redis.fromEnv().flushdb();

  const vectorStore = await getVectorStore();

  (await getEmbeddingsCollection()).deleteAll();

  const loader = new DirectoryLoader(
    "config/",
    {
      ".ts": (path) => new TextLoader(path),
    },
    true
  );

  const docs = (await loader.load()).map((doc): DocumentInterface => {
    return {
      pageContent: doc.pageContent,
      metadata: { url: "config" },
    };
  });

  const splitter = RecursiveCharacterTextSplitter.fromLanguage("js");

  const splitDocs = await splitter.splitDocuments(docs);

  await vectorStore.addDocuments(splitDocs);
}

generateEmbeddings();
