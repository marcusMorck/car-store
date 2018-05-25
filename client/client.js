// Page components
Vue.component('home-page', HomePageComponent);

//normal components
Vue.component('hello', HelloComponent);
Vue.component('product', ProductComponent);
Vue.component('login', LoginComponent);
Vue.component('registration', RegistrationComponent);
Vue.component('cart-item', CartItemComponent);
Vue.component('cart', CartComponent);

const http = axios; // using axios 3rd party XHR/REST lib

const router = new VueRouter({
  mode: 'history', // html5 popstate, alternatively: 'hash'
  base: '/', // set the correct base
  routes: [ // our frontend routes
    { path: '/', component: HomePageComponent },
    
  ]
});
// the app
let app = new Vue({
  el: "#app",
  router
});