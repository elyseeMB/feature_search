import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'films'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.boolean('is_adult')
      table.integer('start_year')
      table.integer('end_year')
      table.integer('runtime_minutes')
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('is_adult')
      table.dropColumn('start_year')
      table.dropColumn('end_year')
      table.dropColumn('runtime_minutes')
    })
  }
}
