const express = require('express')
const router = express.Router()
const register = require('../controller/register')
const updateUserDetails = require('../controller/updateUserDetails')
const userDetails = require('../controller/userDetails')
const checkPassword = require('../controller/checkPassword')
const checkEmail = require('../controller/checkEmail')

router.post('/register', register)

router.post('/email', checkEmail)

router.post('/password', checkPassword)

router.get('/user-details', userDetails)

router.post('update-user', updateUserDetails)

module.exports = router