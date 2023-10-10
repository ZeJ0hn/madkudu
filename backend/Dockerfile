FROM node:18.18-buster-slim

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

# add app
COPY . ./
RUN npm run test
RUN npm run build
RUN cp -r data dist/

# start app
CMD ["npm", "start"]
