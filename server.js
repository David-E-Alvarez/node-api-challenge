
const express = require('express');
const server = express();
server.use(express.json());


server.get('/', (req, res) => {
    res.send("hello world");
  });

  const projectRouter = require('./projectRouter.js');
  server.use('/projects', projectRouter);

  

module.exports = server;
