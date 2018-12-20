<template lang="html">
<section id="splash">
  <div class="content">
    <h3>developer<span>:</span>//</h3>
    <h1>benjamin frost</h1>
    <hr>
    <p class="intro">I build web apps and other nerd stuff in Halifax, Nova Scotia.</p>
  </div>
</section>

</template>
<script>
  export default {
  }
</script>
<style lang="scss">
  #splash {
    height: 60vh;
    max-height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    * {
      text-align: left;
      margin: 0;
    }
    .content {
      max-width: 300px;
      h3 {
        span {
          margin: 0 $spacing/3;
        }
      }
      h1 {
        color: color(primary, dark);
        font-weight: bold;
      }
      hr {
        margin: $spacing/1.5 0;
      }
    }

  }
</style>