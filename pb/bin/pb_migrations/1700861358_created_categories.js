/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "5v3chhs3n749j6h",
    "created": "2023-11-24 21:29:18.546Z",
    "updated": "2023-11-24 21:29:18.546Z",
    "name": "categories",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pybfw91i",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("5v3chhs3n749j6h");

  return dao.deleteCollection(collection);
})
