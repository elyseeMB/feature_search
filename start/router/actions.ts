import { Router } from '@adonisjs/core/http'
import type { Constructor, LazyImport } from '@adonisjs/http-server/build/src/types/base.js'
import type { GetControllerHandlers, RouteFn } from '@adonisjs/http-server/build/src/types/route.js'
import { Route } from '@adonisjs/http-server/build/src/router/route.js'
import { BaseAction } from '#src/infrastructures/orm/actions/base_action'

declare module '@adonisjs/core/http' {
  interface Router {
    useActionHandlers(): void
  }
}

Router.macro('useActionHandlers', function (this: Router) {
  const makeRoute = this.route.bind(this)

  this.route = function <T extends Constructor<BaseAction>>(
    pattern: string,
    methods: string[],
    handler: string | RouteFn | [LazyImport<T> | T, GetControllerHandlers<T>?]
  ) {
    let actionHandler = handler
    if (Array.isArray(handler)) {
      actionHandler = [handler.at(0), 'handleController'] as any
    }

    console.log(actionHandler)
    return makeRoute(pattern, methods, actionHandler)
  }
})
