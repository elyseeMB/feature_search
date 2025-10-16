import type { ApplicationService } from '@adonisjs/core/types'
import { SearchInterface } from '../src/infrastructures/Search/SearchInterface.js'
import { TypesenceSearch } from '../src/infrastructures/Search/Typesense/TypesenceSearch.js'
import { TypesenceClient } from '../src/infrastructures/Search/Typesense/TypesenceClient.js'
import env from '#start/env'

export default class InitProvider {
  constructor(protected app: ApplicationService) {}

  /**
   * Register bindings to the container
   */
  register() {
    this.app.container.bind(TypesenceClient, () => {
      const host = env.get('TYPESENSE_HOST')
      const apikey = env.get('TYPESENSE_KEY')
      return new TypesenceClient(host, apikey)
    })
  }

  /**
   * The container bindings have booted
   */
  async boot() {
    this.app.container.bind(SearchInterface, () => {
      return this.app.container.make(TypesenceSearch)
    })
  }
}
