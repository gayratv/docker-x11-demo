# Playwright docker

export DISPLAY=:0
printenv

docker pull mcr.microsoft.com/playwright:v1.33.0-jammy


Crawling and scraping
On untrusted websites, it's recommended to use a separate user for launching the browsers in combination with the seccomp profile. Inside the container or if you are using the Docker image as a base image you have to use adduser for it.


https://playwright.dev/docs/docker

docker run -it --rm --ipc=host --user pwuser --security-opt seccomp=seccomp_profile.json mcr.microsoft.com/playwright:v1.33.0-jammy /bin/bash

https://github.com/microsoft/playwright/blob/main/utils/docker/seccomp_profile.json

{
"comment": "Allow create user namespaces",
"names": [
"clone",
"setns",
"unshare"
],
"action": "SCMP_ACT_ALLOW",
"args": [],
"includes": {},
"excludes": {}
}

Using --ipc=host is recommended when using Chrome (Docker docs). Chrome can run out of memory without this flag.


====================================
https://medium.com/automation-with-donald/run-playwright-with-docker-990ef5f34f1b

Run the container from image with mount options for secret env file

docker run -it --mount type=bind,source=$(pwd)/.env,target=/app/.env e2etest:v0 npm run only


===========
"dependencies": {
"playwright": "^1.15.1"

docker run -it --rm playwright-app

================
https://www.digitalocean.com/community/tutorials/how-to-run-end-to-end-tests-using-playwright-and-docker
docker build -t playwright-docker .

docker run -it playwright-docker:latest npm run test

======================
https://www.oddbird.net/2022/11/30/headed-playwright-in-docker/

Mount the XServer Unix socket inside the container


Ubuntu: X11 forwarding to view GUI applications running on server hosts

https://fabianlee.org/2018/10/14/ubuntu-x11-forwarding-to-view-gui-applications-running-on-server-hosts/


https://www.stat.ipb.ac.id/agusms/index.php/2019/01/15/how-to-run-graphical-linux-applications-on-bash-on-ubuntu-on-windows-10/

Install VcXsrv
In order to run graphical Linux applications, you’ll need an X server.

VcXsrv is the only fully open source and up-do-date native X server for windows.
https://sourceforge.net/projects/vcxsrv/

Test a graphical application
Install x11-apps
sudo apt-get install x11-apps
Run xeyes
A new window will open, containing a pair of eyes that will follow your mouse movements.

======================
https://princetonuniversity.github.io/PUbootcamp/ssh-instructions/
Windows
Install Xming.
https://sourceforge.net/projects/xming/

ssh -Y <NetID>@adroit.princeton.edu

================
https://learn.microsoft.com/en-us/windows/wsl/tutorials/gui-apps

====================
Containerizing GUI applications with WSLg
https://github.com/microsoft/wslg/blob/main/samples/container/Containers.md