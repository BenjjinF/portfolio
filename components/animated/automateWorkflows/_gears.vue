<template lang="html">
  <div class="gears">
    <div class="gear" :class="{active: isActive}" :style="{'animation-duration': speed + 's'}">
      <div class="center"></div>
      <div class="tooth"></div>
      <div class="tooth"></div>
      <div class="tooth"></div>
      <div class="tooth"></div>
    </div>
    <div class="gear" :class="{active: isActive}" :style="{'animation-duration': speed + 's'}">
      <div class="center"></div>
      <div class="tooth"></div>
      <div class="tooth"></div>
      <div class="tooth"></div>
      <div class="tooth"></div>
    </div>
    <div class="gear" :class="{active: isActive}" :style="{'animation-duration': speed + 's'}">
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



.gears {
  width: 100%;
  padding-top: 100%;
  top: 0;
  position: relative;
  pointer-events: none;
  .gear {
    position: absolute;
    width: 27%;
    height: 27%;
    background: $grey;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation-timing-function: ease-in-out;

    &.active {
      animation-name: spin;
    }
    &:first-child {
      top: 53%;
      left: 36.5%;
      animation-direction: reverse;
    }
    &:nth-child(2) {
      top: 26%;
      left: 18.5%;
    }
    &:nth-child(3) {
      top: 26%;
      left: 54.5%;
    }

  }

}


.gear .center {
  z-index: 10;
  width: 50%;
  height: 50%;
  background: white;
  border-radius: 50%;
}

.tooth{
  position: absolute;
  z-index: 1;
  width: 21%;
  height: 125%;
  background: $grey;
}

.tooth:nth-child(2){
  transform: rotate(45deg);
}

.tooth:nth-child(3){
  transform: rotate(90deg);
}

.tooth:nth-child(4){
  transform: rotate(135deg);
}

@keyframes spin {
  from {transform: rotate(0deg); }
  to {transform: rotate(360deg);}
}

</style>
