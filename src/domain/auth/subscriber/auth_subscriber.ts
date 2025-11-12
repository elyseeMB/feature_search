import emitter from '@adonisjs/core/services/emitter'
import { UserCreatedEvent } from '../event/user_created_event.js'

export class AuthSubscriber {
  async handle(event: UserCreatedEvent) {
    console.log('event authSubcriber', event.getUser())
  }
}

emitter.on(UserCreatedEvent, [AuthSubscriber])
