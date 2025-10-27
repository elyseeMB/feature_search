import { Exception } from '@adonisjs/core/exceptions'
import { HttpException, HttpExceptionMessages } from '../enums/http.statuses.js'

export default class NotImplementedException extends Exception {
  static status = 500

  constructor(message: string = 'The provided code path has not been implemented yet.') {
    super(message, {
      status: HttpException.INTERNAL_SERVER_ERROR,
      code: HttpExceptionMessages['500'],
    })
  }
}
