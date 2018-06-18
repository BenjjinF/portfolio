<template lang="html">
  <footer>
    <p>Benjamin Frost ©{{year}}</p>
  </footer>
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

footer {
  text-align: center;
  p {
    margin-bottom: 0;
  }
}
</style>
