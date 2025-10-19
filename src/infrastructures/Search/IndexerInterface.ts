import Film from '#models/film'

type Item = {
  id: string
  title: string
  content: string
  created_at: number
  category: string[]
}

export abstract class IndexerInterface {
  abstract index(data: Film[]): Promise<void>
}
