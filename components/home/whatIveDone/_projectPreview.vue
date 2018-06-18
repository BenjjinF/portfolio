<template lang="html">
    <div class="project-preview">
      <nuxt-link :to="'projects/' + id">
        <div class="thumbnail" :style="{backgroundImage: 'url(' + image + ')'}">
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
    image: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="scss">


  .project-preview {
    width: 100%;
    height: 15rem;
    border-radius: $default-border-radius;
    overflow: hidden;
    background-color: $primary-light;
    transition-duration: $transition-duration;

    @include media(">md") {
      width: 47%;
    }
    &:not(:last-child) {
      margin-bottom: $spacing * 2;
    }

    &:hover {
      background-color: $primary-bright;
    }
    a, a:visited {
      h4 {
        color: $white;
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
      padding: $spacing;
      mix-blend-mode: luminosity;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .text {
        background-color: hsla(209%, 42%, 19%, .9);
        border-radius: $default-border-radius;
        padding: $spacing;
        text-align: center;
        h4 {
          margin-bottom: $spacing/2;
        }
        p {
          margin: 0;
          color: $grey;
        }
      }
    }
  }
</style>
