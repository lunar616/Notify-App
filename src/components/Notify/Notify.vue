<template>
  <table>
    <transition-group name="list" tag="tbody">
      <tr v-for="message in messages" :key="message.title">
        <td> <span>{{ message.title }}</span> </td>
      </tr>
    </transition-group>
    
    <button @click="loadMore" class="btn btnPrimary" :class="{ btnDisabled: !additionalMessages.length}">Load more</button>
  </table>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  props: {
    messages: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      additionalMessages: 'notify/getAdditionalMessages',
    }),
  },
  methods: {
    loadMore() {
      this.$store.dispatch('notify/loadMessages')
        .catch(error => console.log(error));
    },
  },
};
</script>

<style lang="scss" scoped>
@import './Notify.module.scss';
</style>
