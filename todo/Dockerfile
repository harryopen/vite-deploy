FROM node:17-alpine

WORKDIR /app
COPY package.json ./
RUN npm install
RUN npm install -g vite
COPY . .
RUN npm run build
EXPOSE 3000
CMD [ "npm","run","start" ]