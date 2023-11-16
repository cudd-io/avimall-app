/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ei6tq8znq008qa7",
    "created": "2023-11-15 16:18:30.359Z",
    "updated": "2023-11-15 16:18:30.359Z",
    "name": "avatars",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "1nvecxpw",
        "name": "booth_id",
        "type": "text",
        "required": true,
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
        "id": "znavqtpg",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "zmz6pq0r",
        "name": "description",
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
        "id": "liaupkgk",
        "name": "creator",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "cur5xgq7q45cwrx",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
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
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_fgD6wlP` ON `avatars` (`booth_id`)"
    ],
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
  const collection = dao.findCollectionByNameOrId("ei6tq8znq008qa7");

  return dao.deleteCollection(collection);
})
