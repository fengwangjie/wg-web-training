import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Tabs, Card, Icon } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
Vue.use(Tabs)
Vue.use(Card)
Vue.use(Icon)
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
