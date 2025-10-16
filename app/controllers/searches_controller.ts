import type { HttpContext } from '@adonisjs/core/http'
import { SearchInterface } from '../../src/infrastructures/Search/SearchInterface.js'
import { inject } from '@adonisjs/core'

export default class SearchesController {
  @inject()
  async search({ request, response }: HttpContext, search: SearchInterface) {
    const q = request.qs().q ?? ''

    if (!q) {
      return response.badRequest({ error: 'require q' })
    }

    const result = await search.search(q)

    return response.json(result)
  }
}
