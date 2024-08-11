/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)

registerPlugins(app)

app.use(pinia)
app.mount('#app')

app.component('VueDatePicker', VueDatePicker)