<template lang="html">
  <section id="what-ive-done">
    <h1><span class="underline">What I've Done</span></h1>
    <div class="project-previews">
      <projectPreview v-for="project in projects"
        :key="project.id"
        :title="project.title"
        :previewText="project.previewText"
        :thumbnailURL="project.thumbnailURL"
        :id="project.id"
        :desktopImage="project.desktopImage"
        :lazy="lazy"
        ></projectPreview>
    </div>
  </section>
</template>

<script>
import projectPreview from '~/components/home/whatIveDone/_projectPreview.vue'
export default {
  props: ['lazy'],
  computed: {
    projects() {
      return this.$store.state.projectData
    },
  },
  components: {
    projectPreview
  }
}
</script>

<style lang="scss">

.project-previews {
  @include media(">md") {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
