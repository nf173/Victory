import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import svgIcon from './components/SvgIcon/SvgIcon.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'virtual:svg-icons-register'
import './assets/style/main.scss'
import 'swiper/scss'

/* 创建 App */
const app = createApp(App)

/* 引入指令注册函数并调用 */
import directivesInstall from './directives'
directivesInstall(app)

/* 全局组件注册 */
app.component('svg-icon', svgIcon)
app.component('Swiper', Swiper)
app.component('SwiperSlide', SwiperSlide)

app.use(createPinia())
app.use(router)

app.mount('#app')