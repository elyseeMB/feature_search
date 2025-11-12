import User from '#models/user'
import { BaseEvent } from '@adonisjs/core/events'

export class UserCreatedEvent extends BaseEvent {
  constructor(private readonly user: User) {
    super()
  }

  getUser(): User {
    return this.user
  }
}
