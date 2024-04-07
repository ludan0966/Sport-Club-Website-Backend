

const express = require('express')
const router = express.Router()
const { Registration } = require('../controllers/userController')

router.post('/register', Registration)
router.all('*', (req, res, next) => {
  res.status(404).send('<p>404 Not Found</p>')
  next()
})
module.exports = router