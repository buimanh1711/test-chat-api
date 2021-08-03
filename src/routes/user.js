const express = require('express')
const getAllUsers = require('../apis/user/getAllUsers')
const createUser = require('../apis/user/createUser')

const router = express.Router()

router.get('/', getAllUsers)
router.post('/', createUser)

module.exports = router