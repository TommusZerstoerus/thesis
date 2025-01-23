FROM node:20 as base
COPY ./package.json ./yarn.lock ./

RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build


FROM nginx as build
COPY --from=base ./dist /usr/share/nginx/html
EXPOSE 80