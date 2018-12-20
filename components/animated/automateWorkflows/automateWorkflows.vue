<template lang="html">
  <div class="automated-workflows" @mouseover="animate" @touchstart="animate">
    <div class="anchor">
      <div class="circle">
        <div class="point one" :class="{'active': pointOne}"></div>
        <div class="point two" :class="{'active': pointTwo}"></div>
        <div class="point three" :class="{'active': pointThree}"></div>
        <Gears ref="gears" :speed="speed"></Gears>
      </div>
    </div>
  </div>
</template>

<script>
import Gears from './_gears.vue'
export default {
  data() {
      return {
          'speed': 2.5,
          'pointOne': false,
          'pointTwo': false,
          'pointThree': false,
          'lock': false
      }
  },
  methods: {
    falsify() {
      this.pointOne = false
      this.pointTwo = false
      this.pointThree = false
    },
    animate() {
      if (!this.lock) {
        this.lock = true
        this.falsify()
        this.$refs.gears.animate()
        this.pointOne = true
        let secondPoint = setTimeout(() => {
          this.pointOne = false
          this.pointTwo = true
        }, this.speed / 3 * 1000)
        let thirdPoint = setTimeout(() => {
          this.pointTwo = false
          this.pointThree = true
        }, this.speed / 3 * 2 * 1000)
        let endAnimation = setTimeout(() => {
          this.pointThree = false
          this.lock = false
        }, this.speed * 1000)
      }
    }
  },
  components: {
    Gears
  }
}
</script>

<style scoped lang="scss">

$point-size: 17%;
$border-width: .65em;

.automated-workflows {
  width: 100%;
  padding-top: 100%;
  width: 100%;
  position: relative;
  .anchor {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    box-sizing: border-box;
    .circle {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: $border-width solid color(primary, dark);
      box-sizing: border-box;
      .point {
        position: absolute;
        border-radius: 50%;
        height: $point-size;
        width: $point-size;
        border: .5em solid color(primary, dark);
        background: color(primary, dark);
        transition-duration: $transition-duration / 2;
        &.active {
          background: color(primary, light);
        }
        &.one {
          top: -$point-size/2.7;
          left: (100% - $point-size)/2;
        }
        &.two {
          top: 64%;
          right: -$point-size/20;
        }
        &.three {
          top: 64%;
          left: -$point-size/20;
        }
      }
    }
  }
}

</style>
