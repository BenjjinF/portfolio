<template>
  <div class="page page-home">
    <whatIveDone :projects="projects"></whatIveDone>
  </div>
</template>

<script>
  import whatIveDone from '~/components/home/whatIveDone/whatIveDone.vue'

  export default {
    asyncData(context) {
      return context.app.$storyapi.get('cdn/stories', {
        version: process.env.NODE_ENV == 'production' ? 'published' : 'draft',
        starts_with: 'projects/',
        is_startpage: 0
      }).then ( res => {
        let projects = res.data.stories.map(story => {
          let project = {
            id: story.slug,
            title: story.content.title,
            previewText: story.content.previewText,
            thumbnailURL: story.content.image,
          }
          if (story.content.images.length) {
            project['image'] = story.content.images[0].image
          } else {
            project['image'] = story.content.images = ''
          }
          return project
        })
        return {
          'projects': projects
        }
      })
    },
    components: {
      whatIveDone
    }
  }
</script>
