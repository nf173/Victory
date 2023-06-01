import HeaderView from '../views/HeaderView.vue'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'

const routes = [
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
    path: '/products',
    name: 'products',
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
  }
]

export default routes