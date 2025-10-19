export class ContentCreatedEvent {
  constructor(private readonly model: any) {}

  getContent() {
    return this.model
  }
}
