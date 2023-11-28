/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7skjau8sfu2ajgf")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_dy8ZAAp` ON `items` (`booth_id`)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "igsetdw1",
    "name": "booth_id",
    "type": "number",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7skjau8sfu2ajgf")

  collection.indexes = []

  // remove
  collection.schema.removeField("igsetdw1")

  return dao.saveCollection(collection)
})
