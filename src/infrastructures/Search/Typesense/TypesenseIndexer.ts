import { inject } from '@adonisjs/core'
import { IndexerInterface } from '../IndexerInterface.js'
import { TypesenseClient } from './TypesenseClient.js'
import Film from '#models/film'

type Item = {
  id: string
  title: string
  content: string
  created_at: number
  category: string[]
}

@inject()
export class TypesenseIndexer implements IndexerInterface {
  constructor(private readonly client: TypesenseClient) {}

  async index(data: Film[]): Promise<void> {
    const doc = data.map((item) => ({
      id: item.id.toString(),
      title: item.primary_title,
      authors: ['apple', 'apple'],
      publication_year: item.start_year,
      ratings_count: item.runtime_minutes,
      average_rating: item.runtime_minutes,
      categories: ['apple', 'apple'],
    }))

    const jsonl = doc.map((doc) => JSON.stringify(doc)).join('\n')

    try {
      const res = await this.client.post(`/collections/books/documents/import`, jsonl, {
        headers: { 'Content-Type': 'text/plain' },
      })
      console.log(res)
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}
