require('./bootstrap');

import "@fortawesome/fontawesome-free/css/all.min.css";

import Vue from 'vue';

import App from '@components/App';

const app = new Vue({
    el: '#app',
    render: h => h(App)
});
