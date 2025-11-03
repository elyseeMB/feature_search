import type { ApplicationService } from '@adonisjs/core/types'

export default class BaseProvider {
  registerBind = registerBind.bind(this)

  constructor(protected app: ApplicationService) {
    this.registerBind = registerBind.bind(this)
  }
}

function registerBind<T extends BaseProvider>(this: T, ...args: [any, any][]): any {
  args.forEach(([interfaceClass, implementationClass]) => {
    this.app.container.bind(interfaceClass, async () => {
      const module = await implementationClass()
      return this.app.container.make(Object.values(module)[0])
    })
  })
}
