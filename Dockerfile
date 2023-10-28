FROM node:20.9.0-alpine3.17
WORKDIR /project-week-11/src/app
COPY package*.json ./
COPY . .
EXPOSE 8090
CMD ["node js", "app js"]