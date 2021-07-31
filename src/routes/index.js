const notification = require('./notification')

function routes(app) {
  app.use('/api/notification', notification)
}

module.exports = routes