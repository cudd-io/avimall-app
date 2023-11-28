/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cur5xgq7q45cwrx")

  collection.name = "UNUSEDcreators"
  collection.indexes = [
    "CREATE INDEX `idx_hr9JGCz` ON `UNUSEDcreators` (`name`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cur5xgq7q45cwrx")

  collection.name = "creators"
  collection.indexes = [
    "CREATE INDEX `idx_hr9JGCz` ON `creators` (`name`)"
  ]

  return dao.saveCollection(collection)
})
