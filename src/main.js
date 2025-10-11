import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import Header from './components/ShopHeader.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component("Header_Component", Header)
app.mount('#app')
