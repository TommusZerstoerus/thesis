FROM node:20-alpine
COPY . .
RUN yarn install
RUN npm install -g react-scripts
RUN npx expo export --platform web

FROM nginx
COPY ./dist /usr/share/nginx/html
EXPOSE 80