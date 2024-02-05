FROM node:18.17

RUN mkdir -p /home/node/app/ && mkdir -p /home/node/app/node_modules/

WORKDIR /home/node/app/

COPY package.json ./
COPY yarn.lock ./

RUN npm install yarn

RUN npm install -g prisma

RUN yarn install

COPY . ./

CMD [ "yarn", "dev" ]
