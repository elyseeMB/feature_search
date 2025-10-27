import { HttpContext } from '@adonisjs/core/http'
import NotImplementedException from '#exceptions/not_implemented_exception'
import app from '@adonisjs/core/services/app'

export interface BaseActionnable {
  handle?(...args: any[]): any
  asController?(ctx: HttpContext, ...args: any[]): Promise<any>
}

export abstract class BaseAction implements BaseActionnable {
  asController?(ctx: HttpContext, ...args: any[]): Promise<any>

  static async run<T extends { handle: (...args: any[]) => any }>(
    this: new (...args: any[]) => T,
    ...args: Parameters<T['handle']>
  ): Promise<ReturnType<T['handle']>> {
    const action = await app.container.make(this)

    if (typeof action.handle !== 'function') {
      throw new NotImplementedException(`${this.name} does not implement handle() method`)
    }
    return action.handle(...args)
  }

  handleController<T extends BaseActionnable>(
    this: T,
    ctx: HttpContext,
    ...args: any[]
  ): Promise<any> {
    if (typeof this.asController !== 'function') {
      throw new NotImplementedException(
        `${this.constructor.name} does not implemented 'asController'`
      )
    }
    return ctx.containerResolver.call(this, 'asController' as any, [ctx, ...args])
  }
}
