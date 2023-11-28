/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "kp80e3f25jv40c8",
    "created": "2023-11-24 21:53:22.385Z",
    "updated": "2023-11-24 21:53:22.385Z",
    "name": "accessories",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "llcf7ljr",
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
      },
      {
        "system": false,
        "id": "smmh7kzg",
        "name": "booth_item",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "7skjau8sfu2ajgf",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "fyltnvf3",
        "name": "fits_avatars",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "ei6tq8znq008qa7",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": null
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
  const collection = dao.findCollectionByNameOrId("kp80e3f25jv40c8");

  return dao.deleteCollection(collection);
})
