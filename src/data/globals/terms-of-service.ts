import { type GlobalConfig } from 'payload'
import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { revalidateTermsOfServiceHook } from '../hooks/revalidate-terms-of-service-hook'

export const TermsOfService: GlobalConfig = {
  slug: 'terms-of-service',
  access: {
    read: anyone,
    update: authenticated,
  },
  admin: {
    group: 'Legal',
  },
  fields: [
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'updatedAt',
      type: 'date',
      required: true,
    },
  ],
  hooks: {
    afterChange: [revalidateTermsOfServiceHook],
  },
}
