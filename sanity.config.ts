import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

if (!projectId || !dataset) {
  throw new Error(
    `Missing Sanity environment variables. 
    NEXT_PUBLIC_SANITY_PROJECT_ID: ${projectId}
    NEXT_PUBLIC_SANITY_DATASET: ${dataset}`
  );
}

export default defineConfig({
  basePath: '/studio',
  name: 'DigitalNerd_Studio',
  title: 'DigitalNerd Studio',

  projectId,
  dataset,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [
      {
        name: 'post',
        title: 'Post',
        type: 'document',
        fields: [
          { name: 'title', title: 'Title', type: 'string' },
          { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
          { name: 'publishedAt', title: 'Published at', type: 'datetime' },
          { name: 'mainImage', title: 'Main image', type: 'image', options: { hotspot: true } },
          { name: 'description', title: 'Description', type: 'text' },
          { name: 'author', title: 'Author', type: 'reference', to: { type: 'author' } },
        ],
      },
      {
        name: 'author',
        title: 'Author',
        type: 'document',
        fields: [
          { name: 'name', title: 'Name', type: 'string' },
          { name: 'image', title: 'Image', type: 'image' },
        ]
      }
    ],
  },
});
