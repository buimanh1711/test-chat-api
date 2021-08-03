
module.exports = sendMessage = (req, res, next) => {
  var data = req.body

  const userId = data._id

  if (!userId || userId === 'null' || userId === 'undefined') {
    req.err = 'Send message failed!'
    return next('last')
  }

  console.log('user-id: ', userId)

  res.json({
    status: true,
    message: 'Send message successfully'
  })
}