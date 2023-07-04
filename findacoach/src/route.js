import { createRoute, createWebHistory } from 'vue-route'

const router =  createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/', redirect: '/coaches' },
        { path: '/coaches', component: null   },
        { path: '/coaches/:id', component: null, children:[
            { path: 'contact', component: null  } //coaches/id/contact
        ]},
        { path: '/register', component: null  },
        { path: '/requests', component: null  },
        { path: '/:notFound(.*)', component: null }, // adding reg expression(.*) to allow the route to accept any input passed
    ], 
});