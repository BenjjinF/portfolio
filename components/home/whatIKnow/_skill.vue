<template lang="html">
  <div class="skill-bar">
    <div class="skill" :style="{'width': skill.width}">
      {{ skill.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['skill'],
  data() {
    return {
      'active': false
    }
  }
}
</script>

<style lang="scss">
  
  .skillset {
    .skill-bar {
      margin: $spacing/2 0;
      background-color: $columbia-blue;
      border-radius: $default-border-radius;
      overflow: hidden;
      .skill {
        transition-duration: $transition-duration;
        padding: $spacing/2;
        background-color: $primary-dark;
        color: $primary-light;
        white-space: nowrap;
      }
    }
  }
</style>
