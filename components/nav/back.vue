<template lang="html">
  <nav v-if="show">
    <font-awesome-icon :icon="['fa', icon[0]]" :pulse="icon[1]" @click="back"></font-awesome-icon>
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
        return ['spinner', true]
      } else {
        return ['chevron-left', false]
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
    color: $primary-light;
    z-index: 1000;
    svg {
      transition: color $transition-duration;
      font-size: 2em !important;
    }
    &:hover {
      svg {
        color: $primary-bright;
      }
    }
    @include media(">md") {
      background-color: hsla(100, 100, 100, .85);
      border-radius: 0 $default-border-radius $default-border-radius 0;
      color: $grey;
      cursor: pointer;
      left: $header-width-md + $main-padding-md-x;
      padding: $spacing $spacing/2 $spacing 0;
      position: absolute;
      top: $main-padding-md-y;

      svg.fa-spinner {
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
