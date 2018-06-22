<template lang="html">
    <div class="responsive-mobile">
      <div class="menu" :style="transition(0)"></div>
      <div class="content">
          <div class="image" :style="transition(1)"></div>
          <div class="text" :style="transition(1)"></div>
          <div class="text" :style="transition(1.333)"></div>
          <div class="text" :style="transition(1.666)"></div>
          <div class="text" :style="transition(1.999)"></div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['speed', 'status'],
  methods: {
    transition(delay) {
      return {
        transition: this.speed/5 + 's linear',
        transitionDelay: this.speed/5*delay + 's',
      }
    }
  }
}
</script>

<style scoped lang="scss">

$menu-height: 12%;
$image-height: 40%;
$spuedo-margin: 9%;

.responsive-apps {
  .responsive-mobile {
    background-color: $white;
    border: .25em solid $primary-dark;
    height: 50%;
    pointer-events: none;
    top: 50%;
    .menu {
      background-color: $primary-dark;
      height: $menu-height;
      width: 0%;
    }
    .content {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100% - $menu-height - $spuedo-margin;
      width: 100% - $spuedo-margin*2;
      left: $spuedo-margin;
      top: $spuedo-margin/2 + $menu-height;
      .image {
        background-color: $primary-light;
        height: $image-height;
        opacity: 0;
      }
      .text  {
        background-color: $grey;
        height: 7.5%;
        width: 0%;
      }
    }
  }
  &.active {
    .responsive-mobile {
      .menu {
        width: 100%;
      }
      .content {
        .image {
          opacity: 1;
        }
        .text {
          width: 100%;
        }
      }
    }
  }
}

</style>
