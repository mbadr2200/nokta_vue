import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// css files 
require("./assets/style.css")


// sweetalert popups

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const options = {
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#325D79',
  };

createApp(App)
        .use(store)
        .use(router)
        .use(VueSweetalert2,options)
        .mount('#app')
