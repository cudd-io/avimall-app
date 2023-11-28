/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "xgubnwk8agpd84p",
    "created": "2023-11-24 21:31:09.186Z",
    "updated": "2023-11-24 21:31:09.186Z",
    "name": "shop",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hk4fgfjl",
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
        "id": "e5swwxbr",
        "name": "subdomain",
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
        "id": "8dxphp4c",
        "name": "thumbnail_url",
        "type": "url",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "o4nxuqfv",
        "name": "url",
        "type": "url",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
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
  const collection = dao.findCollectionByNameOrId("xgubnwk8agpd84p");

  return dao.deleteCollection(collection);
})
