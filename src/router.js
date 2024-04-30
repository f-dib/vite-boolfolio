import { createRouter, createWebHistory } from 'vue-router';


// importo tutti i componenti che verranno utilizzati come pagina
import HomePage from './pages/HomePage.vue';
import SingleProject from './pages/SingleProject.vue';


const router = createRouter({
    history: createWebHistory(),

    // questo array conterrà tutte le rotte della nostra applicazione
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        }, 
        {
            path: '/projects',
            name: 'single-project',
            component: SingleProject
        }
    ]

})

export { router };