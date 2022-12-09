import { createApp } from 'vue'
import { store } from './store'
import App from './App.vue'
import router from './router/router'

const app = createApp(App)

app.use(store, router)
app.mount('#app')