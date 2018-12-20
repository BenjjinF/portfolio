<template>
  <div class="page page-home">
    <splash></splash>
    <whyMe></whyMe>
    <whatIveDone :lazy="true"></whatIveDone>
    <whatIKnow></whatIKnow>
  </div>
</template>

<script>
  import splash from '~/components/home/splash.vue'
  import whyMe from '~/components/home/whyMe.vue'
  import whatIveDone from '~/components/home/whatIveDone/whatIveDone.vue'
  import whatIKnow from '~/components/home/whatIKnow/whatIKnow.vue'

  export default {
    components: {
      splash,
      whyMe,
      whatIveDone,
      whatIKnow
    }
  }
</script>

<style lang="scss">
</style>
