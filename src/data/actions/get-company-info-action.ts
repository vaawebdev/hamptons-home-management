'use server'

import { cached } from '@/utils/cached'
import config from '@payload-config'
import { getPayload } from 'payload'
import { COMPANY_INFO } from '../cache/tags'

export const getCompanyInfoAction = cached({
  tags: [COMPANY_INFO],
  fn: async () => {
    const payload = await getPayload({ config })

    return await payload.findGlobal({
      slug: 'company-info',
    })
  },
})
