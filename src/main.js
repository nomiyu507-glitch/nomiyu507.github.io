import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { i18n, persistLocale } from './i18n'
import './style.css'

const app = createApp(App)
app.use(router)
app.use(i18n)
persistLocale(i18n.global.locale.value)
app.mount('#app')
