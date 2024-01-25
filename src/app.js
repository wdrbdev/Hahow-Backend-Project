const express = require('express')

const herosRouter = require('./router/heros')
const errorHandler = require('./middleware/errorHandler')
const NotFoundError = require('./error/NotFoundError')

const app = express()
app.use('/heros', herosRouter)
app.all('*', (req, res, next) => {
  next(new NotFoundError(`route '${req.originalUrl}'`))
})
app.use(errorHandler)

module.exports = app
