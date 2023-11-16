/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("haq11mrxxd903ts")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9iz6yjmk",
    "name": "creator",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "cur5xgq7q45cwrx",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("haq11mrxxd903ts")

  // remove
  collection.schema.removeField("9iz6yjmk")

  return dao.saveCollection(collection)
})
