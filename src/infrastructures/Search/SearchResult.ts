import { SearchInterfaceItemInterface } from './SearchResultItem.interface.js'

export class SearchResult {
  constructor(
    private readonly items: Array<SearchInterfaceItemInterface>,
    private readonly total: number
  ) {}

  getItems(): Array<SearchInterfaceItemInterface> {
    return this.items
  }

  getTotal(): number {
    return this.total
  }
}
