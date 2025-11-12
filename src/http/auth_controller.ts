import vine from '@vinejs/vine'
import { HttpContext } from '@adonisjs/core/http'
import { UserCreatedEvent } from '#src/domain/auth/event/user_created_event'
import User from '#models/user'

export default class AuthController {
  dispatcher = UserCreatedEvent

  static validator = () => {
    const emailRule = vine.string().maxLength(255).email().toLowerCase().trim()

    const newEmailRule = emailRule.clone().unique(async (db, value) => {
      const exists = await db.from('users').where('email', value).select('id').first()
      return !exists
    })

    return vine.compile(
      vine.object({
        fullname: vine.string(),
        email: newEmailRule.clone(),
        password: vine.string(),
      })
    )
  }

  register({ inertia }: HttpContext) {
    return inertia.render('auth/register')
  }

  async store({ request, response, auth, session }: HttpContext) {
    const data = await request.validateUsing(AuthController.validator())

    const user = await User.register(auth, data)
    this.dispatcher.dispatch(user)

    session.flash('success', 'Welcome to my app')

    response.redirect().toRoute('home')

    return response.json(data)
  }
}
