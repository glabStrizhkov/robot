sudo docker run -d -p 5432:5432 postgres \
-e POSTGRES_USER=robot \
-e POSTGRES_DB=robot \
-e POSTGRES_PASSWORD=robot \
--add-host=192.168.0.113

sudo docker run -d -p 3002:3002 glab16/db_master:latest \
-e PORT=3002 \
-e DATABASE=robot \
-e DB_PASSWORD=robot \
-e DB_HOST=192.168.0.113 \
-e DB_PORT=5432 \
-e DIALECT=postgres \
-e IS_DEV=false \
--add-host=192.168.0.113
