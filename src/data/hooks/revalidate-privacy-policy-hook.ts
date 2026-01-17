import { PRIVACY_POLICY } from '@/data/cache/tags'
import { revalidatePath, revalidateTag } from 'next/cache'
import { RequestContext } from 'payload'

export const revalidatePrivacyPolicyHook = (args: { context: RequestContext }) => {
  if (args.context.backfill) return
  revalidateTag(PRIVACY_POLICY, 'max')
  revalidatePath('/privacy')
}
