import { inject } from '@adonisjs/core'
import { SearchInterface } from '../SearchInterface.js'
import { SearchResult } from '../SearchResult.js'
import { TypesenseClient } from './TypesenseClient.js'
import Film from '#models/film'
import { TypesenseItem } from './TypesenseItem.js'

@inject()
export class TypesenseSearch implements SearchInterface {
  constructor(private readonly client: TypesenseClient) {}

  async search(q: string): Promise<SearchResult> {
    console.log(q)

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
      title: 'apple',
      authors: ['apple', 'apple'],
      publication_year: 2020,
      ratings_count: 344,
      average_rating: 200,
      categories: ['tech'],
    }

    // const resDocuments = await this.client.post(`/collections/books/documents`, doc)

    const { found, hits: items } = await this.client.get(
      `/collections/books/documents/search?q=${q}&query_by=title`
    )

    // const film = await Film.query().select().limit(2)

    return new SearchResult(
      items.map((item) => new TypesenseItem(item)),
      found
    )
  }
}
