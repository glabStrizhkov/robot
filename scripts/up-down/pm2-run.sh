# This script is running pm2 commands to up the module api.
# all paths are routing from the root of app (robot).

pm2 start ./modules/api/main.js --name api # run api
pm2 save # save state
pm2 startup # save api tp reboot