<template lang="html">
  <div class="page">
    <section id="project" v-editable="blok">
      <h1><span class="underline">{{ title }}</span></h1>
      <div class="images">
        <img v-for="image, index in images" :key="index" :src="image.image">
      </div>
      <div class="text">
        <div v-if="description" v-html="marked(description)"></div>
        <div v-if="features" class="features">
          <h3>Features</h3>
          <div v-html="marked(features)"></div>
        </div>
        <div v-if="technologies" class="technologies">
          <h3>Technologies</h3>
          <div v-html="marked(technologies)"></div>
        </div>
      </div>
      <a v-if="url" class="button" type="button" name="button" target="_blank" :href="url">Visit Site</a>
    </section>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$storyapi.get('cdn/stories/projects/' + context.params.projectId, {
      version: process.env.NODE_ENV == 'production' ? 'published' : 'draft',
    }).then(res => {
      return {
        blok: res.data.story.content,
        title: res.data.story.content.title,
        previewText: res.data.story.content.previewText,
        description: res.data.story.content.description,
        features: res.data.story.content.features,
        technologies: res.data.story.content.technologies,
        url: res.data.story.content.url,
        images: res.data.story.content.images
      }
    })
  },
  mounted() {
    this.$storyblok.init()
    this.$storyblok.on('change', function () {
      window.location.reload()
    })
  }

}
</script>

<style lang="scss">

#project {
  width: 100%;
  .images {
    img {
      width: 100%;
      border-radius: $default-border-radius;
      background-color: $primary-light;
      margin-bottom: $spacing * 2;
      // make gallery later
      &:not(:first-child) {
        display: none;
      }
    }
  }
  .text {
    p:first-child {
      margin-top: 0;
    }
    > *:not(:last-child) {
      margin-bottom: $spacing * 2;
    }
    h3 {
      margin-bottom: $spacing/2;
    }
    ul {
      padding: 0;
      margin: 0;
      li {
        list-style-type: none;
        padding: $spacing/2;
        &:not(:last-child) {
          border-bottom: 1px solid $primary-light;
        }
      }
    }
  }
  .button {
    margin-top: $spacing * 2;
  }
}
</style>
