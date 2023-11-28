/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xgubnwk8agpd84p")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_kc0tMEK` ON `shop` (\n  `subdomain`,\n  `url`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xgubnwk8agpd84p")

  collection.indexes = []

  return dao.saveCollection(collection)
})
