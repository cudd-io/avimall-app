/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cur5xgq7q45cwrx")

  collection.indexes = []

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cur5xgq7q45cwrx")

  collection.indexes = [
    "CREATE INDEX `idx_hr9JGCz` ON `UNUSEDcreators` (`name`)"
  ]

  return dao.saveCollection(collection)
})
