import { PROPERTIES } from '@/data/cache/tags'
import { revalidatePath, revalidateTag } from 'next/cache'
import { RequestContext } from 'payload'

export const revalidatePropertiesHook = (args: { context: RequestContext }) => {
  if (args.context.backfill) return
  revalidateTag(PROPERTIES, 'max')
  revalidatePath('/')
}
