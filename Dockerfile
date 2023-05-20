FROM mcr.microsoft.com/playwright:next-jammy
WORKDIR /node/
ADD src.tar ./*.json ./

RUN npm ci
RUN #npm ci --omit=dev
#RUN apt-get update && apt-get install iputils-ping -y && apt-get install bash -y && npm ci --omit=dev
#RUN #apt-get update && apt-get upgrade -y && npm ci --omit=dev

ENV PATH /node/node_modules/.bin:$PATH
#export DISPLAY=:0


#USER node
# приложение слушает порт 3020
#EXPOSE 3020
#CMD ["sh"]
#CMD ["node", "index.mjs"]
#CMD ["sleep", "infinity"]
CMD ["ts-node", "./src/index.ts"]
