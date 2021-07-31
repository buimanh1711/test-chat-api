
const admin = require('firebase-admin')
const usersData = require('../../../fakeUsersData.json')
const UserModel = require('../../models/user')

const specifiedSend = (req, res, next) => {
  const { query } = req
  const { topic, userId } = query

  const message = {
    notification: {
      title: 'Test notif',
      body: "This is test notif"
    }
  }

  if (userId) {
    return UserModel.findOne({ _id: userId })
      .then(resData => {
        if (resData?.token) {
          message.token = resData.token
          return admin.messaging().send(message)
        } else {
          req.err = "specified user has not registed!"
          return next('last')
        }
      })
      .then((response) => {
        console.log('Successfully sent message:', response)
        res.send('trigger notif to specified user')
      })
      .catch((error) => {
        next(error)
      })

  } else if (topic) {
    message.topic = topic
    return admin.messaging().send(message)
      .then((response) => {
        console.log('Successfully sent message:', response)
        res.status(200).send('trigger notif to topic')
      })
      .catch((error) => {
        console.log('Error sending message:', error)
        next('Error sending message:')
      })
  } else {
    message.topic = 'test'
    return admin.messaging().send(message)
      .then((response) => {
        console.log('Successfully sent message:', response)
        res.send('trigger notif to topic ' + topic)
      })
      .catch((error) => {
        next('Error sending message:', error)
      })
  }
}

module.exports = specifiedSend