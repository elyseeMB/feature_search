import { inject } from '@adonisjs/core'
import { IndexerInterface } from '../IndexerInterface.js'

export class IndexerSubscriber {
  constructor(public model: any) {}

  @inject()
  handle(indexer: IndexerInterface) {
    return indexer.index(this.model)
  }

  static register(model: any) {
    return new IndexerSubscriber(model)
  }
}

// const a = new IndexerSubscriber()
