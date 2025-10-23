import('#src/infrastructures/Search/EventSubscriber/IndexerSubscriber')
import emitter from '@adonisjs/core/services/emitter'
import { ContentCreatedEvent } from 'src/domain/application/event/ContentCreatedEvent.js'

type Constructor = new (...args: any) => any

export type EventMap<T extends Record<string, Constructor>> = {
  [K in keyof T]: (new (...args: ConstructorParameters<T[K]>) => InstanceType<T[K]>) | undefined
}

declare module '@adonisjs/core/types' {
  interface EventsList {
    'user:registered': ContentCreatedEvent
  }
}

// emitter.on('user:registered', async (event) => {
//   const subscriber = IndexerSubscriber.register(event.getContent())
//   const indexer = await app.container.make(IndexerInterface)
//   await subscriber.handle(indexer)
// })

emitter.on('user:registered', [
  () => import('#src/infrastructures/Search/EventSubscriber/IndexerSubscriber'),
])
