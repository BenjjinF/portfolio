<template>
  <div class="page page-home">
    <whatIDo></whatIDo>
    <whatIveDone :lazy="true"></whatIveDone>
    <whatIKnow></whatIKnow>
  </div>
</template>

<script>
  import whatIDo from '~/components/home/whatIDo.vue'
  import whatIveDone from '~/components/home/whatIveDone/whatIveDone.vue'
  import whatIKnow from '~/components/home/whatIKnow/whatIKnow.vue'

  export default {
    components: {
      whatIDo,
      whatIveDone,
      whatIKnow
    }
  }
</script>

<style lang="scss">
</style>
