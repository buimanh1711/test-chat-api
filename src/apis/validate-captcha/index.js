const axios = require('axios')

const validateCaptcha = (req, res, next) => {
  let token = req.body.captchaToken

  if (!token || token === 'null' || token === 'undefined') {
    req.err = 'Can not get captcha token!'
    return next('last')
  }

  const params = new URLSearchParams()
  params.append('secret', '6LfZJdMbAAAAAA1WEBUSOY56Wd0Qf3TLdn3ePcdP')
  params.append('response', token)

  axios({
    method: 'post',
    url: 'https://www.google.com/recaptcha/api/siteverify',
    data: params,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
    .then(response => {
      if (response.data.success) {
        console.log(response.data)
        res.json({
          status: true,
          message: 'Validate successfully!',
          token
        })
      } else {
        next(response.data)
      }
    })
    .catch(error => {
      next(error)
    })

}

module.exports = validateCaptcha