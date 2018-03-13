// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import vuexI18n from 'vuex-i18n'
import id from './lang/id'
import en from './lang/en'

Vue.use(vuexI18n.plugin, store)

Vue.i18n.add('en', en)
Vue.i18n.add('id', id)

Vue.i18n.set(store.getters.locale)

router.beforeEach((to, from, next) => {
  if (to.name === 'login' && store.getters.isLoggedIn) {
    next({ name: 'home' })
  }
  // route require login
  if (to.meta.requiresAuth && !store.getters.isLoggedIn) {
    next({ name: 'login' })
  }
  next()
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
