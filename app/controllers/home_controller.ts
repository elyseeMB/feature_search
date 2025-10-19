import Film from '#models/film'
import emitter from '@adonisjs/core/services/emitter'
import type { HttpContext } from '@adonisjs/core/http'
import { randomUUID } from 'crypto'
import { ContentCreatedEvent } from '../../src/domain/application/event/ContentCreatedEvent.js'

export default class HomeController {
  async handle({ inertia }: HttpContext) {
    // const film = await Film.all()

    // emitter.emit('user:registered', new ContentCreatedEvent(film))

    return inertia.render('home')
  }
}
