import type { CollectionConfig } from 'payload'
import { AnimalTypes } from './AnimalTypes'

export const Pets: CollectionConfig = {
  slug: 'pets',
  labels: {
    singular: 'Pet',
    plural: 'Pets',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      label: 'Animal Type',
      type: 'relationship',
      relationTo: 'animal-types',
      required: true,
    },
    {
      name: 'age',
      label: 'Age',
      type: 'number',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
    },
    {
      name: 'photo',
      label: 'Photo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug for URL',
      type: 'text',
      required: true,
      unique: true,
    },
  ],
}
