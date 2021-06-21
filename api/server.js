const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
//import router
const authRouter = require('./auth/auth-router')
const usersRouter = require('./users/users-router')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

//use routers
server.use('/api/auth', authRouter)
server.use('/api/users', usersRouter)

server.get('/', (req, res, next) => {
  res.send('<h1>Here\'s the <a href="https://github.com/Pot-Luck-Planner-03/Backend">README</a></h1>')
})

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    });
  });

module.exports = server