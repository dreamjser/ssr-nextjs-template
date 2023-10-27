FROM keymetrics/pm2:latest-alpine

WORKDIR /nextjs

# Bundle APP files
COPY package*.json /nextjs/
RUN npm i
COPY . /nextjs/

CMD [ "pm2-runtime", "start", "deploy/pm2.json" ]
