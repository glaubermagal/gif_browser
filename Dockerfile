FROM node:18.17

RUN mkdir -p /home/node/app/ && mkdir -p /home/node/app/node_modules/

WORKDIR /home/node/app/

COPY package.json ./
COPY yarn.lock ./

RUN npm install -g prisma

RUN npm install

RUN prisma generate

COPY . ./

CMD [ "yarn", "dev" ]
