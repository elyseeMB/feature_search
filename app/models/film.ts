import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Film extends BaseModel {
  static table = 'films'

  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column()
  declare tconst: string

  @column()
  declare title_type: string

  @column()
  declare primary_title: string

  @column()
  declare original_title: string

  @column()
  declare is_adult: boolean

  @column()
  declare start_year: number

  @column()
  declare end_year: number

  @column()
  declare runtime_minutes: number

  @column()
  declare genres: string

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
