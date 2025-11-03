import { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  login({ inertia }: HttpContext) {
    return inertia.render('auth/login')
  }

  store({}: HttpContext) {}
}
