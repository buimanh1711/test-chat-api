
const admin = require('firebase-admin')
const UserModel = require('../../models/user')

const registration = (req, res, next) => {
  const data = req.body
  const { token } = data

  return admin.messaging().subscribeToTopic(token, 'test')
    .then((response) => {
      console.log('Successfully subscribed to topic:', response)

      const newUser = new UserModel({ token })

      newUser.save(err => {
        if (err === null) {
          res.json({
            status: true,
            message: "added user token"
          })
        } else {
          req.err = 'Add user failed'
          next('last')
        }
      })

    })
    .catch((error) => {
      console.log(error)
      req.err = 'Error subscribing to topic'
      next('last')
    })

}

module.exports = registration