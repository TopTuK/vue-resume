import { createRouter, createWebHashHistory } from 'vue-router';
import Hero from '@/components/Hero.vue'
import About from '@/components/About.vue'
import Talents from '@/components/Talents.vue'
import Resume from '@/components/Resume.vue'
import Services from '@/components/Services.vue'
import Contacts from '@/components/Contacts.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Hero,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
    },
    {
        path: '/talents',
        name: 'talents',
        component: Talents,
    },
    {
        path: '/resume',
        name: 'resume',
        component: Resume,
    },
    {
        path: '/services',
        name: 'services',
        component: Services,
    },
    {
        path: '/contacts',
        name: 'contacts',
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