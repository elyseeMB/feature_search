export class TypesenceClient {
  constructor(
    private readonly host: string,
    private readonly apikey: string
  ) {
    if (!host || !apikey) {
      throw new Error('Error config typesence')
    }
  }

  async get(enpoint: string) {
    return await this.api(enpoint, undefined, 'GET')
  }

  async post(enpoint: string, data: Record<string, any> | undefined) {
    if (!data) {
      return
    }
    return await this.api(enpoint, data)
  }

  async api(
    enpoint: string,
    data: Record<string, any> | undefined = undefined,
    method: string | undefined = 'POST'
  ) {
    const response = await fetch(`http://${this.host}${enpoint}`, {
      method: method ? method : undefined,
      body: data ? JSON.stringify(data) : undefined,
      headers: {
        'Content-Type': 'application/json',
        'X-TYPESENSE-API-KEY': this.apikey,
      },
    })
    return await response.json()
  }
}
