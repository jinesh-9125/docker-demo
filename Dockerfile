# using node apline form version 18 
FROM node:18-alpine  

# create a app dir in root for container file system
RUN mkdir -p /app

# select /app as a current working dir
WORKDIR /app

# copy package.json form host machine to container's app dir 
COPY package.json .

# install all packages
RUN npm install 

COPY . .

# define a environment var as PORT
ENV PORT 8000

# expose port to outer world
EXPOSE $PORT

# commands to be executed on container run  
CMD [ "npm","start" ]