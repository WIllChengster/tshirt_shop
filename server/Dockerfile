# base image

FROM node:12.3.0-alpine



# set working directory
WORKDIR /server

# add `/app/node_modules/.bin` to $PATH
ENV PATH /server/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json .
RUN npm install


# start app
CMD ["npm", "run", "dev:server"]