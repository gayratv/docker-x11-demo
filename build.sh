#!/bin/bash

echo "hello"
docker-compose down
# Create a tar archive of the directory
tar -cf src.tar src
docker image rm playwright-docker2-firefox
docker-compose up -d

#chmod +x build.sh
#./build.sh
