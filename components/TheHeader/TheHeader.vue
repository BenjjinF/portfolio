<template lang="html">
    <header>
      <div class="content">
        <img
          class="logo"
          :class="{hide: showBackNav}"
          src="~/static/benjamin_frost_logo_light.svg"
          alt="Benjamin Frost Logo"
          @click="logoClick">
        <Back v-if="showBackNav"></Back>
        <Intro></Intro>
        <div class="contact">
          <a href="https://www.linkedin.com/in/benjamin-frost-31664631/" rel="noopener" target="_blank">
            <font-awesome-icon :icon="['fab', 'linkedin']"></font-awesome-icon>
          </a>
          <a href="https://github.com/BenjjinF" rel="noopener" target="_blank">
            <font-awesome-icon :icon="['fab', 'github-square']"></font-awesome-icon>
          </a>
          <a href="https://www.instagram.com/btfrost/" rel="noopener" target="_blank">
            <font-awesome-icon :icon="['fab', 'instagram']"></font-awesome-icon>
          </a>
          <nuxt-link to="/contact">
            <font-awesome-icon :icon="['fa', 'envelope']">
          </font-awesome-icon></nuxt-link>
        </div>
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
    methods: {
      logoClick() {
        if (this.isHome) {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        } else {
          this.$router.push('/')
        }
      }
    },
    computed: {
      isHome() {
        return this.$route.fullPath == '/' ? true : false
      },
      showBackNav() {
        let loading = this.$store.state.loading
        if (loading) {
          return true
        } else if (!this.isHome) {
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
    padding: $header-padding-sm;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 999;
    .content {
      display: flex;
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
      .ie-contact {
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
            svg {
              color: $primary-bright;
            }
          }
          svg {
            font-size: $header-font-size-sm;
            transition-duration: $transition-duration;
            color: $primary-light;
            &:visited {
              color: $primary-light;
            }
          }
          &:not(:last-child) {
            margin-right: $spacing;
          }
        }
      }
    }
    @include media(">md") {
      left: 0;
      height: 100%;
      width: $header-width-md;
      padding: $header-padding-md;
      .content {
        height: 100%;
        flex-direction: column;
        align-items: center;
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
            svg {
              font-size: $header-font-size-md;
            }
          }
        }
      }
    }
    @include media(">lg") {
      padding: $header-padding-lg;
      width: $header-width-lg;
      .content {
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
            svg {
              font-size: $header-font-size-lg;
            }
          }
        }
      }
    }
  }
</style>
