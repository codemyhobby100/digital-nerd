import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = "2026-02-23";

console.log("🔧 Sanity Client Initialized:");
console.log(`   Project ID: ${projectId}`);
console.log(`   Dataset: ${dataset}`);
console.log(`   API Version: ${apiVersion}`);
console.log(`   Full endpoint: https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}`);

if (!projectId) {
  throw new Error("NEXT_PUBLIC_SANITY_PROJECT_ID is not set");
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}