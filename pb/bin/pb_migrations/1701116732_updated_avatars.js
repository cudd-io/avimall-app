/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ei6tq8znq008qa7")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_GUUhEYr` ON `avatars` (`booth_item`)",
    "CREATE UNIQUE INDEX `idx_kIfFjEv` ON `avatars` (\n  `booth_id`,\n  `booth_item`\n)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pctmyowl",
    "name": "booth_id",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ei6tq8znq008qa7")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_GUUhEYr` ON `avatars` (`booth_item`)"
  ]

  // remove
  collection.schema.removeField("pctmyowl")

  return dao.saveCollection(collection)
})
