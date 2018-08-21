<template lang="html">
  <div class="skillset">
    <h3>{{skillset.name}}</h3>
    <skill v-for="(skill, index) in skillset.skills" :skill="skill" :key="index"></skill>
  </div>
</template>

<script>
import skill from '~/components/home/whatIKnow/_skill.vue'

export default {
  props: ['skillset'],
  components: {
    skill
  }
}
</script>

<style lang="scss">

  .skillset:not(:first-of-type) {
    h3 {
      margin-top: $spacing;
    }
  }
</style>
