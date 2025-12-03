import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'Page',
    plural: 'Pages',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'url', // about, pets, etc.
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'textarea',
    },
  ],
}
