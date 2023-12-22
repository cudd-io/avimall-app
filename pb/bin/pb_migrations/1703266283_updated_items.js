/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7skjau8sfu2ajgf")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "igsetdw1",
    "name": "booth_id",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": true
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "elynhwd7",
    "name": "images",
    "type": "json",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7skjau8sfu2ajgf")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "igsetdw1",
    "name": "booth_id",
    "type": "number",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": true
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "elynhwd7",
    "name": "images",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
