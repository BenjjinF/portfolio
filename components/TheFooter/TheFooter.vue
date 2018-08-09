<template lang="html">
  <div class="footer">
    <p>Benjamin Frost ©{{year}}</p>
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
    margin-top: $header-padding-sm-y;
    text-align: center;
    p {
      margin: 0;
    }
    @include media(">md") {
      margin-top: $header-padding-md-y;
    }
    @include media(">lg") {
      margin-top: $header-padding-lg-y;
    }
  }
</style>
