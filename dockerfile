FROM node:alpine
WORKDIR dvd-courses-store
COPY . .
RUN npm i
RUN npm run build
CMD npm run production

