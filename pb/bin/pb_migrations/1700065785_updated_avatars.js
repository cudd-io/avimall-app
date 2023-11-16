/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ei6tq8znq008qa7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wrzvw9ce",
    "name": "photos",
    "type": "file",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {
      "maxSelect": 99,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/png",
        "image/vnd.mozilla.apng",
        "image/jpeg",
        "image/gif",
        "image/webp"
      ],
      "thumbs": [
        "256x256"
      ],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ei6tq8znq008qa7")

  // remove
  collection.schema.removeField("wrzvw9ce")

  return dao.saveCollection(collection)
})
