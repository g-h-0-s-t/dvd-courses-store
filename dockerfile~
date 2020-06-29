FROM node:alpine
WORKDIR dvd-courses-store
COPY . .
RUN npm ci
RUN npm run build
CMD npm run production

