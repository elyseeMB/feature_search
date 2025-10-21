import { CrudController } from './crud_controller.js'
import Film from '#models/film'
import { ContentCreatedEvent } from '#src/domain/application/event/ContentCreatedEvent'

export default class FilmsController extends CrudController {
  protected entity = Film
  protected composantRender: string = 'film'
  protected events: {
    'user:registered': (new (data: any) => ContentCreatedEvent) | undefined
  } = {
    'user:registered': ContentCreatedEvent,
  }

  async index() {
    const query = await Film.query().select().limit(10).exec()

    return this.crudIndex(query)
  }
}
