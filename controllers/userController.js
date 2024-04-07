const registrationFee = require('../models/user')
const Registration = (req, res) => {
  const register = {
    id: req.body.id,
    fullname: req.body.fullname,
    address: req.body.address,
    status: req.body.status,
    price: registrationFee[`${req.body.status}`]
  }
  res.json(register)
}
module.exports = { Registration }