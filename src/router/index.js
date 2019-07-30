import Vue from 'vue'
import Router from 'vue-router'
import Navigation from "../components/Navigation"
import PageView from '../components/PageView'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Navigation',
            component: Navigation
        },
        {
            path: '/page-view',
            name: 'PageView',
            component: PageView
        }
    ]
})
