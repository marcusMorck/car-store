// Page components
Vue.component('home-page', HomePageComponent);
Vue.component('product-page', ProductPageComponent);
Vue.component('cart-page', CartPageComponent);
Vue.component('login-page', LoginPageComponent);
Vue.component('registration-page', RegistrationPageComponent);

//normal components
Vue.component('hello', HelloComponent);
Vue.component('product', ProductComponent);
Vue.component('login', LoginComponent);
Vue.component('registration', RegistrationComponent);
Vue.component('cart-item', CartItemComponent);
Vue.component('cart', CartComponent);
Vue.component('nav-menu', MenuComponent);

const http = axios; // using axios 3rd party XHR/REST lib

const router = new VueRouter({
  mode: 'history', // html5 popstate, alternatively: 'hash'
  base: '/', // set the correct base
  routes: [ // our frontend routes
    { path: '/', component: HomePageComponent },
    { path: '/products', component: ProductPageComponent },
    { path: '/cart', component: CartPageComponent },
    { path: '/login', component: LoginPageComponent },
    { path: '/registration', component: RegistrationPageComponent }
  ]
});
// the app
let app = new Vue({
  el: "#app",
  router
});