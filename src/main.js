import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.css";
import './style.scss'
import App from './App.vue'

createApp(App).mount('#app')

import { router } from './router'

import "bootstrap/dist/js/bootstrap.js";

createApp(App).use(router).mount('#app')


