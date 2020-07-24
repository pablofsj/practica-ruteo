import Vue from 'vue';
import VueRouter from 'vue-router';

import Landing from '../components/Landing';  // asumiendo que hicimos este componente
import Login from '../components/Login';
import Restaurant from '../components/Restaurant';
import Category from '../components/Category';
import NotFound from '../components/NotFound';

Vue.use(VueRouter);    // instalamos explícitamente el router

export default new VueRouter({
    routes: [
        {
            path: '/', 
            component: Landing
        },
        {
            path: '/login', 
            component: Login
        },
        {
            path: '/:nombre', 
            component: Restaurant
        },
        {
            path: '/category/:nombre', 
            component: Category
        },
        {
            path: '*', 
            component: NotFound
        }
    ]
})