import { type GlobalConfig } from 'payload'
import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { revalidatePrivacyPolicyHook } from '../hooks/revalidate-privacy-policy-hook'

export const PrivacyPolicy: GlobalConfig = {
  slug: 'privacy-policy',
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
    afterChange: [revalidatePrivacyPolicyHook],
  },
}
