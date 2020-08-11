import loadMore from '@/assets/js/loadMore.js'
import axios from 'axios'

export default ({
  modules: {
    notify: {
      namespaced: true,
      state: {
        messages: [],
      },
      mutations: {
        setMessages(state, messages) {
          state.messages = messages;
        },
        loadMessages(state, messages) {
          state.messages = [...messages];
        },
      },
      actions: {
        setMessages({commit}, messages) {
          commit('setMessages', messages);
        },
        loadMessages({commit, getters}) {
          commit('loadMessages', loadMore(getters.getMainMessages, getters.getAdditionalMessages));
        },
        getNotify({commit, dispatch}) {
          dispatch('loadings/setLoadingMessages', true, { root: true });
    
          axios
            .get('https://tocode.ru/static/c/vue-pro/notifyApi.php')
              .then(response => {
                commit('setMessages', response.data.notify);
              })
              .catch(() => {
                dispatch('errors/setErrorNotify', 'Error: Network Error', { root: true });
              })
              .finally(() => dispatch('loadings/setLoadingMessages', false, { root: true }));
        },
        getNotifyLazy({dispatch}) {
          dispatch('loadings/setLoadingMessages', true, { root: true });
    
          setTimeout(() => {
            dispatch('getNotify');
          }, 2000);
        },
      },
      getters: {
        getMessages(state) {
          return state.messages;
        },
        getMainMessages(state) {
          return state.messages.filter(item => item.main);
        },
        getAdditionalMessages(state) {
          return state.messages.filter(item => !item.main);
        },
      },
    },
  },
});