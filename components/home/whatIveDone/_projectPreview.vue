<template lang="html">
    <div class="project-preview">
      <nuxt-link :to="'projects/' + id">
        <div class="thumbnail" ref="thumbnail" :style="getStyle">
          <div class="text">
            <h4>{{title}}</h4>
            <p>{{previewText}}</p>
          </div>
        </div>
      </nuxt-link>
    </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    previewText: {
      type: String,
      required: false
    },
    thumbnailURL: {
      type: String,
      required: false
    },
    id: {
      type: String,
      required: true
    },
    desktopImage: {
      type: String,
      required: false
    },
    lazy: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      'imageLoaded': false,
      'isMounted': false,
    }
  },
  computed: {
    image() {
      if (this.images) {
        return this.images[0].image
      } else {
        return null
      }
    },
    style() {
      if (this.desktopImage) {
        return {
          backgroundImage: 'url(' + this.resizeImage(this.desktopImage, '350x0') + ')'
        }
      } else {
        return {}
      }
    },
    getStyle() {
      if (process.browser && this.isMounted ) {
        if (this.imageLoaded || !this.lazy) {
          return this.style
        } else {
          if (this.$store.state.windowHeight + this.$store.state.scroll > this.$el.offsetTop - 100) {
            this.imageLoaded = true
            return this.style
          }
        }
      }
    },
  },
  mounted() {
    this.isMounted = true
  },
}
</script>

<style lang="scss">

  .project-preview {
    width: 100%;
    height: 15em;
    border-radius: $default-border-radius;
    overflow: hidden;
    background-color: color(primary, light);
    transition-duration: $transition-duration;
    &:hover {
      background-color: color(primary, bright);
      .thumbnail {
        .text {
          opacity: 0;
        }
      }
    }
    &:not(:last-child) {
      @include responsive-spacing(margin-bottom, layout, y);
    }

    a, a:visited {
      text-decoration: none;
      h4 {
        color: color(primary, dark);
      }
      p {
        color: color(grey);
      }
    }
    .thumbnail {
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      mix-blend-mode: luminosity;
      background-position: center;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .text {
        margin: $spacing;
        background-color: color(primary, light, .9);
        border-radius: $default-border-radius;
        text-align: center;
        transition-duration: $transition-duration;
        h4, p {
          margin: $spacing/2;
        }
        h4 {
          margin-bottom: 0;
        }
      }
    }
    @include media(">md") {
      width: 47%;
    }
  }
</style>
