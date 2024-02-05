FROM node:18.17

RUN mkdir -p /home/node/app/ && mkdir -p /home/node/app/node_modules/

WORKDIR /home/node/app/

COPY package.json ./
COPY yarn.lock ./

RUN npm install -g yarn --force

RUN npm install -g prisma

RUN yarn install

RUN npx prisma generate


COPY . ./

CMD ["./wait-for-it.sh", "db:5432", "--", "npx", "prisma", "db", "push"]

# CMD [ "yarn", "dev" ]
