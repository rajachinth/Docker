FROM node
ARG PORT_VALUE
ENV DOCKER_PORT=$PORT_VALUE
EXPOSE $DOCKER_PORT
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD ["npm", "start"]