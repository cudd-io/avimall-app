/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "7skjau8sfu2ajgf",
    "created": "2023-11-24 21:33:50.276Z",
    "updated": "2023-11-24 21:33:50.276Z",
    "name": "items",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ugoquuxh",
        "name": "description",
        "type": "editor",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "convertUrls": false
        }
      },
      {
        "system": false,
        "id": "pvhbwe0x",
        "name": "is_adult",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "nczicnxo",
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
        "id": "dsdi2tk2",
        "name": "price",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "6kib68x1",
        "name": "category",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "5v3chhs3n749j6h",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "fzopz8kw",
        "name": "shop",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "xgubnwk8agpd84p",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
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
  const collection = dao.findCollectionByNameOrId("7skjau8sfu2ajgf");

  return dao.deleteCollection(collection);
})
