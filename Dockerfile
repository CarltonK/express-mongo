FROM node:12

RUN mkdir /app

WORKDIR /app

COPY package.json /app/
COPY package-lock.json /app/

RUN npm install

COPY . .

# ENV PORT=3000

CMD [ "npm", "start" ]