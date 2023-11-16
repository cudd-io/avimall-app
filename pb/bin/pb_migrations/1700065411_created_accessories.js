/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "haq11mrxxd903ts",
    "created": "2023-11-15 16:23:31.699Z",
    "updated": "2023-11-15 16:23:31.699Z",
    "name": "accessories",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qhuvcftq",
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
      },
      {
        "system": false,
        "id": "dcflhlwp",
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
      },
      {
        "system": false,
        "id": "gjglu6tu",
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
        "id": "fskp7km4",
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
        "id": "vcc87hqd",
        "name": "booth_url",
        "type": "url",
        "required": false,
        "presentable": true,
        "unique": false,
        "options": {
          "exceptDomains": [],
          "onlyDomains": []
        }
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_ujHsOk2` ON `accessories` (`booth_id`)"
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
  const collection = dao.findCollectionByNameOrId("haq11mrxxd903ts");

  return dao.deleteCollection(collection);
})
