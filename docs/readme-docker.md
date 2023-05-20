# Docker

docker image prune -a -f                         Удалить все неиспользуемые Docker-образы:
docker rmi -f $(docker images -q)                Принудительно удалить все Docker-образы
docker container prune -f                        Удалить все остановленные (неиспользуемые) Docker-контейнеры:
docker rm -f $(docker ps -a -q)                  Принудительно удалить все Docker-контейнеры, включая запущенные контейнеры:


rimraf ./build && tsc
docker container prune -f && docker image prune -a -f && docker build -t rmq-test .


docker run -it rmq-test

docker-compose build

docker-compose down

docker image rm playwright-docker2-firefox
docker-compose up -d



docker-compose -f docker-compose.yml -p rmq-manager up -d


docker run --rm \
-e DISPLAY=:0 \
-v /tmp/.X11-unix:/tmp/.X11-unix \
mcr.microsoft.com/playwright:next-jammy npx -y playwright open google.com