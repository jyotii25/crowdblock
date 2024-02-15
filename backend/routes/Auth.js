const router = require('express').Router()
const path = require('path')

const opt = { root: path.join(__dirname, "../../frontend/pages/authentication") }

router.get('/', (req, res) => {
  res.sendFile('login.html', opt)
})

//router.post('/', (req, res) => {
//  console.log(req.params.data)
//})
module.exports = router
