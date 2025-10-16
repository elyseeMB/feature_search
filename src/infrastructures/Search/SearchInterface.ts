import { SearchResult } from './SearchResult.js'

export abstract class SearchInterface {
  abstract search(q: string): Promise<SearchResult>
}
