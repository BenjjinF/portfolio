<template>
  <div class="page page-home">
    <whatIveDone :lazy="false"></whatIveDone>
  </div>
</template>

<script>
  import whatIveDone from '~/components/home/whatIveDone/whatIveDone.vue'

  export default {
    components: {
      whatIveDone
    }
  }
</script>
