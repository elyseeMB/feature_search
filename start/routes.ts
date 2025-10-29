/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The router file is used for defining the HTTP router.
|
*/
import router from '@adonisjs/core/services/router'

const FilmsController = () => import('#src/http/admin/controller/films_controller')
const SearchesController = () => import('#controllers/searches_controller')
const HomeController = () => import('#controllers/home_controller')

router.get('/', [HomeController]).as('home')
router.get('/search', [SearchesController, 'search'])

// FILM
router.get('/film', [FilmsController, 'index']).as('film.index')
router.get('/film/:id', [FilmsController, 'edit']).as('film.edit')
