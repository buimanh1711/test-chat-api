const express = require('express')
const sendMessage = require('../apis/message/sendMessage')
const getAllUsers = require('../apis/user/getAllUsers')
const router = express.Router()

router.post('/', sendMessage)
router.get('/', getAllUsers)

module.exports = router