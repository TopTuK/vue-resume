import { createRouter, createWebHashHistory } from 'vue-router';
import Hero from '@/components/Hero.vue'
import About from '@/components/About.vue'
import Resume from '@/components/Resume.vue'
import Services from '@/components/Services.vue'
import Contacts from '@/components/Contacts.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Hero,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/resume',
        name: 'Resume',
        component: Resume,
    },
    {
        path: '/services',
        name: 'Services',
        component: Services,
    },
    {
        path: '/contacts',
        name: 'Contacts',
        component: Contacts,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { top: 0 };
    },
});

export default router;