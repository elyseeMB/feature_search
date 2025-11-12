/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The router file is used for defining the HTTP router.
|
*/
import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const AuthController = () => import('#src/http/auth_controller')
const FilmsController = () => import('#src/http/admin/controller/films_controller')
const SearchesController = () => import('#controllers/searches_controller')
const HomeController = () => import('#controllers/home_controller')

import transmit from '@adonisjs/transmit/services/main'

transmit.registerRoutes()

transmit.broadcast('global', { message: 'Hello' })
transmit.broadcast('chats/1/messages', { message: 'Hello' })
transmit.broadcast('users/1', { message: 'Hello' })

router.on('/chat').renderInertia('chat')

router
  .get('/', [HomeController])
  .as('home')
  .use(middleware.auth({ guards: ['web'] }))

router.get('/search', [SearchesController, 'search']).use(middleware.auth({ guards: ['web'] }))

// Authentification
router
  .group(() => {
    router.get('/register', [AuthController, 'register']).as('auth.register')
    router.post('/register', [AuthController, 'store']).as('auth.store')
  })
  .prefix('/auth')
  .use(middleware.guest())

// FILM
router
  .group(() => {
    router.get('/', [FilmsController, 'index']).as('film.index')
    router.get('/create', [FilmsController, 'create']).as('film.create')
    router.get('/:id', [FilmsController, 'edit']).as('film.edit')
  })
  .prefix('/film')
  .use(middleware.auth({ guards: ['web'] }))
