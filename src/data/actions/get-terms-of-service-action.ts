'use server'

import { cached } from '@/utils/cached'
import config from '@payload-config'
import { getPayload } from 'payload'
import { TERMS_OF_SERVICE } from '../cache/tags'

export const getTermsOfServiceAction = cached({
  tags: [TERMS_OF_SERVICE],
  fn: async () => {
    const payload = await getPayload({ config })

    return await payload.findGlobal({
      slug: 'terms-of-service',
    })
  },
})
