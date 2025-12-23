import type { CollectionConfig } from 'payload'
import slugify from 'slugify'

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
      admin: {
        description: 'In years (e.g., 3.5 for three and a half years old)',
      },
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
      hasMany: true,
    },
    {
      name: 'weight',
      type: 'number',
      admin: {
        description: 'In kilograms (kg)',
      },
      required: false,
    },
    {
      name: 'size',
      type: 'text',
      admin: {
        description: 'e.g., Small, Medium, Large',
      },
      required: false,
    },
    {
      name: 'gender',
      type: 'text',
      required: false,
    },
    {
      name: 'location',
      type: 'text',
      required: false,
    },

    {
      name: 'slug',
      label: 'Slug for URL',
      type: 'text',
      unique: true,
      required: true,
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
      hooks: {
        beforeValidate: [
          ({ value, data, originalDoc }) => {
            // 1) if slug is provided, use it
            if (value) return value

            // 2) Take the name — either from the current form data or from the existing document
            const source = data?.name || originalDoc?.name
            if (!source) return value

            // 3) generate slug from the name
            return slugify(source, {
              lower: true,
              strict: true, // remove special characters
            })
          },
        ],
      },
    },
  ],
}
