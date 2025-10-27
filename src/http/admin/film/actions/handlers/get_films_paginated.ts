import { CrudController } from '#src/http/admin/controller/crud_controller'
import Film from '#models/film'

export default class GetFilmsPaginated extends CrudController {
  protected entity = Film
  protected composantRender: string = 'film'

  async asController() {
    const query = await this.entity.builder().query.paginate(1, 20)
    return this.crudIndex(query)
  }
}
