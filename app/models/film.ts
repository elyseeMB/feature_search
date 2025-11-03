import { column } from '@adonisjs/lucid/orm'
import Content from '#src/domain/application/entity/Content'
import { FilmBuilder } from '#src/domain/film/builder/film_builder'

export default class Film extends Content {
  static builder = () => FilmBuilder.new()

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
