// modules
var express = require('express')
var logger = require('morgan')

var app = express()

const PORT = 7777
const HOST = `http://localhost:${PORT}`

global.consts = {}

// Uses
app.use(logger('dev'))

app.use("/i", express.static(__dirname + '/i'))

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  next()
})

// routes
var index = require('./api/routes')
app.use(index)

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// Error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = {} //req.app.get('env') === 'production' ? err : {}

  // render the error page
  res.status(404)
  res.send('Not found')
})

app.listen(PORT, () => {
	console.log(`Server started at ${PORT}`)
})

module.exports = app
