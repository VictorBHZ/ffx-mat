FROM node:20.9.0 AS build

WORKDIR /code

COPY ./package.json /code/package.json

RUN npm install