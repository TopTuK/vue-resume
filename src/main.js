import { createApp } from 'vue'

// import main css file globally
import '@/assets/css/style.css'

// importing AOS css style globally
import Aos from 'aos'
import 'aos/dist/aos.css'

// import Bootstrap 5
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

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

// Mount app
app.mount('#app')
