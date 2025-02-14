import Vue from 'vue'
import App from './App.vue'
import router from './router'
import moment from 'moment'
Vue.prototype.$moment = moment;
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
