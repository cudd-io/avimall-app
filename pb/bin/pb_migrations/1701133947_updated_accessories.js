/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kp80e3f25jv40c8")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_SXo9568` ON `accessories` (\n  `booth_id`,\n  `booth_item`\n)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qrd2t47t",
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
  const collection = dao.findCollectionByNameOrId("kp80e3f25jv40c8")

  collection.indexes = []

  // remove
  collection.schema.removeField("qrd2t47t")

  return dao.saveCollection(collection)
})
