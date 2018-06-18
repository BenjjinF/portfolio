<template lang="html">
    <div class="responsive-desktop">
      <div class="menu" :style="transition(0)"></div>
      <div class="content">
          <div class="image" :style="transition(1)"></div>
          <div class="text1" :style="transition(1)"></div>
          <div class="text2" :style="transition(1.333)"></div>
          <div class="text3" :style="transition(1.666)"></div>
          <div class="text4" :style="transition(1.999)"></div>
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
.responsive-apps {
  .responsive-desktop {
    background-color: $white;
    border: .25rem solid $primary-dark;
    height: 100%;
    pointer-events: none;
    top: 0%;
    .menu {
      background-color: $primary-dark;
      height: 100%;
      width: 0%;
      left: 0%;
    }
    .content {
      position: absolute;
      padding: 10%;
      height: 100%;
      width: 80%;
      left: 20%;
      top: 0%;
      .image {
        background-color: $primary-light;
        height: 45%;
        opacity: 0;
      }
      .text1, .text2, .text3, .text4,  {
        background-color: $grey;
        margin: 10% 0;
        height: 7.5%;
        width: 0%;
      }
    }
  }
  &.active {
    .responsive-desktop {
      .menu {
        width: 20%;
      }
      .content {
        .image {
          opacity: 1;
        }
        .text1, .text2, .text3, .text4,  {
          width: 100%;
        }
      }
    }
  }
}

</style>
