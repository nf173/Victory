import HeaderView from '../views/HeaderView.vue'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'

const routes = [
  { 
    path: '/:pathMatch(.*)*', 
    name: 'NotFound'
  },
  {
    path: '/',
    name: 'home',
    meta: {
      is_header_dark: true
    },
    components: {
      default: HomeView,
      HeaderView
    }
  },
  {
    path: '/all-products',
    name: 'products',
    meta: { is_header_sticky: true },
    components: {
      default: ProductsView,
      HeaderView
    }
  },
  {
    path: '/new-arrival',
    name: 'new arrival'
  },
  {
    path: '/applications',
    name: 'Applications'
  },
  {
    path: '/details/:productId',
    name: 'Details',
    meta: { is_header_sticky: true },
    components: {
      default: () => import('../views/DetailsView.vue'),
      HeaderView
    }
  }
]

export default routes