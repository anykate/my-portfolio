import App from '@/App.vue'
import '@/style.css'
import { Icon } from '@iconify/vue'
import { createApp } from 'vue'

createApp(App).component('Icon', Icon).mount('#app')
