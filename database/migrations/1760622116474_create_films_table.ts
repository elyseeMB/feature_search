import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'films'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      /*
       table.increments('id')
      table.string('tconst').notNullable().unique()
      table.string('title_type', 50)
      table.string('primary_title', 500)
      table.string('original_title', 500)
      table.boolean('is_adult')
      table.integer('start_year')
      table.integer('end_year')
      table.integer('runtime_minutes')
      table.string('genres', 255)

      table.timestamp('created_at')
      table.timestamp('updated_at') */

      table.text('tconst').notNullable().unique()
      table.text('title_type')
      table.text('primary_title')
      table.text('original_title')
      table.text('is_adult')
      table.text('start_year')
      table.text('end_year')
      table.text('runtime_minutes')
      table.text('genres')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
