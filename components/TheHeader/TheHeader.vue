<template lang="html">
    <header>
      <img
        class="logo"
        :class="{hide: showBackNav}"
        src="~/static/benjamin_frost_logo_light.png"
        alt="Benjamin Frost Logo"
        @click="$router.push('/')">
      <Back v-if="showBackNav"></Back>
      <Intro></Intro>
      <div class="contact">
        <a href="https://www.linkedin.com/in/benjamin-frost-31664631/" rel="noopener" target="_blank"><i class="fab fa-linkedin"></i></a>
        <a href="https://github.com/BenjjinF" rel="noopener" target="_blank"><i class="fab fa-github-square"></i></a>
        <a href="https://www.instagram.com/btfrost/" rel="noopener" target="_blank"><i class="fab fa-instagram"></i></a>
        <nuxt-link to="/contact"><i class="far fa-envelope"></i></nuxt-link>
      </div>
    </header>
</template>

<script>
  import Intro from '~/components/TheHeader/_intro.vue'
  import Back from '~/components/nav/back.vue'

  export default {
    data() {
      return {
        url: '~/static/benjamin_frost_logo_light.png'
      }
    },
    computed: {
      showBackNav() {
        let home = this.$route.fullPath == '/'
        let loading = this.$store.state.loading
        if (loading) {
          return true
        } else if (!home) {
          return true
        } else {
          return false
        }
      }
    },
    components: {
      Intro,
      Back
    }
  }
</script>

<style lang="scss">

  header {
    background-color: $primary-dark;
    display: flex;
    padding: $header-padding-sm;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 999;
    .logo {
      height: $header-logo-height-sm;
      width: auto;
      cursor: pointer;
      &.hide {
        display: none;
      }
    }
    .intro {
      display: none;
    }
    .contact {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      margin-left: auto;
      a {
        color: $primary-light;
        &:visited {
          color: $primary-light;
        }
        &:hover, &.nuxt-link-active {
          color: $primary-bright;
        }
        i {
          font-size: $header-font-size-sm;
          transition-duration: $transition-duration;
          color: $primary-light;
          &:visited {
            color: $primary-light;
          }
          &:hover, &.nuxt-link-active {
            color: $primary-bright;
          }
        }
        &:not(:last-child) {
          margin-right: $spacing;
        }
      }
    }
    @include media(">md") {
      flex-direction: column;
      align-items: center;
      left: 0;
      height: 100%;
      width: $header-width-md;
      padding: $header-padding-md;
      nav {
        display: none;
      }
      .logo {
        width: $header-logo-width-md;
        height: auto;
        &.hide {
          display: block;
        }
      }
      .contact {
        margin-top: auto;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        margin-left: 0;
        a {
          &:not(:last-child) {
            margin-right: 0;
            margin-bottom: $spacing/1.5;
          }
          i {
            font-size: $header-font-size-md;
          }
        }
      }
    }
    @include media(">lg") {
      padding: $header-padding-lg;
      width: $header-width-lg;
      .logo {
        width: $header-logo-width-lg;
        height: auto;
        margin-bottom: $spacing * 2;
      }
      .intro {
        display: block;
        width: $header-logo-width-lg;
        color: $primary-light;
      }
      .contact {
        justify-content: space-between;
        width: 100%;
        flex-direction: row;
        a {
          &:not(:last-child) {
            margin: 0;
          }
          i {
            font-size: $header-font-size-lg;
          }
        }
      }
    }
  }
</style>
