# robot@api

The api of robot.

## Usage
* manual run 
```shell
npm run start
```
* pm2 without reboot
```shell
pm2 start main.js --name api
```
* to keep it started after reboot.
```shell
pm2 save
pm2 startup
```

* stop api
```shell
pm2 stop api
```

* remove api from pm2 list
```shell
pm2 delete api
```

## Routing
The api have 4 root brunches.

1. /api/v1 - system routes, works for connections different parts of robot and install comunication.
    * /instruments - route for working with entity Instruments in database.
   
        Post: /add - add instrument to database.
   
        Get: /get - get all instruments from database.
   
        Get: /get/:id - get an instrument from database.
   
        Get: /connect/:id - connect instrument with robot.
   
        Get: /disconnect/:id - disconnect instrument with robot.
   
        Patch: /update/:id - disconnect instrument with robot.
   
        Delete: /remove/:id - disconnect instrument with robot.



## entities
### Instruments - object in database, that contains parameters of the instruments which connect to the robot.
     
**fields**
   * instrumentId: string
   * instrumentType: string
   * instrumentLocalName: string
   * isConnected: string
   * isActive: string

*request body for dbMaster to generate such model and migration*
```json
{
    "modelName": "Instruments", 
    "tableName": "instruments", 
    "migrationDate": 20220427150624,
    "isModel": true, 
    "isMigration": true,
    "model": [
        { 
            "localName": "id",
            "dbName": "id",
            "dataType": "INTEGER"
        },
        {
            "localName": "instrumentId",
            "dbName": "instrument_id",
            "dataType": "STRING"
        },
        {
            "localName": "instrumentType",
            "dbName": "instrument_type",
            "dataType": "STRING"
        },
        {
            "localName": "instrumentLocalName",
            "dbName": "instrument_local_name",
            "dataType": "STRING"
        },
        {
            "localName": "isConnected",
            "dbName": "is_connected",
            "dataType": "STRING"
        },
        {
            "localName": "isActive",
            "dbName": "is_active",
            "dataType": "STRING"
        }
    ]
}
```

