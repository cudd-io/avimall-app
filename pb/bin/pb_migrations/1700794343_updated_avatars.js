/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ei6tq8znq008qa7")

  // remove
  collection.schema.removeField("wrzvw9ce")

  // remove
  collection.schema.removeField("whijbzwp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "14z4ks2y",
    "name": "photos",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wwaw3dem",
    "name": "booth_data",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "whijbzwp",
    "name": "remotePhoto",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // remove
  collection.schema.removeField("14z4ks2y")

  // remove
  collection.schema.removeField("wwaw3dem")

  return dao.saveCollection(collection)
})
