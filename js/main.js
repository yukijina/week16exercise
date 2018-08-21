const home = {
  template: `
  <div class="col-12">
   <h1>Home</h1>
    <div class="">
      <i class="fas fa-home"></i>
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
  `
}
const about = {
  template: `
  <div class="col-12">
   <h1>About</h1>
    <div class="">
      <i class="fas fa-home"></i>
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
  `
}
const product = {
  template: `
  <div class="col-12">
   <h1>Product</h1>
    <div class="">
      <i class="fas fa-home"></i>
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
  `
}
const blog = {
  template: `
  <div class="col-12">
   <h1>Blog</h1>
    <div class="">
      <i class="fas fa-home"></i>
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
  `
}

const contact = {
  template: `
  <div class="col-12">
   <h1>Contact</h1>
    <div class="">
      <i class="fas fa-home"></i>
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
  `
}

const myRouter = new VueRouter({
  routes: [
    {
      path: '/home',
      component: home
    },
    {
      path: '/about',
      component: about
    },
    {
      path: '/product',
      component: product
    },
    {
      path: '/blog',
      component: blog
    },
    {
      path: '/contact',
      component: contact
    },
  ]
})

var goRouter = new Vue ({
  router,
  el: '#app',
  data: {

  },
  methods: {

  }
}).$mount('#app')
