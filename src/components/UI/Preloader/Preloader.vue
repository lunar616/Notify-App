<template>
  <div class="preloader"
       :style="{ width : width + 'px', height: height + 'px' }">

    <!-- wBalls -->
    <div class="wBall" id="wBall_1"><div class="wInnerBall"></div></div>
    <div class="wBall" id="wBall_2"><div class="wInnerBall"></div></div>
    <div class="wBall" id="wBall_3"><div class="wInnerBall"></div></div>
    <div class="wBall" id="wBall_4"><div class="wInnerBall"></div></div>
    <div class="wBall" id="wBall_5"><div class="wInnerBall"></div></div>

  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 16,
    },
    height: {
      type: Number,
      default: 16,
    },
  },
};
</script>

<style scoped>
@import './Preloader.module.scss';
</style>