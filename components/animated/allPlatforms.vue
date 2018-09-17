<template lang="html">
  <div class="all-platforms">
    <div class="menu"></div>
    <div class="content">
      <div class="image"></div>
      <div class="text"></div>
      <div class="text"></div>
      <div class="text"></div>
      <div class="text"></div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped lang="scss">

$menu-height-l: 100%;
$menu-width-l: 30%;

$menu-height-m: 100%;
$menu-width-m: 20%;

$menu-height-s: 12%;
$menu-width-s: 100%;

$content-height-l: 100%;
$content-width-l: 100% - $menu-width-l;

$content-height-m: 100%;
$content-width-m: 100% - $menu-width-m;

$content-height-s: 100% - $menu-height-s;
$content-width-s: 100%;


@keyframes responsive-container {
  0% {
    margin-top: 0%;
    height: 100%;
    width: 100%;
  }
  18% {
    margin-top: 0%;
    height: 100%;
    width: 100%;
  }

  33% {
    margin-top: 5%;
    height: 90%;
    width: 67.5%;
  }
  51% {
    margin-top: 5%;
    height: 90%;
    width: 67.5%;
  }

  66% {
    margin-top: 10%;
    height: 80%;
    width: 45%;
  }
  85% {
    margin-top: 10%;
    height: 80%;
    width: 45%;
  }

  100% {
    margin-top: 0%;
    height: 100%;
    width: 100%;
  }
}

@keyframes responsive-menu {
  0% {
    height: $menu-height-l;
    width: $menu-width-l;
  }
  18% {
    height: $menu-height-l;
    width: $menu-width-l;
  }

  33% {
    height: $menu-height-m;
    width: $menu-width-m;
  }
  51% {
    height: $menu-height-m;
    width: $menu-width-m;
  }

  66% {
    height: $menu-height-s;
    width: $menu-width-s;
  }

  85% {
    height: $menu-height-s;
    width: $menu-width-s;
  }

  100% {
    height: $menu-height-l;
    width: $menu-width-l;
  }
}

@keyframes responsive-content {
  0% {
    height: $content-height-l;
    width: $content-width-l;
  }
  18% {
    height: $content-height-l;
    width: $content-width-l;
  }

  33% {
    height: $content-height-m;
    width: $content-width-m;
  }
  51% {
    height: $content-height-m;
    width: $content-width-m;
  }

  66% {
    height: $content-height-s;
    width: $content-width-s;
  }

  85% {
    height: $content-height-s;
    width: $content-width-s;
  }

  100% {
    height: $content-height-l;
    width: $content-width-l;
  }
}


.animation {
  .all-platforms {
    background-color: $white;
    border: .25em solid $primary-dark;
    height: 100%;
    position: relative;
    margin: auto;
    .menu {
      position: abolute;
      background-color: $primary-dark;
      height: $menu-height-l;
      width: $menu-width-l;
      left: 0;
    }
    .content {
      position: absolute;
      right: 0%;
      bottom: 0%;
      padding: $spacing;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: $content-height-l;
      width: $content-width-l;
      .image {
        background-color: $primary-light;
        flex-grow: .435;
      }
      .text {
        background-color: $grey;
        flex-grow: .075;
        width: 100%;
      }
    }
  }

  &.active {
    .all-platforms {
      animation-name: responsive-container;
      .menu {
        animation-name: responsive-menu;
      }
      .content {
        animation-name: responsive-content;
      }
    }
  }
}


</style>
