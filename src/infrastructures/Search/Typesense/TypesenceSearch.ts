import { inject } from '@adonisjs/core'
import { SearchInterface } from '../SearchInterface.js'
import { SearchResult } from '../SearchResult.js'
import { TypesenceClient } from './TypesenceClient.js'
import Film from '#models/film'

@inject()
export class TypesenceSearch implements SearchInterface {
  constructor(private readonly client: TypesenceClient) {}

  async search(q: string): Promise<SearchResult> {
    const bookShema = {
      name: 'books',
      fields: [
        { name: 'title', type: 'string' },
        { name: 'authors', type: 'string[]' },
        { name: 'publication_year', type: 'int32', sort: true },
        { name: 'ratings_count', type: 'int32', facet: true },
        { name: 'average_rating', type: 'float', facet: true },
        { name: 'categories', type: 'string[]', facet: true },
      ],
      default_sorting_field: 'publication_year',
    }

    const doc = {
      title: 'matrix3',
      authors: ['johnDoe_matrix', 'janeDoe'],
      publication_year: 2026,
      ratings_count: 344,
      average_rating: 200,
      categories: ['science'],
    }

    // const res = await this.client.get('/collections/books/documents/1')
    // console.log(res)

    const film = await Film.query().select().limit(2)

    console.log(film)
    const items = new SearchResult(Array.from({ length: 8 }))
    return items
  }
}
