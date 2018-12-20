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
    handleResize () {
      if (process.browser) {
        this.$store.state.windowHeight = window.innerHeight;
      }
    }
  },
  mounted () {
    if (process.browser) {
      window.addEventListener('scroll', this.handleScroll)
      window.addEventListener("resize", this.handleResize);
      this.$store.state.windowHeight = window.innerHeight;
    }
  },
  beforeDestroy () {
    if (process.browser) {
      window.removeEventListener('scroll', this.handleScroll)
      window.removeEventListener("resize", this.handleResize);
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
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 1200px;
    margin-top: header-height(sm);
    @include responsive-spacing(padding, layout, x);
    .page {
      min-height: calc(100vh - #{spacing(layout, sm, y)} * 3 - #{footer-height(sm)});
      section {
        &:not(:last-child) {
          @include responsive-spacing(margin-bottom, main, y);
        }
        h1 {
          @include responsive-spacing(margin-bottom, main, y);
          width: 100%;
        }
        .spacer {
          @include responsive-spacing(margin-bottom, main, y);
        }
      }
    }
    @include media(">md") {
      margin-top: 0;
      padding-left: calc(#{spacing(layout, md, x)} + #{header-width(md)});
      .page {
        min-height: calc(100vh - #{footer-height(md)});
      }
    }
    @include media(">lg") {
      padding-left: calc(#{spacing(layout, lg, x)} + #{header-width(lg)});
      .page {
        min-height: calc(100vh - #{footer-height(lg)});
      }
    }
  }
}
</style>
