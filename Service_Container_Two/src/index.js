const express = require('express');
const app = express();

app.get('/info', function (req, res) {
  res.send({
    name: 'John',
    age: 32,
    location: "USA"
  });
});


const SERVER_PORT = process.env.DOCKER_PORT ? process.env.DOCKER_PORT : 2000;

app.listen(SERVER_PORT, () => {
  console.log(`server started at port: ${SERVER_PORT}`);
});

