
const db = require('../../db/config')

module.exports = createUser = (req, res, next) => {
  console.log('creating user...')
  const userId = req.body._id
  console.log('current user: ', userId)
  try {
    // var users = db.getData('/users')
    // if (users?.length > 0) {
    //   let check = users.findIndex(user => user === userId)
    //   if (check == -1) {
    //     db.push('/users[]', userId, true)
    //   }
    // } else {
    //   db.push('/users[]', userId, true)
    // }
    db.push('/users[]', userId, true)

    res.json({
      status: true,
      message: 'created user',
      user: userId
    })

  } catch (error) {
    next(error)
  }
}