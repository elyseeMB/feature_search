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

router.get('/', [HomeController]).as('home')

router.get('/search', [SearchesController, 'search'])

// Authentification
router
  .group(() => {
    router.get('/login', [AuthController, 'login']).as('auth.login')
    router.post('/login', [AuthController, 'store']).as('auth.store')
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
