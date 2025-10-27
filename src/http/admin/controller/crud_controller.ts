import Content from '#src/domain/application/entity/Content'
import { ContentCreatedEvent } from '#src/domain/application/event/ContentCreatedEvent'
import { EventMap } from '#start/events'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import emitter from '@adonisjs/core/services/emitter'
import { LucidModel } from '@adonisjs/lucid/types/model'
import { BaseAction } from '#src/infrastructures/orm/actions/base_action'

@inject()
export abstract class CrudController extends BaseAction {
  protected entity: LucidModel = Content
  protected composantRender: string = 'blog'
  protected events: EventMap<{
    'user:registered': typeof ContentCreatedEvent
  }> = {
    'user:registered': undefined,
  }

  constructor(private readonly ctx: HttpContext) {
    super()
  }

  crudIndex(query: any) {
    if (this.events['user:registered']) {
      emitter.emit('user:registered', new this.events['user:registered'](query))
    }

    return this.ctx.inertia.render(this.composantRender, {
      doc: query,
    })
  }

  crudEdit(data: Content) {
    return this.ctx.inertia.render('film/edit', { data })
  }
}
