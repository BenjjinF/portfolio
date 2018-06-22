<template>
  <div class="page page-home">
    <whatIDo></whatIDo>
    <whatIveDone :projects="projects" :lazy="true"></whatIveDone>
    <whatIKnow></whatIKnow>
  </div>
</template>

<script>
  import whatIDo from '~/components/home/whatIDo.vue'
  import whatIveDone from '~/components/home/whatIveDone/whatIveDone.vue'
  import whatIKnow from '~/components/home/whatIKnow/whatIKnow.vue'

  export default {
    async asyncData(context) {
      const { data } = await context.app.$storyapi.get(
        'cdn/stories', {
          version: process.env.NODE_ENV == 'production' ? 'published' : 'draft',
          starts_with: 'projects/',
          is_startpage: 0
        }
      )
      return {
        'projects': data.stories.map(story => {
          return {
            id: story.slug,
            title: story.content.title,
            previewText: story.content.previewText,
            image: story.content.images.length > 0 ? story.content.images[0].image : '',
          }
        })
      }
    },
    components: {
      whatIDo,
      whatIveDone,
      whatIKnow
    }
  }
</script>

<style lang="scss">
</style>
