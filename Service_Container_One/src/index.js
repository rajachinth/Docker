const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', function (req, res) {
  res.send(`
    <html>
        <title>Docker Learnings</title>
        <body>
            <h1 style="color: red">Welcome!</h1>
        </body>
    </html>
    `);
});

app.get('/info', async (req, res) => {
  // const {data, error} = await axios('http://host.docker.internal:4000/info', {
  //   method: 'GET'
  // })
  const {data, error} = await axios('http://servicecontainertwo:4000/info', {
    method: 'GET'
  })
  res.send(`
     <html>
        <body>
          <h1 style="color: blue">${JSON.stringify(data)}</h1>
        </body>
    </html>
  `)
})

const SERVER_PORT = process.env.DOCKER_PORT ? process.env.DOCKER_PORT : 3000;

app.listen(SERVER_PORT, () => {
  console.log(`server started at port: ${SERVER_PORT}`);
});
