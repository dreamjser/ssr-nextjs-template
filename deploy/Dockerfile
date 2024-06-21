FROM keymetrics/pm2:16-buster

WORKDIR /nextjs

COPY . /nextjs/

CMD [ "pm2-runtime", "start", "deploy/pm2.json" ]
