
exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('bikes', (table) => {
    table.increments('id')
    table.string('name')
    table.integer('gears')
    table.text('specs')
    table.string('images')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('bikes')
}
