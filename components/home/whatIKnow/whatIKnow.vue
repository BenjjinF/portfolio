<template lang="html">
  <section id="what-i-know">
    <h1><span class="underline">What I Know</span></h1>
    <skillset v-for="skillset, index in skillsets" :key="index" :skillset="skillset"></skillset>
  </section>
</template>

<script>
import skillset from '~/components/home/whatIKnow/_skillset.vue'

export default {
  data() {
    return {
      'skillsets': [
        {
          'name': 'Languages',
          'skills': [
            {
              'name': 'Python',
              'width': '80%'
            },
            {
              'name': 'HTML / CSS / SASS / LESS',
              'width': '70%'
            },
            {
              'name': 'JavaScript',
              'width': '60%'
            }
          ]
        },
        {
          'name': 'Frameworks',
          'skills': [
            {
              'name': 'Django / Wagtail',
              'width': '80%'
            },
            {
              'name': 'Vue.js / Nuxt.js / StoryBlok',
              'width': '70%'
            },
            {
              'name': 'Bootstrap / Semantic UI',
              'width': '60%'
            }
          ]
        }
      ]
    }
  },
  components: {
    skillset
  }
}
</script>

<style lang="scss">
</style>
