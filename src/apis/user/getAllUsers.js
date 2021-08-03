
const db = require('../../db/config')

module.exports = getAllUsers = (req, res, next) => {
  try {
    var users = db.getData('/users')
    console.log('all users: ', users)

    res.json({
      status: true,
      users
    })
  } catch (error) {
    console.log(error)

    next(error)
  }
}