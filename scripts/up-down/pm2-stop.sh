# This script is running pm2 commands to down and remove the module api from pm2.
# all paths are routing from the root of app (robot).

pm2 stop api # stop api
pm2 delete api # remove  api