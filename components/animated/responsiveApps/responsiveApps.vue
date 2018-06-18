<template lang="html">
    <div class="responsive-apps" :class="status" @mouseover="animate">
      <responsiveDesktop :speed="speed" :status="status"></responsiveDesktop>
      <responsiveMobile :speed="speed" :status="status"></responsiveMobile>
    </div>
</template>

<script>
import responsiveDesktop from './_responsiveDesktop.vue'
import responsiveMobile from './_responsiveMobile.vue'

export default {
    data() {
      return {
        'status': 'reset',
        'speed': 1.75,
  			'lock': false
      }
    },
    methods: {
      animate() {
        if (!this.lock) {
          this.lock = true
          if (this.status == 'active') {
            this.status = ''
            setTimeout(() => {
              this.status = 'active'
              setTimeout(() => {
                this.lock = false
              }, this.speed * 1000)
            }, this.speed * 1000)
          } else {
            this.status = 'active'
            setTimeout(() => {
              this.lock = false
            }, this.speed * 1000)
          }
        }
      }
    },
    components: {
      responsiveDesktop,
      responsiveMobile,
    }
}
</script>

<style scoped lang="scss">
  .responsive-apps {
    width: 100%;
    padding-top: 100%;
    position: relative;
    .responsive-desktop {
      position: absolute;
      top: 0;
      left: 0;
      width: 90%
    }
    .responsive-mobile {
      position: absolute;
      width: 30%;
      top: 50%;
      left: 70%;
    }
  }
</style>
