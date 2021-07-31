const express = require('express')
const app = express()
const PORT = process.env.PORT || 3999
//base setup
const middleware = require('./middlewares')
const errHandle = require('./middlewares/errHandle')
const routes = require('./routes')
const db = require('./db/config')
//firebase setup
const admin = require('firebase-admin')
const serviceAccount = require('../firebase_private_key.json')
const UserModel = require('./models/user')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
})

db.connect()
middleware(app)
app.use(errHandle)

app.get('/', (req, res) => {
  res.send('Fake ninatron API')
})

UserModel.find({})
  .then(resData => {
    if (resData?.length > 0) {
      console.log('user id list: ')
      resData.forEach(item => {
        console.log(item._id)
      })
    } else {
      console.log('No any user!')
    }
  })
  .catch(() => {
    console.log('can not get user list')
  })

routes(app)

app.listen(PORT, () => {
  console.log('Server has started successfully!!!')
})
