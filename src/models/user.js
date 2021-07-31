const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
  token: String
})

module.exports = mongoose.model('user', User)