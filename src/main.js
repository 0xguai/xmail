import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/common/font/font.css';

import '@/libs/rem.js'
createApp(App).use(router).mount('#app')
