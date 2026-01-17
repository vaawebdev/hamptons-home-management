'use server'

import { cached } from '@/utils/cached'
import config from '@payload-config'
import { getPayload } from 'payload'
import { PRIVACY_POLICY } from '../cache/tags'

export const getPrivacyPolicyAction = cached({
  tags: [PRIVACY_POLICY],
  fn: async () => {
    const payload = await getPayload({ config })

    return await payload.findGlobal({
      slug: 'privacy-policy',
    })
  },
})
