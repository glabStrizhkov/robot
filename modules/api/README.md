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