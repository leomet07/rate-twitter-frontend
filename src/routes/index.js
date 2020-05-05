import Router from 'vue-router'

import SignIn from '@/pages/SignIn'
import Home from '@/pages/Home'

import PageNotFound from '@/pages/Error'
import Vue from 'vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/signin',
            name: 'Signin',
            component: SignIn
        },

        {
            path: '/',
            name: 'Home',
            component: Home
        },

        {
            path: "*",
            component: PageNotFound
        }
    ]
});

export default router