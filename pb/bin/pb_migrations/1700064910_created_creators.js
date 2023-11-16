/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "cur5xgq7q45cwrx",
    "created": "2023-11-15 16:15:10.655Z",
    "updated": "2023-11-15 16:15:10.655Z",
    "name": "creators",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "uykwvhws",
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
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_hr9JGCz` ON `creators` (`booth_id`)"
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
  const collection = dao.findCollectionByNameOrId("cur5xgq7q45cwrx");

  return dao.deleteCollection(collection);
})
