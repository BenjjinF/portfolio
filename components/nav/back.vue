<template lang="html">
  <nav v-if="show">
    <i :class="icon" @click="back"></i>
  </nav>
</template>

<script>
export default {
  methods: {
    back() {
      if(this.fromInDomain) {
        this.$router.go(-1)
      } else {
        this.$router.push('/')
      }
    }
  },
  computed: {
    fromInDomain() {
      return this.$store.state.fromInDomain
    },
    icon() {
      if (this.$store.state.loading ) {
        return 'fas fa-spinner fa-pulse'
      } else {
        return 'fas fa-chevron-left'
      }
    },
    show() {
      let home = this.$route.fullPath == '/'
      let loading = this.$store.state.loading
      if (loading) {
        return true
      } else if (!home) {
        return true
      } else {
        false
      }
    }
  }
}
</script>

<style lang="scss">

  nav {
    display: flex;
    align-items: center;
    font-size: 2em;
    transition: $transition-duration;
    color: $primary-light;
    z-index: 1000;
    &:hover {
      color: $primary-bright;
    }
    @include media(">md") {
      position: absolute;
      color: $grey;
      cursor: pointer;
      padding: $spacing $spacing/2 $spacing 0;
      background-color: hsla(100, 100, 100, .85);
      border-radius: 0 $default-border-radius $default-border-radius 0;
      justify-content: center;
      left: $header-width-md + $main-padding-md-x;
      top: $main-padding-md-y;

      .fas.fa-spinner.fa-pulse {
        color: $primary-bright;
      }
    }
    @include media(">lg") {
      left: $header-width-lg + $main-padding-lg-x;
      top: $main-padding-lg-y;
    }

  }
  @include media("<md") {
    .wrapper {
      > nav {
        display: none;
      }
    }
  }
</style>
