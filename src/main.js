import './assets/main.css'

import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import homeapp from './home.vue'
createApp(homeapp).mount('#home')

import fontapp from './font.vue'
createApp(fontapp).mount('#font')

import kibordapp from './kibord.vue'
createApp(kibordapp).mount('#kibord')

import kontactapp from './kontact.vue'
createApp(kontactapp).mount('#kontact')

import schoolapp from './school.vue'
createApp(schoolapp).mount('#school')

import ztr8app from './ztr8.vue'
createApp(ztr8app).mount('#ztr8')

import niyuzapp from './niyuz.vue'
createApp(niyuzapp).mount('#niyuz')

import blogapp from './blog.vue'
createApp(blogapp).mount('#blog')

import fgrm8app from './8fgrm.vue'
createApp(fgrm8app).mount('#fgrm8')

import mkanapp from './mkan.vue'
createApp(mkanapp).mount('#mkan')