import { CrudController } from '#src/http/admin/controller/crud_controller'
import { HttpContext } from '@adonisjs/core/http'
import Film from '#models/film'

export default class RenderFilmShow extends CrudController {
  protected entity = Film
  protected composantRender = 'film/edit'

  async asController({ params }: HttpContext) {
    const id = params.id
    const data = await this.entity.findByOrFail('id', id)
    return this.crudEdit(data)
  }
}
