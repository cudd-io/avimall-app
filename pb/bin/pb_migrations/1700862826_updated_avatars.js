/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ei6tq8znq008qa7")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hjgsznkl",
    "name": "booth_item",
    "type": "relation",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "collectionId": "7skjau8sfu2ajgf",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ei6tq8znq008qa7")

  // update
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
})
