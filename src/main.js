import { createApp } from 'vue'
import App from './App.vue'

import VueHighlightJS from 'vue3-highlightjs'
import './css/material-palenight.min.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

window.audio = null

if (window.wallpaperRegisterAudioListener) {
    window.wallpaperRegisterAudioListener(function (data) {
        window.audio = data;
    });
}

const app = createApp(App).use(VueHighlightJS).mount('#app')
