/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import store from '@/store';

// Plugins
import { registerPlugins } from '@/plugins'
import { createStore } from 'vuex'

const app = createApp(App)

registerPlugins(app)
app.use(createStore)

app.use(store).mount('#app')
