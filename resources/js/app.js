//Import Package npm
require('./bootstrap');
import Vue from 'vue'
import Form from 'vform'
import moment from 'moment'
import VueProgressBar from 'vue-progressbar'
import {Button, HasError, AlertError, AlertSuccess} from 'vform/src/components/bootstrap5'
import Gate from "./Gate";
import swal from 'sweetalert2'
import VueRouter from 'vue-router'
//Define global variables
window.swal = swal;
window.Form = Form;
window.Vue = require('vue').default;
Vue.prototype.$gate = new Gate(window.user);
window.Fire = new Vue();
Vue.use(VueRouter)
const toast = swal.mixin({toast: true, position: 'top-end', showConfirmButton: false, timer: 3000});
window.toast = toast;
const options = {
    color: '#bffaf3',
    failedColor: '#874b4b',
    thickness: '5px',
    transition: {
        speed: '0.2s',
        opacity: '0.6s',
        termination: 300
    },
    autoRevert: true,
    location: 'top',
    inverse: false
}
Vue.use(VueProgressBar, options)
//Define Component
Vue.component(Button.name, Button)
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
Vue.component(AlertError.name, AlertError)
Vue.component(AlertSuccess.name, AlertSuccess)
Vue.component('pagination', require('laravel-vue-pagination'));
Vue.component('not-found', require('./components/NotFound.vue'));
Vue.component('passport-clients', require('./components/passport/Clients.vue'));
Vue.component('passport-authorized-clients',require('./components/passport/AuthorizedClients.vue'));
Vue.component('passport-personal-access-tokens',require('./components/passport/PersonalAccessTokens.vue'));
Vue.component('not-found', require('./components/NotFound.vue'));
Vue.component('example-component',require('./components/ExampleComponent.vue'));
//Define Route
let routes = [
    {
        path: '/dashboard',
        component: require('./components/Dashboard.vue').default
    }, {
        path: '/developer',
        component: require('./components/Developer.vue').default
    }, {
        path: '/users',
        component: require('./components/Users.vue').default
    }, {
        path: '/profile',
        component: require('./components/Profile.vue').default
    }, {
        path: '*',
        component: require('./components/NotFound.vue').default
    }
]
Vue.filter('upText', function (text) {
    return text
        .charAt(0)
        .toUpperCase() + text.slice(1)
});
Vue.filter('myDate', function (created) {
    return moment(created).format('MMMM Do YYYY');
});
const router = new VueRouter({mode: 'history', routes})
const app = new Vue({
    el: '#app',
    router,
    data:{
        search: ''
    },
    methods:{
        searchit: _.debounce(() => {
            Fire.$emit('searching');
        },1000),

        printme() {
            console.log('d');
            window.print();
        }
    }
});
