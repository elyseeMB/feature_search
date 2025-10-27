import { BaseBuilder } from '#src/http/builders/base_builder'
import Film from '#models/film'

export class FilmBuilder extends BaseBuilder<typeof Film, Film> {
  constructor() {
    super(Film)
  }

  static new() {
    return new FilmBuilder()
  }
}
