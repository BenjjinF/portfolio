<template lang="html">
  <div class="wrapper" v-if="!internetExplorer">
    <TheHeader></TheHeader>
    <Back></Back>
    <main>
      <nuxt/>
      <TheFooter/>
    </main>
  </div>
  <internetExplorer v-else>
  </internetExplorer>
</template>

<script>
import TheHeader from '~/components/TheHeader/TheHeader.vue'
import TheFooter from '~/components/TheFooter/TheFooter.vue'
import Back from '~/components/nav/back.vue'
import internetExplorer from '~/components/home/internetExplorer.vue'
export default {
  data() {
    return {
      internetExplorer: false
    }
  },
  methods: {
    handleScroll () {
      if (process.browser) {
        this.$store.state.scroll = window.scrollY;;
      }
    },
    detectIE () {
      let userAgent = window.navigator.userAgent
      let IEbelowten = userAgent.indexOf("MSIE")
      let IEeleven = navigator.userAgent.match(/Trident.*rv\:11\./)
      if (IEbelowten > 0 || !!IEeleven) {
        this.internetExplorer = true
      }
    }
  },
  created() {
    if (process.browser) {
      this.detectIE()
    }
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
    internetExplorer
  }
}
</script>

<style lang="scss">

.wrapper {
  main {
    // width: 100%;
    max-width: 1200px;
    margin-top: $header-height-sm;
    padding: $main-padding-sm;
    section {
      &:not(:last-child) {
        margin-bottom: $spacing * 3;
      }
      h1 {
        margin-bottom: $spacing * 3;
      }
      .spacer {
        height: $spacing * 3;
      }
    }
  }
  @include media(">md") {
    main {
      margin-top: 0;
      padding: $main-padding-md;
      padding-left: $main-padding-md-x + $header-width-md;
      section {
        &:not(:last-child) {
          margin-bottom: $spacing * 4;
        }
        h1 {
          margin-bottom: $spacing * 4;
          width: 100%;
        }
      }
    }
  }
  @include media(">lg") {
    main {
      padding: $main-padding-lg;
      padding-left: $main-padding-lg-x + $header-width-lg;
      section {
        h1 {
          margin-bottom: $spacing * 5;
        }
        &:not(:last-child) {
          margin-bottom: $spacing * 5;
        }
      }
    }
  }
  footer {
    margin-top: $header-padding-sm-y;
    @include media(">md") {
      margin-top: $header-padding-md-y;
    }
    @include media(">lg") {
      margin-top: $header-padding-lg-y;
    }
  }
}
</style>
