import { CACHE_REVALIDATE_TTL } from '@/data/cache/config'
import { unstable_cache } from 'next/cache'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type CachedCallback = (...args: any) => Promise<any>

export type CachedOptions<T extends CachedCallback> = {
  fn: T
  tags: string[]
}

export const cached = <T extends CachedCallback>({ fn, tags }: CachedOptions<T>) =>
  unstable_cache(fn, undefined, {
    tags,
    revalidate: CACHE_REVALIDATE_TTL,
  })
