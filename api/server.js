const express = require('express')
//import router

const server = express()

server.use(express.json())

//use routers

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    });
  });

module.exports = server