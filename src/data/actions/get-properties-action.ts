'use server'

import { cached } from '@/utils/cached'
import config from '@payload-config'
import { getPayload } from 'payload'
import { PROPERTIES } from '../cache/tags'

export const getPropertiesAction = cached({
  tags: [PROPERTIES],
  fn: async () => {
    const payload = await getPayload({ config })

    const { docs } = await payload.find({
      collection: 'properties',
      depth: 1,
      limit: 8,
    })

    return docs
  },
})
