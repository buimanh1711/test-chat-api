const express = require('express')
const validateCaptcha = require('../apis/validate-captcha')
const router = express.Router()

router.post('/', validateCaptcha)

module.exports = router