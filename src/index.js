const express = require('express')
const app = express()
const PORT = process.env.PORT || 3999
//base setup
const middleware = require('./middlewares')
const errHandle = require('./middlewares/errHandle')
const routes = require('./routes')

middleware(app)
routes(app)
app.use(errHandle)

app.get('/', (req, res) => {
  res.send('Fake ninatron API')
})

app.listen(PORT, () => {
  console.log('Server has started successfully!!!')
})
