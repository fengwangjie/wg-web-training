import Vue from 'vue'
import Router from 'vue-router'
import Navigation from "../components/Navigation"
import PageView from '../components/PageView'
import HeatMap from '../components/secondCourse/HeatMap'

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
        },
        {
            path: '/second-course',
            name: 'second-course',
            component: HeatMap
        }
    ]
})
