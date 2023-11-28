/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5v3chhs3n749j6h")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rmdfg17q",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5v3chhs3n749j6h")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rmdfg17q",
    "name": "booth_id",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
})
