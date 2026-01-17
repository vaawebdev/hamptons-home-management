import { COMPANY_INFO } from '@/data/cache/tags'
import { revalidatePath, revalidateTag } from 'next/cache'
import { RequestContext } from 'payload'

export const revalidateCompanyInfoHook = (args: { context: RequestContext }) => {
  if (args.context.backfill) return
  revalidateTag(COMPANY_INFO, 'max')
  revalidatePath('/')
}
