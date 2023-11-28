/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5v3chhs3n749j6h")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_w62gvpB` ON `categories` (`booth_id`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5v3chhs3n749j6h")

  collection.indexes = []

  return dao.saveCollection(collection)
})
