import { createRouter, createWebHistory } from 'vue-route'

import CoachDetail from './components/coaches/CoachDetail.vue';
import CoachesList from './components/coaches/CoachesList.vue';
import CoachRegistation from './components/coaches/CoachRegistration.vue';
import ContactCoach from './components/requests/ContactCoach.vue';
import RequestsReceived from './components/requests/RequestsReceived.vue';
import NotFound from './components/NotFound.vue';

const router =  createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/', redirect: '/coaches' },
        { path: '/coaches', component: CoachesList },
        { path: '/coaches/:id', component: CoachDetail, children:[
            { path: 'contact', component: ContactCoach  } //coaches/id/contact
        ]},
        { path: '/register', component: CoachRegistation  },
        { path: '/requests', component: RequestsReceived  },
        { path: '/:notFound(.*)', component: NotFound }, // adding reg expression(.*) to allow the route to accept any input passed
    ], 
});