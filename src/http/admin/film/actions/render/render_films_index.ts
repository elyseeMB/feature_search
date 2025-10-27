import Film from '#models/film'
import { EventMap } from '#start/events'
import { ContentCreatedEvent } from '#src/domain/application/event/ContentCreatedEvent'
import { CrudController } from '#src/http/admin/controller/crud_controller'

export default class RenderFilmsIndex extends CrudController {
  protected entity = Film
  protected composantRender: string = 'film'

  async asController() {
    const query = await this.entity.builder().query.paginate(1, 20)
    return this.crudIndex(query)
  }
}
