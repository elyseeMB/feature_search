import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import Content from '#src/domain/application/entity/Content'

export default class Film extends Content {
  static table = 'films'

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
}
