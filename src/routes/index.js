const validateRouter = require('./validate')
const messageRouter = require('./message')
const userRouter = require('./user')

function routes(app) {
  app.use('/api/validate', validateRouter)
  app.use('/api/messages', messageRouter)
  app.use('/api/users', userRouter)
}

module.exports = routes
