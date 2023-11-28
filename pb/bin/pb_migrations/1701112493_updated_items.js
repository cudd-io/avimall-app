/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7skjau8sfu2ajgf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ruzwccgn",
    "name": "booth_data",
    "type": "json",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7skjau8sfu2ajgf")

  // remove
  collection.schema.removeField("ruzwccgn")

  return dao.saveCollection(collection)
})
