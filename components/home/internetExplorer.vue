<template lang="html">
  <div class="alt-wrapper">
    <div class="content">
      <img class="logo" src="~/static/benjamin_frost_logo_light.png" alt="Benjamin Frost Logo">
      <intro></intro>
      <p><i class="far fa-envelope"></i>info@btfrost.com</p>
      <p><i class="fas fa-mobile-alt"></i>778.903.0622</p>
    </div>
  </div>
</template>

<script>
import intro from "~/components/TheHeader/_intro.vue"
export default {
  components: {
    intro
  }
}
</script>

<style lang="scss">

  .alt-wrapper {
    height: 100%;
    width: 100%;
    background-color: $primary-dark;
    color: $primary-light;
    text-align: center;
    .content {
      margin: auto;
      padding-top: $spacing * 4;
      width: 75%;
      max-width: 250px;
      img {
        width: 100%;
        margin-bottom: $spacing;
      }
      p {
        margin: $spacing/2 0;
        i {
          margin-right: $spacing;
        }
      }
      .intro {
        margin: $spacing 0;
      }
    }
  }
</style>
