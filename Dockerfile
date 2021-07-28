FROM node:10.16 as builder

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn

COPY . ./
RUN yarn build

FROM node:10.16 as runner

COPY --from=builder /usr/src/app/ .

EXPOSE 3000

USER node

CMD [ "yarn", "start" ]