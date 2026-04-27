import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-mongodb'

export async function up({ session, req }: MigrateUpArgs): Promise<void> {
  const PropertiesModel = req.payload.db.collections['properties']
  await PropertiesModel.collection.updateMany(
    { address: { $exists: true } },
    { $rename: { address: 'name' } },
    { session },
  )
}

export async function down({ session, req }: MigrateDownArgs): Promise<void> {
  const PropertiesModel = req.payload.db.collections['properties']
  await PropertiesModel.collection.updateMany(
    { name: { $exists: true } },
    { $rename: { name: 'address' } },
    { session },
  )
}
