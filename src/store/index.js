import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import notify from './modules/notify'
import loadings from './modules/loadings'
import errors from './modules/errors'

export default new Vuex.Store({
  modules: {
    notify, loadings, errors,
  },
})