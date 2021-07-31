const express = require('express')
const registration = require('../apis/notification/registration')
const trigger = require('../apis/notification/trigger')
const router = express.Router()

router.get('/trigger', trigger)
router.post('/registrations', registration)

module.exports = router