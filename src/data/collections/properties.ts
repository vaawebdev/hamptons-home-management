import { authenticated } from '@/data/access/authenticated'
import { type CollectionConfig } from 'payload'
import { revalidatePropertiesHook } from '../hooks/revalidate-properties-hook'

export const Properties: CollectionConfig = {
  slug: 'properties',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    group: 'Content',
    useAsTitle: 'name',
    defaultColumns: ['name', 'images', 'description'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'images',
      type: 'relationship',
      hasMany: true,
      relationTo: 'media',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'bedrooms',
      type: 'text',
      required: true,
    },
    {
      name: 'bathrooms',
      type: 'text',
      required: true,
    },
    {
      name: 'sqft',
      type: 'text',
      required: true,
    },
    {
      name: 'year',
      type: 'text',
      required: true,
    },
  ],
  hooks: {
    afterChange: [revalidatePropertiesHook],
  },
}
