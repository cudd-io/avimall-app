/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cur5xgq7q45cwrx")

  collection.indexes = [
    "CREATE INDEX `idx_hr9JGCz` ON `creators` (`name`)"
  ]

  // remove
  collection.schema.removeField("izb0ujn6")

  // remove
  collection.schema.removeField("mmehsffn")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cur5xgq7q45cwrx")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_hr9JGCz` ON `creators` (`booth_id`)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "izb0ujn6",
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
})
