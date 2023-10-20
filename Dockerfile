FROM node:18

### App is the work directory
WORKDIR /app 

### Copy package json and package-lock json file in to docker app directory
COPY package*.json ./

### Install dependecies
RUN npm install

### Now copy other files to app directory
COPY . .

### The Node app is running on 8080 so need to expose it from docker to connect that into main OS
EXPOSE 8080

### Last run the node script 
CMD [ "node", "index.js" ]