FROM node:16.20-alpine

WORKDIR /nextjs

COPY package*.json /nextjs/

RUN npm i pnpm -g && pnpm i --ignore-scripts

COPY . /nextjs

RUN npm run build && npm start
