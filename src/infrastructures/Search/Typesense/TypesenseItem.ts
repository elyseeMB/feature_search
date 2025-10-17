import { SearchInterfaceItemInterface } from '../SearchResultItem.interface.js'
import { Hit } from './TypesenseClient.js'

export class TypesenseItem implements SearchInterfaceItemInterface {
  constructor(private readonly item: Hit) {}

  get getTitle(): string {
    return this.item.document.title
  }

  toJSON() {
    return {
      id: this.item.document.id,
      title: this.getTitle,
      document: this.item.document,
      highlights: this.item.highlights.map(({ matched_tokens, ...rest }) => rest),
    }
  }
}
