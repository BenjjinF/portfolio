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
      background-color: color(primary, light);
      border-radius: $default-border-radius;
      overflow: hidden;
      .skill {
        transition-duration: $transition-duration;
        padding: $spacing/2;
        background-color: color(primary, dark);
        color: color(primary, light);
        white-space: nowrap;
        font-size: .9rem;
        @include media(">sm") {
          font-size: 1rem;
        }
      }
    }
  }
</style>
