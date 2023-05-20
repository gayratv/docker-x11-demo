#!/bin/bash

echo "hello"
docker-compose down
# Create a tar archive of the directory
#tar -cf src.tar src
docker image rm docker-x11-demo-firefox
docker-compose up -d

#chmod +x build.sh
#./build.sh
