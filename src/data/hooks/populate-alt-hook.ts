import path from 'path'
import type { CollectionBeforeChangeHook } from 'payload'

export const populateAltHook: CollectionBeforeChangeHook = (args) => {
  if (args.context.backfill || args.data?.alt || !args.data?.filename) return args.data

  return {
    ...args.data,
    alt: path.basename(args.data.filename, path.extname(args.data.filename)),
  }
}
