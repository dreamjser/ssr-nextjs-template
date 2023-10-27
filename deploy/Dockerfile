FROM keymetrics/pm2:16-buster

WORKDIR /nextjs

# Bundle APP files
COPY package*.json /nextjs/
RUN npm i pnpm -g && pnpm i --ignore-scripts
COPY . /nextjs/

CMD [ "pm2-runtime", "start", "deploy/pm2.json" ]
