import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createVuestic } from 'vuestic-ui'
import { createPinia } from 'pinia'

import messages  from '@/models/messages'
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
// import vuestic css
import "vuestic-ui/css";

import App from './App.vue'

// Init AOS
Aos.init();

// create I18n 
const i18n = createI18n({
    legacy: false,
    locale: 'ru',
    fallbackLocale: 'en',
    messages, // import messages
});

// Create app
const app = createApp(App);

// use router
app.use(router);
// use I18n
app.use(i18n);
// use vuestic
app.use(createVuestic());

// create pinia
const pinia = createPinia();
app.use(pinia);

// Mount app
app.mount('#app');
