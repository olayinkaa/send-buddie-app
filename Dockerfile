FROM node:14
LABEL maintainer="Ibrahim Olayinka <ibrahimolayinka@gmail.com>" \
    description="frontend developer"
WORKDIR /app
COPY package-lock.json .
COPY package.json .
RUN npm install
COPY . .
CMD [ "npm","start"]