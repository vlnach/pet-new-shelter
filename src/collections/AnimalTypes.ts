import type { CollectionConfig } from 'payload'

export const AnimalTypes: CollectionConfig = {
  slug: 'animal-types',
  labels: {
    singular: 'Animal Type',
    plural: 'Animal Types',
  },
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
  ],
}
