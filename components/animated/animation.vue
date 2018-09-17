<template lang="html">
  <div class="animation" :class="{active: isActive}" :style="{animationDuration: animationDuration + 's'}" @mouseover="animate" @touchstart="animate">
    <div class="aspect-1x1">
      <div class="anchor">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['animationDuration'],
    data() {
      return {
        'isActive': false,
      }
    },
    methods: {
      animate() {
        if (this.isActive == false) {
          this.isActive = true
          setTimeout(() => {
            this.isActive = false
          }, this.animationDuration * 1000)
        }
      }
    },
    computed: {
      animationProps() {
        return {
          isActive: this.isActive,
          animationDuration: this.animationDuration
        }
      }
    }
  }
</script>
<style lang="scss">
  @keyframes rotate {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
  }

  .animation {
    user-select: none;
    margin: auto;
    * {
      animation-duration: inherit;
      pointer-events: none;
    }
    .aspect-1x1 {
      width: 100%;
      padding-top: 100%;
      position: relative;
      .anchor {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
      }
    }
  }

</style>