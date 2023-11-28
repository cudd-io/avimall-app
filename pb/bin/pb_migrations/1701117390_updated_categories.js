/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5v3chhs3n749j6h")

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5v3chhs3n749j6h")

  // remove
  collection.schema.removeField("rmdfg17q")

  return dao.saveCollection(collection)
})
