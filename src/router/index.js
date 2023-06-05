import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { useThemeStore } from '@/stores'
import { useHeaderStore } from '../stores/modules/header'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})

router.beforeEach((to, from) => {
    const themeStore = useThemeStore()
    const headerStore = useHeaderStore()
    themeStore.setThemeMode(to)
    headerStore.stickyChange(to.meta.is_header_sticky)
})

export default router
