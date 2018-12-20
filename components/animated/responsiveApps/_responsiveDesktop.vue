<template lang="html">
    <div class="responsive-desktop">
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

$menu-width: 20%;
$image-height: 43.5%;
$spuedo-margin: 7%;

.animation {
  .responsive-apps {
    .responsive-desktop {
      background-color: color(white);
      border: .25em solid color(primary, dark);
      height: 100%;
      pointer-events: none;
      top: 0%;
      .menu {
        background-color: color(primary, dark);
        height: 100%;
        width: $menu-width;
        left: 0%;
      }
      .content {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100% - $spuedo-margin*.9*2;
        width: 100% - $spuedo-margin*2 - $menu-width;
        left: $menu-width + $spuedo-margin;
        top: $spuedo-margin*.9;
        .image {
          background-color: color(primary, light);
          height: $image-height;
          opacity: 1;
        }
        .text {
          background-color: color(grey);
          height: 7.5%;
          width: 100%;
        }
      }
    }
  }

  &.active {
    .responsive-desktop {
      .menu {
        // width: 0%;
        background-color: color(blue-grey, 100);
      }
      .content {
        .image {
          opacity: 0;
        }
        .text {
          width: 0%;
        }
      }
    }
  }
}


</style>
