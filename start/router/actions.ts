import { Router } from '@adonisjs/core/http'

declare module '@adonisjs/core/http' {
  interface Router {
    useActionHandlers(): void
  }
}

Router.macro('useActionHandlers', function (this: Router) {
  console.log('useActionHandlers called', this)
})
