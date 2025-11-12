import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { column } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import Content from '#src/domain/application/entity/Content'
import { HttpContext } from '@adonisjs/core/http'
import { Authenticator } from '@adonisjs/auth'
import { Authenticators } from '@adonisjs/auth/types'
import { Infer } from '@vinejs/vine/types'
import AuthController from '#src/http/auth_controller'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(Content, AuthFinder) {
  @column()
  declare fullname: string | null

  @column()
  declare email: string

  @column({ serializeAs: null })
  declare password: string

  static async register(
    auth: Authenticator<Authenticators>,
    data: Infer<ReturnType<typeof AuthController.validator>>
  ) {
    const user = await this.create(data)
    await auth.use('web').login(user)
    return user
  }
}
