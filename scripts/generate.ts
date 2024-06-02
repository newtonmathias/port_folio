import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
// Configure dotenv before other imports
import { Redis } from "@upstash/redis";
import { DocumentInterface } from "@langchain/core/documents";
import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { Pinecone } from "@pinecone-database/pinecone";
import { OpenAIEmbeddings } from "@langchain/openai";
import { PineconeStore } from "@langchain/pinecone";

async function generateEmbeddings() {
  await Redis.fromEnv().flushdb();

  const pinecone = new Pinecone();
  const pineconeIndex = pinecone.Index(process.env.PINECONE_INDEX!);

  await pinecone.deleteIndex(process.env.PINECONE_INDEX!);

  await pinecone.createIndex({
    name: process.env.PINECONE_INDEX!,
    dimension: 1536,
    metric: "cosine",
    spec: {
      serverless: {
        cloud: "aws",
        region: "us-east-1",
      },
    },
  });

  const loader = new DirectoryLoader(
    "config/",
    {
      ".ts": (path) => new TextLoader(path),
    },
    true
  );

  const docs = await loader.load();

  console.log("sppliting.....");

  const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
  });

  const splitDocs = await textSplitter.splitDocuments(docs);

  console.log("ingesting.....");

  await PineconeStore.fromDocuments(
    splitDocs,
    new OpenAIEmbeddings({ modelName: "text-embedding-3-small" }),
    {
      pineconeIndex,
      maxConcurrency: 5, // Maximum number of batch requests to allow at once. Each batch is 1000 vectors.
    }
  );
}

generateEmbeddings();
