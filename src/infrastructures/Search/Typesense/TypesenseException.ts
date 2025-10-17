export class TypesenseException extends Error {
  status: number
  message: any

  constructor(response: Response) {
    super('Typesense Err')
    this.status = response.status
    this.message = response.json()
  }
}
