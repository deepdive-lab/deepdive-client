import type { Brand, Post, Tag } from "@/types/content"

export const BRANDS: Brand[] = [
  { id: "aws", name: "AWS", logoUrl: "https://placehold.co/100x40/1e293b/white?text=AWS" },
  {
    id: "langchain",
    name: "LangChain",
    logoUrl: "https://placehold.co/120x40/1e293b/white?text=LangChain",
  },
  { id: "pinecone", name: "Pinecone", logoUrl: "https://placehold.co/110x40/1e293b/white?text=Pinecone" },
  { id: "redis", name: "Redis", logoUrl: "https://placehold.co/100x40/1e293b/white?text=Redis" },
  { id: "mongodb", name: "MongoDB", logoUrl: "https://placehold.co/110x40/1e293b/white?text=MongoDB" },
  { id: "upstage", name: "Upstage", logoUrl: "https://placehold.co/110x40/1e293b/white?text=Upstage" },
  { id: "databricks", name: "Databricks", logoUrl: "https://placehold.co/100x40/1e293b/white?text=Databricks" },
  { id: "tensorflow", name: "Tensorflow", logoUrl: "https://placehold.co/100x40/1e293b/white?text=Tensorflow" },
  { id: "rabbitmq", name: "RabbitMQ", logoUrl: "https://placehold.co/100x40/1e293b/white?text=RabbitMQ" }
]

export const TAGS: Tag[] = [
  { id: "rag", label: "RAG" },
  { id: "vector-db", label: "Vector DB" },
  { id: "llm", label: "LLM" },
  { id: "engineering", label: "Engineering" },
  { id: "agents", label: "AI Agents" },
  { id: "finetuning", label: "Fine-tuning" },
]

export const POSTS: Post[] = [
  {
    id: "1",
    title: "Building Reliable RAG Systems at Scale",
    description:
      "Learn how to optimize your retrieval augmented generation pipelines for production workloads using advanced indexing strategies.",
    thumbnail: "https://picsum.photos/800/600?random=1",
    date: "Oct 24, 2024",
    companyId: "pinecone",
    companyName: "Pinecone",
    tags: ["rag", "vector-db"],
    readTime: "8 min read",
    featured: true,
  },
  {
    id: "2",
    title: "The Future of Autonomous Agents",
    description:
      "Exploring the capabilities of the latest LLM agents and how they can autonomously solve complex multi-step reasoning tasks.",
    thumbnail: "https://picsum.photos/800/600?random=2",
    date: "Oct 22, 2024",
    companyId: "langchain",
    companyName: "LangChain",
    tags: ["agents", "llm"],
    readTime: "12 min read",
    featured: true,
  },
  {
    id: "3",
    title: "Serverless Inference with Low Latency",
    description:
      "A deep dive into cold starts, concurrency, and cost optimization when deploying large models on serverless infrastructure.",
    thumbnail: "https://picsum.photos/800/600?random=3",
    date: "Oct 20, 2024",
    companyId: "aws",
    companyName: "AWS",
    tags: ["engineering", "llm"],
    readTime: "10 min read",
    featured: false,
  },
  {
    id: "4",
    title: "Modern Data Architecture with MongoDB Atlas",
    description:
      "Building resilient and scalable applications using MongoDB's flexible document model and global distribution capabilities.",
    thumbnail: "https://picsum.photos/800/600?random=4",
    date: "Oct 18, 2024",
    companyId: "mongodb",
    companyName: "MongoDB",
    tags: ["engineering"],
    readTime: "7 min read",
    featured: true,
  },
  {
    id: "5",
    title: "Real-time Search and Analytics with Redis",
    description:
      "Leveraging Redis Stack for sub-millisecond search and real-time processing of high-throughput data streams.",
    thumbnail: "https://picsum.photos/800/600?random=5",
    date: "Oct 15, 2024",
    companyId: "redis",
    companyName: "Redis",
    tags: ["vector-db", "engineering"],
    readTime: "11 min read",
    featured: false,
  },
  {
    id: "6",
    title: "Reliable Message Queuing with RabbitMQ",
    description:
      "Mastering asynchronous communication patterns and fault-tolerant message delivery in distributed microservices.",
    thumbnail: "https://picsum.photos/800/600?random=6",
    date: "Oct 12, 2024",
    companyId: "rabbitmq",
    companyName: "RabbitMQ",
    tags: ["engineering"],
    readTime: "9 min read",
    featured: false,
  },
  {
    id: "7",
    title: "The Data Lakehouse: Analytics Meets AI",
    description:
      "Unified governance and high-performance processing on the Databricks Lakehouse Platform for modern data teams.",
    thumbnail: "https://picsum.photos/800/600?random=7",
    date: "Oct 10, 2024",
    companyId: "databricks",
    companyName: "Databricks",
    tags: ["engineering", "llm"],
    readTime: "13 min read",
    featured: false,
  },
]
