<template lang="html">
  <div class="footer">
    <p>Benjamin Frost © {{year}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: (new Date()).getFullYear(),
    }
  }
}
</script>

<style lang="scss">
  .footer {
    width: 100%;
    max-width: 1200px;
    @include responsive-spacing(margin-top, layout, y);
    text-align: center;
    p {
      margin: 0;
    }
  }
</style>
