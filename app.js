require('dotenv').config()

const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const connectDB = require('./config/db')
const helmet = require('helmet')
const compression = require('compression')

const indexRouter = require('./routes/index')

const app = express()

app.use(helmet())

app.use(compression())

// connect database
connectDB()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'client/build')))

app.use('/api', indexRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.json({
    message: 'Server Error',
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  })
})

module.exports = app
