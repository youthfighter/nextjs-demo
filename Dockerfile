FROM node:14
COPY .next /app/.next
COPY public /app/public
COPY package.json /app
WORKDIR /app
RUN npm i --production
EXPOSE 3000
CMD npm run start