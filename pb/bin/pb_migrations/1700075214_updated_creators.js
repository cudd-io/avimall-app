/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cur5xgq7q45cwrx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mmehsffn",
    "name": "booth_url",
    "type": "url",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cur5xgq7q45cwrx")

  // remove
  collection.schema.removeField("mmehsffn")

  return dao.saveCollection(collection)
})
