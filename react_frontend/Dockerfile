FROM node:20-alpine AS builder
WORKDIR /app
RUN npm install -g react-scripts

COPY package.json yarn.lock ./
RUN yarn install

COPY . ./

RUN npx expo export --platform web

FROM nginx
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80