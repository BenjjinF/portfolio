<template lang="html" >
  <div class="wrapper">
    <TheHeader></TheHeader>
    <Back></Back>
    <div class="main">
      <nuxt/>
      <TheFooter/>
    </div>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader/TheHeader.vue'
import TheFooter from '~/components/TheFooter/TheFooter.vue'
import Back from '~/components/nav/back.vue'

export default {
  methods: {
    handleScroll () {
      if (process.browser) {
        this.$store.state.scroll = window.scrollY;
      }
    },
  },
  mounted () {
    if (process.browser) {

      window.addEventListener('scroll', this.handleScroll)
    }
  },
  beforeDestroy () {
    if (process.browser) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },
  components: {
    Back,
    TheHeader,
    TheFooter,
  }
}
</script>

<style lang="scss">

.wrapper {
  width: 100%;
  .main {
    width: 100%;
    max-width: 1200px;
    margin-top: $header-height-sm;
    padding: $main-padding-sm;
    .page {
      min-height: calc(100vh - #{$main-padding-sm-y}*3 - #{$header-height-sm}- 1.4em);
      section {
        &:not(:last-child) {
          margin-bottom: $main-padding-sm-y;
        }
        h1 {
          margin-bottom: $main-padding-sm-y/2;
        }
        .spacer {
          height: $main-padding-sm-y;
        }
      }
    }
    
  }
  @include media(">md") {
    .main {
      margin-top: 0;
      padding: $main-padding-md;
      padding-left: $main-padding-md-x + $header-width-md;
      .page {
        min-height: calc(100vh - #{$main-padding-md-y}*3 - 1.4em);
        section {
          &:not(:last-child) {
            margin-bottom: $main-padding-md-y;
          }
          h1 {
            margin-bottom: $main-padding-md-y;
            width: 100%;
          }
        }
      }
    }
  }
  @include media(">lg") {
    .main {
      padding: $main-padding-lg;
      padding-left: $main-padding-lg-x + $header-width-lg;
      .page {
        min-height: calc(100vh - #{$main-padding-lg-y}*3 - 1.4em);
        section {
          h1 {
            margin-bottom: $main-padding-lg-y - $spacing;
          }
          &:not(:last-child) {
            margin-bottom: $main-padding-lg-y;
          }
        }
      }
    }
  }
}
</style>
