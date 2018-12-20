<template lang="html">
  <section id="why-me">
    <div v-if="animations.length > 0" :track-scroll="scroll" style="display: none;"></div>
    <h1 class="why-me"><span class="underline">Why me?</span></h1>
    <article>
      <Animation ref="speed" :animationDuration="animationDuration">
        <Speed></Speed>
      </Animation>
      <h2>Fast</h2>
    </article>

    <article>
      <Animation ref="allPlatforms" :animationDuration="animationDuration">
       <AllPlatforms></AllPlatforms>
      </Animation>
      <h2>Responsive</h2>
    </article>

    <article>
      <Animation ref="automation" :animationDuration="animationDuration">
        <Automation></Automation>
      </Animation>
      <h2>Automation</h2>
    </article>

  </section>
</template>

<script>
import Animation from '~/components/animated/animation.vue'
import Speed from '~/components/animated/speed.vue'
import AllPlatforms from '~/components/animated/allPlatforms.vue'

import Automation from '~/components/animated/automation.vue'

export default {
  data() {
    return {
      'isMounted': false,
      'animateAtsSet': false,
      'animationsDone': false,
      'animationDuration': 2.5,
    }
  },
  methods: {
    setAnimateAts() {
      this.animations.forEach((value) => {
        let ref = this.$refs[value.ref]
        if (Array.isArray(this.$refs[value.ref])) {
          ref = ref[0]
        }
        value.animateAt = ref.$el.offsetTop + value.offset
      })
      this.animateAtsSet = true
    },
    animate(value, index) {
      setTimeout(() => {
        let ref = this.$refs[value.ref]
        if (Array.isArray(this.$refs[value.ref])) {
          ref = ref[0]
        }
        ref.animate()
        this.animations.splice(index, 1);
      }, value.delay)
    },
  },
  computed: {
    animations() {
      let delays = {
        0: 0,
        1: 0,
        2: 0
      }
      if (this.$mq == "md") {
        delays[1] = 2300
      } else if (this.$mq == "lg" || this.$mq == "xl") {
        delays[1] = 2300
        delays[2] = 5000
      }
      return [
        {
          'ref': 'speed',
          'delay': delays[0],
          'position': null,
          'offset': this.$mq == "sm" ? -300 : -200,
          'animateAt': null

        },
        {
          'ref': 'allPlatforms',
          'delay': delays[1],
          'position': null,
          'offset': this.$mq == "sm" ? -300 : -200,
          'animateAt': null
        },
        {
          'ref': 'automation',
          'delay': delays[2],
          'position': null,
          'offset': this.$mq == "sm" ? -300 : -200,
          'animateAt': null
        },
      ]
    },
    scroll() {
      if (process.browser && this.isMounted ) {
        if (!this.animateAtsSet) {
          this.setAnimateAts()
        }
        let scroll = this.$store.state.scroll
        this.animations.forEach((value, index) => {
          if (scroll > value.animateAt) {
            this.animate(value, index)
          }
        })
        return scroll
      }
    },
  },
  mounted() {
    this.isMounted = true
  },
  components: {
    Animation,
    Speed,
    Automation,
    AllPlatforms,
  }
}
</script>

<style lang="scss">

  #why-me {
    display: flex;
    flex-direction: column;
    
    article {
      @include responsive-spacing(margin-bottom, main, y);
      > .animation {
        width: 70%;
      }
      h2 {
        margin: $spacing/2 0;
        text-align: center;
      }
    }
    @include media(">md") {
      flex-direction: row;
      flex-wrap: wrap;
      article {
        width: calc(100%/2);
      }
    }
    @include media(">xl") {
      article {
        width: calc(100%/3);
      }
    }
  }
</style>
