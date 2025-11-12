import transmit from '@adonisjs/transmit/services/main'

export class NotificationIndex {
  constructor() {
    transmit.broadcast('global', { message: 'je suis le message' })
  }
}
