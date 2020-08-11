export default ({
  modules: {
    errors: {
      namespaced: true,
      state: {
        errors: {
          notify: null,
        },
      },
      mutations: {
        setErrorNotify(state, errorDescription) {
          state.errors.notify = errorDescription;
        },
      },
      actions: {
        setErrorNotify({commit}, errorDescription) {
          commit('setErrorNotify', errorDescription);
        },
      },
      getters: {
        getErrorNotify(state) {
          return state.errors.notify;
        },
      },
    },
  },
});