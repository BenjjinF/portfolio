<template lang="html">
  <svg class="point" :class="classes" :style="{animationDelay: animationDelay + 's'}" width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30.5" cy="30.5" r="25.5" fill="#1C3144" stroke="#1C3144" stroke-width="10"/>
  </svg>
</template>
<script>
  export default {
    props: ['classes', 'animationDelay']
  }
</script>
<style lang="scss">
</style>