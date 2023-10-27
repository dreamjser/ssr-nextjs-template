FROM keymetrics/pm2:18-alpine

WORKDIR /nextjs

# Bundle APP files
COPY package*.json /nextjs/
COPY deploy/pm2.json /nextjs/
RUN npm i pnpm -g && pnpm i --ignore-scripts
COPY . /nextjs/

CMD [ "pm2-runtime", "start", "pm2.json" ]
