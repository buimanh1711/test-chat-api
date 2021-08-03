const validateRouter = require('./validate')
const messageRouter = require('./message')

function routes(app) {
  app.use('/api/validate', validateRouter)
  app.use('/api/message', messageRouter)
}

module.exports = routes
