import Film from '#models/film'
import { ContentCreatedEvent } from '#src/domain/application/event/ContentCreatedEvent'
import type { HttpContext } from '@adonisjs/core/http'
import emitter from '@adonisjs/core/services/emitter'

export default class HomeController {
  async handle({ inertia }: HttpContext) {
    // const film = await Film.createMany([
    //   {
    //     tconst: 'exemple voiture johnd 33fdsf',
    //     title_type: 'exemple',
    //     primary_title: 'exemple',
    //     original_title: 'exemple',
    //     is_adult: false,
    //     start_year: 1,
    //     end_year: 2,
    //     runtime_minutes: 2,
    //     genres: 'exemple',
    //   },
    //   {
    //     tconst: 'exemple 2 maisons jane 33fsfd',
    //     title_type: 'exemple 2',
    //     primary_title: 'exemple 2',
    //     original_title: 'exemple 2',
    //     is_adult: false,
    //     start_year: 1,
    //     end_year: 2,
    //     runtime_minutes: 2,
    //     genres: 'exemple',
    //   },
    // ])
    // emitter.emit('user:registered', new ContentCreatedEvent(film))

    return inertia.render('home')
  }
}
