import { inject } from '@adonisjs/core'
import { IndexerInterface } from '../IndexerInterface.js'
import { ContentCreatedEvent } from '#src/domain/application/event/ContentCreatedEvent'

export default class IndexerSubscriber {
  @inject()
  handle(event: ContentCreatedEvent, indexer: IndexerInterface) {
    return indexer.index(event.getContent())
  }

  // constructor(public model: any) {}
  // @inject()
  // handle(indexer: IndexerInterface) {
  //   return indexer.index(this.model)
  // }
  // static register(model: any) {
  //   return new IndexerSubscriber(model)
  // }
}
