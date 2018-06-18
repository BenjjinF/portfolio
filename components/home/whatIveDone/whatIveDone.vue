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
        :image="project.image"
        ></projectPreview>
    </div>
  </section>
</template>

<script>
import projectPreview from '~/components/home/whatIveDone/_projectPreview.vue'
export default {
  props: ['projects'],
  components: {
    projectPreview
  }
}
</script>

<style lang="scss">

.project-previews {
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
    color: $primary-light;
  }
  @include media(">=md") {
    flex-direction: row;
    justify-content: space-between;
  }

}
</style>
