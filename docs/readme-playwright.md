# Playwright docker


https://playwright.dev/docs/docker

docker pull mcr.microsoft.com/playwright:v1.33.0-jammy

### Запуск

docker run -it --rm --ipc=host mcr.microsoft.com/playwright:next-jammy /bin/bash

### Теги

:v1.33.0-focal

next-focal
:next-jammy 
- tip-of-tree image version based on Ubuntu 22.04 LTS (Jammy Jellyfish).

Все теги:
https://mcr.microsoft.com/en-us/product/playwright/tags

Base images
We currently publish images based on the following Ubuntu versions:

Ubuntu 22.04 LTS (Jammy Jellyfish), image tags include jammy
Ubuntu 20.04 LTS (Focal Fossa), image tags include focal