import { createApp } from 'vue'
import { store } from './store'
import App from './App.vue'
import router from './router/router.js'
import components from '@/components/UI'

const app = createApp(App)

components.forEach(component => {
   app.component(component.name, component)
})

app.use(store)
app.use(router)
app.mount('#app')