// db chat - thanks brady
var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']

var knex = Knex(knexConfig)

module.exports = {
  getBikes,
  newBike
}

function getBikes () {
    // amazing total score syntax
  return knex('bikes')
}

function newBike (bike) {
  return knex('bikes')
        .insert(bike)
}
