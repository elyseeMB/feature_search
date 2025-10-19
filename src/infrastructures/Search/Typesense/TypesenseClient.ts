import { TypesenseException } from './TypesenseException.js'

export type Document = {
  id: string
  title: string
  authors: string[]
  average_rating: number
  categories: string[]
  publication_year: number
  ratings_count: number
}

export type Highlight = {
  title?: {
    matched_tokens: string[]
    snippet: string
  }
}

export type HighlightDetail = {
  field: string
  matched_tokens: string[]
  snippet: string
}

export type TextMatchInfo = {
  best_field_score: string
  best_field_weight: number
  fields_matched: number
  num_tokens_dropped: number
  score: string
  tokens_matched: number
}

export type Hit = {
  document: Document
  highlight: Highlight
  highlights: HighlightDetail[]
  text_match: number
  text_match_info: TextMatchInfo
}

export type SearchResponse = {
  facet_counts: any[]
  found: number
  hits: Hit[]
  out_of: number
  page: number
  request_params: {
    collection_name: string
    first_q: string
    per_page: number
    q: string
  }
  search_cutoff: boolean
  search_time_ms: number
}

export class TypesenseClient {
  constructor(
    private readonly host: string,
    private readonly apikey: string
  ) {
    if (!host || !apikey) {
      throw new Error('Error config typesense')
    }
  }

  async get(enpoint: string) {
    return await this.api<SearchResponse>(enpoint, undefined, 'GET')
  }

  async post(
    enpoint: string,
    data: Record<string, any> | string | undefined,
    options?: RequestInit
  ) {
    if (!data) {
      return
    }
    return await this.api(enpoint, data, 'POST', options)
  }

  async patch(enpoint: string, data: Record<string, any>[]) {
    return this.api(enpoint, data, 'PATCH')
  }

  async api<T>(
    enpoint: string,
    data: Record<string, any> | string | undefined = undefined,
    method: string | undefined = 'POST',
    options: RequestInit = {}
  ): Promise<T> {
    const response = await fetch(`http://${this.host}${enpoint}`, {
      method: method ? method : undefined,
      body: typeof data === 'string' ? data : data ? JSON.stringify(data) : undefined,
      ...options,
      headers: {
        ...options.headers,
        'Content-Type': 'application/json',
        'X-TYPESENSE-API-KEY': this.apikey,
      },
    })
    if (response.ok) {
      return await (response.json() as Promise<T>)
    }
    return (await response.json()) as Promise<T>
    // throw new TypesenseException(response)
  }
}
