<template lang="html">
  <div class="gears">
    <div class="gear one" :class="{active: isActive}" :style="{'animation-duration': speed + 's'}">
      <div class="center"></div>
      <div class="tooth"></div>
      <div class="tooth"></div>
      <div class="tooth"></div>
      <div class="tooth"></div>

    </div>
    <div class="gear two" :class="{active: isActive}" :style="{'animation-duration': speed + 's'}">
      <div class="center"></div>
      <div class="tooth"></div>
      <div class="tooth"></div>
      <div class="tooth"></div>
      <div class="tooth"></div>
    </div>
    <div class="gear three" :class="{active: isActive}" :style="{'animation-duration': speed + 's'}">
      <div class="center"></div>
      <div class="tooth"></div>
      <div class="tooth"></div>
      <div class="tooth"></div>
      <div class="tooth"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
        'isActive': false
      }
  },
  props: ['speed'],
  methods: {
    animate() {
      this.isActive = true
      let gearAnimation = setTimeout(() => {
        this.isActive = false
      }, this.speed * 1000)
    }
  }
}
</script>

<style scoped lang="scss">
$gear-color: $grey;
$gear-root-size: 27%;
$gear-center: 65%;
$tooth-width: 20%;
$gear-outer-size: 120%;
$tooth-height: ($gear-outer-size - 100%)/2;
$gear-size: $gear-root-size*$gear-outer-size/100%;

@keyframes spin {
  from {transform: rotate(0deg); }
  to {transform: rotate(360deg);}
}

.gears {
  left: 0;
  padding-top: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%;
  .gear {
    position: absolute;
    width: $gear-root-size;
    height: $gear-root-size;
    background: $gear-color;
    border-radius: 50%;
    animation-timing-function: ease-in-out;
    &.active {
      animation-name: spin;
    }
    .center {
      z-index: 10;
      position: absolute;
      top: (100% - $gear-center)/2;
      left: (100% - $gear-center)/2;
      width: $gear-center;
      height: $gear-center;
      background: white;
      border-radius: 50%;
    }
    .tooth {
      position: absolute;
      top: -$tooth-height;
      left: (100% - $tooth-width)/2;
      width: $tooth-width;
      height: $gear-outer-size;
      background: $gear-color;
      &:nth-child(2){
        transform: rotate(45deg);
      }
      &:nth-child(3){
        transform: rotate(90deg);
      }
      &:nth-child(4){
        transform: rotate(135deg);
      }
    }

    &.one {
      top: 49.5% + 4%;
      left: (100% - $gear-root-size)/2;
      animation-direction: reverse;
    }
    &.two {
      bottom: 49.5% - 4%;
      right: 53.8%;

    }
    &.three {
      bottom: 49.5% - 4%;
      left: 53.8%;
    }
  }
}






</style>
