FROM node:12
#make directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
# install dependency
COPY package*.json ./ 
RUN npm install --silent

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]