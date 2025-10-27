import Film from '#models/film'
import { CrudController } from '#src/http/admin/controller/crud_controller'
import GetFilmsPaginated from '#src/http/admin/film/actions/handlers/get_films_paginated'

export default class RenderFilmsIndex extends CrudController {
  protected entity = Film
  protected composantRender: string = 'film'

  async asController() {
    const query = await GetFilmsPaginated.run()
    return this.crudIndex(query)
  }
}
