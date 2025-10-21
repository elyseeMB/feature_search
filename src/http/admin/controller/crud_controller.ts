import Content from '#src/domain/application/entity/Content'
import { ContentCreatedEvent } from '#src/domain/application/event/ContentCreatedEvent'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import emitter from '@adonisjs/core/services/emitter'
import { LucidModel } from '@adonisjs/lucid/types/model'

type EventMap = {
  ['user:registered']: (new (data: any) => ContentCreatedEvent) | undefined
}

@inject()
export abstract class CrudController {
  protected entity: LucidModel = Content
  protected composantRender: string = 'blog'
  protected events: { [k in keyof EventMap]: EventMap[k] } = {
    'user:registered': undefined,
  }

  constructor(private readonly ctx: HttpContext) {}

  crudIndex(query: any) {
    if (this.events['user:registered']) {
      emitter.emit('user:registered', new this.events['user:registered'](query))
    }

    return this.ctx.inertia.render(this.composantRender, {
      doc: query,
    })
  }
}
