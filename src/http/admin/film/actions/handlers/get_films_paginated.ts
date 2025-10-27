import { BaseAction } from '#src/infrastructures/orm/actions/base_action'
import Film from '#models/film'

export default class GetFilmsPaginated extends BaseAction {
  protected entity = Film

  async handle() {
    return await this.entity.builder().query.paginate(1, 20)
  }
}
