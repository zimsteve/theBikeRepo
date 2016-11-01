var express = require('express')
var router = express.Router()

var bikesDb = require('../db/bikes')

// var bikes = [
//     {name: 'Trek Mondoen 5.9'}
// ]

/* GET bikes page. */
router.get('/', function (req, res) {
  bikesDb.getBikes()
    .then((bikes) => {
      res.render('bikes', {bikes})
    })
    .catch(() => {
      res.status(500)
    })
})

router.get('/new', (req, res) => {
  res.render('newBike')
})

router.post('/', (req, res) => {
  console.log('req.body', req.body)
  bikesDb.newBike(req.body)
  .then(() => {
    res.redirect('/bikes')
  })
  .catch(() => {
    res.status(400)
  })
})

module.exports = router
