/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xgubnwk8agpd84p")

  collection.name = "shops"
  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_kc0tMEK` ON `shops` (\n  `subdomain`,\n  `url`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xgubnwk8agpd84p")

  collection.name = "shop"
  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_kc0tMEK` ON `shop` (\n  `subdomain`,\n  `url`\n)"
  ]

  return dao.saveCollection(collection)
})
