import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'leaflet/dist/leaflet.css'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#216121',
          primaryVariant: '#53b251',
          secondary: '#a19c1d',
          secondaryVariant: '#c3c92c',
          error: '#B00020'
        }
      },
    },
  }
})

createApp(App).use(store).use(router).use(vuetify).mount('#app')
