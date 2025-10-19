import { IndexerSubscriber } from '#src/infrastructures/Search/EventSubscriber/IndexerSubscriber'
import { IndexerInterface } from '#src/infrastructures/Search/IndexerInterface'
import app from '@adonisjs/core/services/app'
import emitter from '@adonisjs/core/services/emitter'
import { ContentCreatedEvent } from 'src/domain/application/event/ContentCreatedEvent.js'

declare module '@adonisjs/core/types' {
  interface EventsList {
    'user:registered': ContentCreatedEvent
  }
}

emitter.on('user:registered', async (event) => {
  const subscriber = IndexerSubscriber.register(event.getContent())
  const indexer = await app.container.make(IndexerInterface)
  await subscriber.handle(indexer)
})
