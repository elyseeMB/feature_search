/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const SearchesController = () => import('#controllers/searches_controller')
import router from '@adonisjs/core/services/router'
router.on('/').renderInertia('home')

router.get('/search', [SearchesController, 'search'])
