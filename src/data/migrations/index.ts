import * as migration_20260427_000000_rename_property_address_to_name from './20260427_000000_rename_property_address_to_name'

export const migrations = [
  {
    up: migration_20260427_000000_rename_property_address_to_name.up,
    down: migration_20260427_000000_rename_property_address_to_name.down,
    name: '20260427_000000_rename_property_address_to_name',
  },
]
