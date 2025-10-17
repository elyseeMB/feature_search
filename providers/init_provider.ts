import type { ApplicationService } from '@adonisjs/core/types'
import { SearchInterface } from '../src/infrastructures/Search/SearchInterface.js'
import { TypesenseSearch } from '../src/infrastructures/Search/Typesense/TypesenseSearch.js'
import { TypesenseClient } from '../src/infrastructures/Search/Typesense/TypesenseClient.js'
import env from '#start/env'

export default class InitProvider {
  constructor(protected app: ApplicationService) {}

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
    this.app.container.bind(SearchInterface, () => {
      return this.app.container.make(TypesenseSearch)
    })
  }
}
