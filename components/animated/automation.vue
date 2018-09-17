<template lang="html">
<div class="automation">
  <Ring></Ring>
  <Gear :classes="'one'"></Gear>
  <Gear :classes="'two'"></Gear>
  <Gear :classes="'three'"></Gear>
  <Point :classes="'one'"></Point>
  <Point :classes="'two'"></Point>
  <Point :classes="'three'"></Point>
</div>
  
</template>
<script>
  import Ring from '~/components/animated/svg/automation/ring.vue'
  import Gear from '~/components/animated/svg/automation/gear.vue'
  import Point from '~/components/animated/svg/automation/point.vue'

  export default {
    props: ['isActive'],
    
    components: {
      Ring,
      Gear,
      Point
    }
  }
</script>
<style lang="scss">

  $base-size: 32%;
  $offset-outer: $base-size/5;
  $offset-inner: 1.6%;
  .animation {

    .automation {
      position: relative;
      height: 100%;
      > * {
        position: absolute;
      }
      .ring {
        width: 100% - $offset-outer;
        height: 100% - $offset-outer;
        top: $offset-outer;
        left: $offset-outer/2;
      }
      .gear {
        width: $base-size;
        height: auto;
        &.one {
          top: 50% - $base-size + $offset-outer + 2.5%;
          left: 50% - $base-size - $offset-inner;
        }
        &.two {
          top: 50% - $base-size + $offset-outer + 2.5%;
          right: 50% - $base-size - $offset-inner;
        }
        &.three {
          bottom: 50% - $base-size - $offset-inner*2;
          left: (100% - $base-size)/2;
        }
      }
      .point {
        width: $base-size/2;
        height: auto;
        &.one {
          top: 0%;
          left: (100% - $base-size/2)/2;
        }
        &.two {
          right: $offset-outer/2;
          bottom: 15%;
        }
        &.three {
          left: $offset-outer/2;
          bottom: 15%;
        }
      }
    }
    
    &.active {
      .automation {
        .gear {
            transform-origin: center;
            animation-name: rotate; 
            animation-timing-function: ease-in-out;
          &.three {
            animation-direction: reverse;
          }
        }

        @keyframes light-one {
          10% {
            fill: $primary-light;
          }

          30% {
            fill: $primary-light;
          }

          40% {
            fill: $primary-dark;
          }
        }
        @keyframes light-two {
          30% {
            fill: $primary-dark;
          }

          40% {
            fill: $primary-light;
          }

          60% {
            fill: $primary-light;
          }
          70% {
            fill: $primary-dark;
          }
        }
        @keyframes light-three {
          60% {
            fill: $primary-dark;
          }

          70% {
            fill: $primary-light;
          }

          90% {
            fill: $primary-light;
          }
          100% {
            fill: $primary-dark;
          }
        }
        .point {
          &.one {
            circle {
              animation-name: light-one;
              animation-timing-function: ease-in-out;
            }
          }
          &.two {
            circle {
              animation-name: light-two;
              animation-timing-function: ease-in-out;
            }
          }
          &.three {
            circle {
              animation-name: light-three;
              animation-timing-function: ease-in-out;
            }
          }
        }
      }
    }
  }
</style>