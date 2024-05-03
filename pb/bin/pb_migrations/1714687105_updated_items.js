/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7skjau8sfu2ajgf")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fzopz8kw",
    "name": "shop",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "xgubnwk8agpd84p",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7skjau8sfu2ajgf")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fzopz8kw",
    "name": "shop",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "xgubnwk8agpd84p",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
