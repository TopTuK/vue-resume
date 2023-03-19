import { createApp } from 'vue'
import router from '@/router/index.js'

// import main css file globally
import '@/assets/css/style.css'

// importing AOS css style globally
import Aos from 'aos'
import 'aos/dist/aos.css'

// import Bootstrap 5
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
// import bootstrap-icons
import 'bootstrap-icons/font/bootstrap-icons.css'

// import boxicons
import 'boxicons'
import 'boxicons/css/boxicons.min.css'

// import glightbox
import 'glightbox'

// import swiper
import 'swiper/css'

// import MainLayout
import MainLayout from "@/layout/MainLayout.vue";
import App from './App.vue'

// Init AOS
Aos.init();

// Create app
const app = createApp(App)

// Register MainLayout as global component
app.component(MainLayout)

app.use(router)

// Mount app
app.mount('#app')
