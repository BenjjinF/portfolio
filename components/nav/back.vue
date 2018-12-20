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
    color: color(primary, light);
    z-index: 1000;
    cursor: pointer;
    svg {
      transition: color $transition-duration;
      @include responsive-value(font-size, nav-font-size, $important: true);
    }
    &:hover {
      svg {
        color: color(primary, bright);
      }
    }
    @include media(">md") {
      background-color: color($color-name: white, $alpha: .85);
      border-radius: 0 $default-border-radius $default-border-radius 0;
      color: color(grey);
      left: calc(#{header-width(md)} + #{spacing(layout, md, x)});
      padding: $spacing $spacing/2 $spacing 0;
      position: fixed;
      top: spacing(layout, md, y);

      svg.fa-spinner {
        color: color(primary, bright);
      }
    }
    @include media(">lg") {
      left: calc(#{header-width(lg)} + #{spacing(layout, lg, x)});
      top: spacing(layout, lg, y);
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
