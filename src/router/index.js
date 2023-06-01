import { createRouter, createWebHistory } from 'vue-router'
import { useThemeStore } from '@/stores'
import routes from './routes'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})

router.beforeEach((to, from) => {
    const themeStore = useThemeStore()
    themeStore.setThemeMode(to)
})

export default router
