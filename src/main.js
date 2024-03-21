/* import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

///////////////// */
import './assets/main.css'

import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import homeapp from './home.vue'
createApp(homeapp).mount('#home')

import fontapp from './font.vue'
createApp(fontapp).mount('#font')

import kontactapp from './kontact.vue'
createApp(kontactapp).mount('#kontact')

import fbseapp from './fbse.vue'
createApp(fbseapp).mount('#fbse')

import ztr8app from './ztr8.vue'
createApp(ztr8app).mount('#ztr8')
