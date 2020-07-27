import Vue from 'vue';
import VueRouter from 'vue-router';

import Landing from '../components/Landing';  // asumiendo que hicimos este componente
import Login from '../components/Login';
import Category from '../components/Category';
import NotFound from '../components/NotFound';
import AcercaDe from '../components/AcercaDe';
import Revisiones from '../components/Revisiones';
import Imagenes from '../components/Imagenes';
import Restaurant from '../components/Restaurant';


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
            component: Restaurant,
            children:[
                {
                    path:'',
                    component: AcercaDe

                },
                {
                    path:'reviews',
                    component: Revisiones

                },
                {
                    path:'images',
                    component: Imagenes

                }
            ]
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