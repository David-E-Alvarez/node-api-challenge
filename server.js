
const express = require('express');
const server = express();
server.use(express.json());


server.get('/', (req, res) => {
    res.send("hello world");
  });

  //project request handlers
  const projectRouter = require('./projectRouter.js');
  server.use('/projects', projectRouter);

//actions request handlers
const actionsRouter = require('./actionsRouter.js');
server.use('/', actionsRouter);
  

module.exports = server;
