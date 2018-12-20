<template lang="html">
  <div class="page">
    <section id="project" v-editable="blok">
      <h1><span class="underline">{{ title }}</span></h1>
      <div class="images">
        <img class="image desktop" :src="desktopImage">
        <img class="image mobile" :src="mobileImage">
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
        desktopImage: data.story.content.desktopImage,
        mobileImage: data.story.content.mobileImage
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
    position: relative;
    @include responsive-spacing(margin-bottom, main, y, .75);
    .image {
      border-radius: $default-border-radius;
      background-color: color(primary, light);
      border: 1px solid color(blue-grey, 50);
      width: 100%;
      @include responsive-spacing(margin-bottom, main, y, .25);
      &.desktop {
        width: 90%;
      }
      &.mobile {
        position: absolute;
        height: 75%;
        width: auto;
        bottom: 0%;
        right: 0;
        margin-bottom: 5px;
      }
    }
  }
  .text {
    p:first-child {
      margin-top: 0;
    }
    > *:not(:last-child) {
      @include responsive-spacing(margin-bottom, main, y, .75);
    }
    h3 {
      @include responsive-spacing(margin-bottom, main, y, .25);
    }
    ul {
      padding: 0;
      margin: 0;
      li {
        list-style-type: none;
        @include responsive-spacing(padding, main, null, .15);
        &:not(:last-child) {
          border-bottom: 1px solid color(primary, light);
        }
      }
    }
  }
  .button {
    @include responsive-spacing(margin-top, main, y, .75);
    @include responsive-spacing(margin-bottom, main, y, .75);
  }
}
</style>
