import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Imports your router configuration

const app = createApp(App)

app.use(router) // Registers the router plugin

app.mount('#app')