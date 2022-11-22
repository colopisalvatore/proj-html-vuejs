import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';

import './assets/scss/main.scss'

createApp(App).mount('#app')
AOS.init();
