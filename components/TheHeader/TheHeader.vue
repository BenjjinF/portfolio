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
        <div class="contact">
          <a href="https://www.linkedin.com/in/benjamin-frost-31664631/" title="linkedin" rel="noopener" target="_blank">
            <font-awesome-icon :icon="['fab', 'linkedin']"></font-awesome-icon>
          </a>
          <a href="https://github.com/BenjjinF" title="github" rel="noopener" target="_blank">
            <font-awesome-icon :icon="['fab', 'github-square']"></font-awesome-icon>
          </a>
          <a href="https://www.instagram.com/btfrost/" title="instagram" rel="noopener" target="_blank">
            <font-awesome-icon :icon="['fab', 'instagram']"></font-awesome-icon>
          </a>
          <nuxt-link to="/contact" title="contact">
            <font-awesome-icon :icon="['fa', 'envelope']">
          </font-awesome-icon></nuxt-link>
        </div>
      </div>
    </header>
</template>

<script>
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
      Back
    }
  }
</script>

<style lang="scss">
  header {
    background-color: color(primary, dark);
    @include responsive-spacing(padding, layout, x);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 999;
    user-select: none;
    .content {
      display: flex;
      .logo {
        height: map-get-deep($responsive, logo-size, sm);
        width: auto;
        cursor: pointer;
        &.hide {
          display: none;
        }
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
          color: color(primary, light);
          &:visited {
            color: color(primary, light);
          }
          &:hover, &.nuxt-link-active {
            svg {
              color: color(primary, bright);
            }
          }
          svg {
            @include responsive-value(font-size, header-font-size);
            transition-duration: $transition-duration;
            color: color(primary, light);
            &:visited {
              color: color(primary, light);
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
      width: header-width(md);
      .content {
        height: 100%;
        flex-direction: column;
        align-items: center;
        nav {
          display: none;
        }
        .logo {
          width: map-get-deep($responsive, logo-size, md);
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
          }
        }
      }
    }
  }
</style>
