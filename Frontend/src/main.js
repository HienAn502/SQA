import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import './assets/flat-menu.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

import router from './router'



const app = createApp(App)
app.use(router)
app.use(bootstrap)
app.mount('#app')