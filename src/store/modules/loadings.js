export default ({
  modules: {
    loadings: {
      namespaced: true,
      state: {
        loading: {
          messages: true,
        },
      },
      mutations: {
        setLoadingMessages(state, showLoader) {
          state.loading.messages = showLoader;
        },
      },
      actions: {
        setLoadingMessages({commit}, showLoader) {
          commit('setLoadingMessages', showLoader);
        },
      },
      getters: {
        getLoadingMessages(state) {
          return state.loading.messages;
        },
      },
    },
  },
});