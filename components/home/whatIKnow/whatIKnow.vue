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
          'name': 'Frontend',
          'skills': [
            {
              'name': 'JavaScript',
              'width': '80%'
            },
            {
              'name': 'Vue.js / Nuxt.js',
              'width': '80%'
            },
            {
              'name': 'HTML / CSS / SASS / LESS',
              'width': '75%'
            }
          ]
        },
        {
          'name': 'Backend',
          'skills': [
            {
              'name': 'Python',
              'width': '80%'
            },
            {
              'name': 'Django / Wagtail',
              'width': '80%'
            },
            {
              'name': 'Node.js / Express.js',
              'width': '40%'
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
