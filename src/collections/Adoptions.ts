import type { CollectionConfig } from 'payload'

export const Adoptions: CollectionConfig = {
  slug: 'adoptions',
  labels: {
    singular: 'Adoption request',
    plural: 'Adoption requests',
  },
  access: {
    read: ({ req }) => !!req.user,
    create: () => true,
  },
  fields: [
    {
      name: 'pet',
      label: 'Pet',
      type: 'relationship',
      relationTo: 'pets',
      required: true,
    },
    {
      name: 'name',
      label: 'Your name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
    },
    {
      name: 'message',
      label: 'Message',
      type: 'textarea',
    },
  ],
}
