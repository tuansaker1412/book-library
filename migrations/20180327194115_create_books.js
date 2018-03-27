
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', function (table) {
    table.increments()
    table.string('name').collate('utf8_vietnamese_ci')
    table.string('author').collate('utf8_vietnamese_ci')
    table.string('printer').collate('utf8_vietnamese_ci')
    table.integer('number')
    table.string('nts')
    table.boolean('sv').defaultTo(false)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books')
};
