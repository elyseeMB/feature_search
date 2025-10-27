/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The router file is used for defining the HTTP router.
|
*/
import '#start/router/actions'
const RenderFilmsIndex = () => import('#src/http/admin/film/actions/render/render_films_index')

const FilmsController = () => import('#src/http/admin/controller/films_controller')
import router from '@adonisjs/core/services/router'
const SearchesController = () => import('#controllers/searches_controller')
const HomeController = () => import('#controllers/home_controller')

router.useActionHandlers()

router.get('/', [HomeController]).as('home')
router.get('/search', [SearchesController, 'search'])

// FILM
router.get('/film', [RenderFilmsIndex]).as('film.index')
router.get('/film/:id', [FilmsController, 'edit']).as('film.edit')
