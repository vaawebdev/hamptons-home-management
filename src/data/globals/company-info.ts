import { type GlobalConfig } from 'payload'
import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { revalidateCompanyInfoHook } from '../hooks/revalidate-company-info-hook'

export const CompanyInfo: GlobalConfig = {
  slug: 'company-info',
  access: {
    read: anyone,
    update: authenticated,
  },
  admin: {
    group: 'Company',
  },
  fields: [
    {
      name: 'address',
      type: 'textarea',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
    },
  ],
  hooks: {
    afterChange: [revalidateCompanyInfoHook],
  },
}
