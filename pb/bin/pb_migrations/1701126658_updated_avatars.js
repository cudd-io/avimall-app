/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ei6tq8znq008qa7")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vtabw8xf",
    "name": "gender",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 3,
      "values": [
        "masc",
        "femme",
        "androgenous/nb"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ei6tq8znq008qa7")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vtabw8xf",
    "name": "gender",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "masc",
        "femme",
        "androgenous/nb"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
