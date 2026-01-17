'use server'

import config from '@payload-config'
import { getPayload } from 'payload'

export type SubmitContactRequestActionParams = {
  name: string
  email: string
  phone?: string | null
  address?: string | null
  message: string
}

export const submitContactRequestAction = async (params: SubmitContactRequestActionParams) => {
  const payload = await getPayload({ config })

  await payload.create({
    collection: 'contact-requests',
    data: {
      name: params.name,
      email: params.email,
      phone: params.phone,
      address: params.address,
      message: params.message,
    },
  })
}
