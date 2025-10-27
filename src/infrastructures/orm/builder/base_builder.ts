import { LucidModel, ModelQueryBuilderContract } from '@adonisjs/lucid/types/model'

export class BaseBuilder<Model extends LucidModel, Row = InstanceType<Model>> {
  query: ModelQueryBuilderContract<Model, Row>

  exec: (() => Promise<Row[]>) | null = null

  constructor(protected readonly model: Model) {
    const query = model.query<Model, Row>()
    /* Save original method */
    this.exec = query.exec.bind(query)

    query.then = this.then.bind(this)
    query.exec = this.then.bind(this)
    this.query = query
  }

  then<TResult1 = Row[], TResult2 = never>(
    onfulfilled?: ((value: Row[]) => TResult1 | PromiseLike<TResult1>) | undefined | null,
    rejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
  ): Promise<TResult1 | TResult2> {
    return this.exec!().then(onfulfilled, rejected)
  }
}
