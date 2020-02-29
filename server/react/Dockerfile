# build environment
FROM node:12.3.0-alpine
# Create app directory
WORKDIR /react
# Install app dependencies
COPY package*.json ./

RUN npm install --silent
# Copy app source code
COPY . .

#Expose port and start application
EXPOSE 3000
CMD ["npm", "start"]