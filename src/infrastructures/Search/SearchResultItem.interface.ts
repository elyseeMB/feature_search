export abstract class SearchInterfaceItemInterface {
  abstract get getTitle(): string

  abstract toJSON(): Record<string, any>
}
