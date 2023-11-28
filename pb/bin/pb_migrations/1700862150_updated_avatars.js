/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ei6tq8znq008qa7")

  // remove
  collection.schema.removeField("rz8yetew")

  // remove
  collection.schema.removeField("ykgd1lce")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hjgsznkl",
    "name": "booth_items",
    "type": "relation",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "collectionId": "7skjau8sfu2ajgf",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ei6tq8znq008qa7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rz8yetew",
    "name": "description",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ykgd1lce",
    "name": "nsfw",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("hjgsznkl")

  return dao.saveCollection(collection)
})
