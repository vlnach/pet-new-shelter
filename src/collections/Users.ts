import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,

  fields: [
    {
      name: 'role',
      label: 'Role',
      type: 'select',
      required: true,
      defaultValue: 'staff',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Staff', value: 'staff' },
      ],
    },
  ],

  access: {
    // who can update a user profile
    update: ({ req, id }) => {
      const user = req.user as any

      // if not logged in — cannot
      if (!user) return false

      // admin can change everyone
      if (user.role === 'admin') return true

      // users can change only themselves
      return user.id === id
    },
  },
}
