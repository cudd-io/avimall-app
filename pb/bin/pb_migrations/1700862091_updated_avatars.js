/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ei6tq8znq008qa7")

  collection.indexes = []

  // remove
  collection.schema.removeField("1nvecxpw")

  // remove
  collection.schema.removeField("ovg8dijf")

  // remove
  collection.schema.removeField("14z4ks2y")

  // remove
  collection.schema.removeField("gsnyibjn")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ei6tq8znq008qa7")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_fgD6wlP` ON `avatars` (`booth_id`)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1nvecxpw",
    "name": "booth_id",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ovg8dijf",
    "name": "booth_url",
    "type": "url",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": [
        "booth.pm"
      ]
    }
  }))

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
    "id": "gsnyibjn",
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
})
