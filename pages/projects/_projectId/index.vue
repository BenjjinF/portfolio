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
  async asyncData(context) {
    let project = context.store.state.projectData.filter(project => project.id == context.params.projectId)[0]
    if (!project) {
      const { data } = await context.app.$storyapi.get(
        'cdn/stories/projects/' + context.params.projectId, {
          version: process.env.NODE_ENV == 'production' ? 'published' : 'draft',
        }
      )
      project = {
        blok: data.story.content,
        id: data.story.slug,
        title: data.story.content.title,
        previewText: data.story.content.previewText,
        description: data.story.content.description,
        features: data.story.content.features,
        technologies: data.story.content.technologies,
        url: data.story.content.url,
        images: data.story.content.images
      }
    }
    return project
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
