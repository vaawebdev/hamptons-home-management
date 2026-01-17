import { Users } from '@/data/collections/users'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import path from 'path'
import { buildConfig } from 'payload'
import { payloadTotp } from 'payload-totp'
import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { Media } from './data/collections/media'
import { PrivacyPolicy } from './data/globals/privacy-policy'
import { TermsOfService } from './data/globals/terms-of-service'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  globals: [PrivacyPolicy, TermsOfService],
  collections: [Users, Media],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
    migrationDir: './src/data/migrations',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    payloadTotp({
      collection: 'users',
      disableAccessWrapper: true,
      totp: {
        issuer: 'Hamptons Home Management Website',
      },
    }),
    vercelBlobStorage({
      enabled: !!process.env.BLOB_ENABLED,
      collections: {
        media: {
          prefix: 'media',
        },
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
})
