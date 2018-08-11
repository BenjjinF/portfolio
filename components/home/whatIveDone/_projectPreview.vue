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
    images: {
      type: Array,
      required: false
    },
    lazy: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      imageLoaded: false,
    }
  },
  computed: {
    image() {
      console.log(this.images)
      if (this.images) {
        return this.images[0].image
      } else {
        return null
      }
    },
    style() {
      if (this.image.length) {
        return {
          backgroundImage: 'url(' + this.resizeImage(this.image, '350x0') + ')'
        }
      } else {
        return null
      }
    },
    getStyle() {
      if (this.imageLoaded || !this.lazy) {
        return this.style
      } else {
        if (this.$store.state.scroll > 100) {
          this.imageLoaded = true
          return this.style
        }
      }
    }
  }
}
</script>

<style lang="scss">

  .project-preview {
    width: 100%;
    height: 15em;
    border-radius: $default-border-radius;
    overflow: hidden;
    background-color: $primary-light;
    transition-duration: $transition-duration;
    &:hover {
      background-color: $primary-bright;
      .thumbnail {
        .text {
          opacity: 0;
        }
      }
    }
    &:not(:last-child) {
      margin-bottom: $spacing * 2;
    }

    a, a:visited {
      text-decoration: none;
      h4 {
        color: $primary-light;
      }
      p {
        color: $grey;
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
        background-color: hsla(209%, 42%, 19%, .9);
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
