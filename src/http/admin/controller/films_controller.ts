import { CrudController } from './crud_controller.js'
import Film from '#models/film'
import { ContentCreatedEvent } from '#src/domain/application/event/ContentCreatedEvent'
import { EventMap } from '#start/events'
import { HttpContext } from '@adonisjs/core/http'

export default class FilmsController extends CrudController {
  protected entity = Film
  protected composantRender: string = 'film'
  protected events: EventMap<{
    'user:registered': typeof ContentCreatedEvent
  }> = {
    'user:registered': undefined,
  }

  async index() {
    const query = await this.entity.builder().query.paginate(1, 20)
    return this.crudIndex(query)
  }

  create() {
    console.log('called film controller create')
    return this.crudNew()
  }

  async edit({ params }: HttpContext) {
    const id = params.id
    const data = await this.entity.findByOrFail('id', id)
    return this.crudEdit(data)
  }
}
