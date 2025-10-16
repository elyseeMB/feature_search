import { SearchInterfaceItemInterface } from './SearchResultItem.interface.js'

export class SearchResult {
  constructor(private readonly items: Array<SearchInterfaceItemInterface>) {}

  get getItems(): Array<SearchInterfaceItemInterface> {
    return this.items
  }
}
