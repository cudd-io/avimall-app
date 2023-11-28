/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7skjau8sfu2ajgf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wyf7jsdq",
    "name": "tags",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "sertjl49xkvmuur",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7skjau8sfu2ajgf")

  // remove
  collection.schema.removeField("wyf7jsdq")

  return dao.saveCollection(collection)
})
