<template>
  <div class="page page-home">
    <whatIveDone :projects="projects"></whatIveDone>
  </div>
</template>

<script>
  import whatIveDone from '~/components/home/whatIveDone/whatIveDone.vue'

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
      whatIveDone
    }
  }
</script>
