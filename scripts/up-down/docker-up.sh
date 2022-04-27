# this script is run package.json scripts that are running docker containers.
# all paths are routing from the root of app (robot)

npm run docker:up --prefix ./database # up docker with postgres
npm run docker:up --prefix ./modules/dbMaster # up docker with dbMaster