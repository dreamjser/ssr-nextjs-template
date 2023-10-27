FROM keymetrics/pm2:latest-alpine

WORKDIR /nextjs

# Bundle APP files
COPY package*.json /nextjs/
COPY deploy/pm2.json /nextjs/
RUN npm i
COPY . /nextjs/

CMD [ "pm2-runtime", "start", "pm2.json" ]
