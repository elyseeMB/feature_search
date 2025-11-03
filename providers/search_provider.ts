import type { ApplicationService } from '@adonisjs/core/types'
import env from '#start/env'
import { TypesenseClient } from '#src/infrastructures/Search/Typesense/TypesenseClient'
import { IndexerInterface } from '#src/infrastructures/Search/IndexerInterface'
import { SearchInterface } from '#src/infrastructures/Search/SearchInterface'
import BaseProvider from '#providers/base_provider'
const TypesenseSearch = () => import('#src/infrastructures/Search/Typesense/TypesenseSearch')
const TypesenseIndexer = () => import('#src/infrastructures/Search/Typesense/TypesenseIndexer')

export default class SearchProvider extends BaseProvider {
  constructor(protected app: ApplicationService) {
    super(app)
  }

  /**
   * Register bindings to the container
   */
  register() {
    this.app.container.bind(TypesenseClient, () => {
      const host = env.get('TYPESENSE_HOST')
      const apikey = env.get('TYPESENSE_KEY')
      return new TypesenseClient(host, apikey)
    })
  }

  /**
   * The container bindings have booted
   */
  async boot() {
    this.registerBind([SearchInterface, TypesenseSearch], [IndexerInterface, TypesenseIndexer])
  }
}
