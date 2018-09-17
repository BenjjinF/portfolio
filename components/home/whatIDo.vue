<template lang="html">
  <section id="what-i-do">
    <intro class="intro"></intro>
    <div v-if="animations.length > 0" :track-scroll="scroll" style="display: none;"></div>
    <!-- <h1 class="what-i-do"><span class="underline">What I Do</span></h1> -->
    <article>
      <Animation ref="speed" :animationDuration="animationDuration">
        <Speed></Speed>
      </Animation>
      <div class="description">
        <h2>Speed</h2>
        <p>The technologies I use are fast; both in terms of performance and development time.</p>
      </div>
    </article>

    <article>
      <Animation ref="allPlatforms" :animationDuration="animationDuration">
       <AllPlatforms></AllPlatforms>
      </Animation>
      <div class="description">
        <h2>All Platforms</h2>
        <p>I build for Android, iOS, and desktop simultaneously; why pay thrice for the same functionality?</p>
      </div>
    </article>

    <article>
      <Animation ref="automation" :animationDuration="animationDuration">
        <Automation></Automation>
      </Animation>
      <div class="description">
        <h2>Automation</h2>
        <p>I've a habit of rendering myself redundant; I can automate tasks which you didn't know you didn't have to do.</p>
      </div>
    </article>
  </section>
</template>

<script>
import Animation from '~/components/animated/animation.vue'
import Speed from '~/components/animated/speed.vue'
import AllPlatforms from '~/components/animated/allPlatforms.vue'

import Automation from '~/components/animated/automation.vue'

// import responsiveApps from '~/components/animated/responsiveApps/responsiveApps.vue'
// import automateWorkflows from '~/components/animated/automateWorkflows/automateWorkflows.vue'
// import reports from '~/components/animated/reports.vue'
import intro from '~/components/TheHeader/_intro.vue'

export default {
  data() {
    return {
      'isMounted': false,
      'animateAtsSet': false,
      'animationsDone': false,
      'animationDuration': 2.5,
      'animations': [
        {
          'ref': 'speed',
          'delay': 300,
          'position': null,
          'offset': -300,
          'animateAt': null

        },
        {
          'ref': 'allPlatforms',
          'delay': 0,
          'position': null,
          'offset': -300,
          'animateAt': null
        },
        {
          'ref': 'automation',
          'delay': 0,
          'position': null,
          'offset': -300,
          'animateAt': null
        },
      ]
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
    // responsiveApps,
    // automateWorkflows,
    // reports,
    intro
  }
}
</script>

<style lang="scss">

  #what-i-do {
    .intro {
      width: 100%;
      background-color: $primary-light;
      padding: $spacing;
      border-radius: $default-border-radius;
      color: $primary-dark;
      margin-bottom: $main-padding-md-y;
      text-align: center;
      margin-top: 0;
    }

    article {
      margin-bottom: $spacing * 3;
      > .animation {
        width: 70%;
        // margin: 0 auto;
      }
      .description {
        h2, p {
          text-align: center;
        }
        h2 {
          margin: $spacing/2 0;
        }
        p {
          margin-bottom: 0;
          margin-top: 0;
        }
      }
    }
    @include media(">md") {
      article {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .animation, .description {
          display: inline-block;
        }
        .animation {
          margin: 0;
          width: 35%;
        }
        .description {
          width: 55%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          h2, p {
            margin-top: 0;
            width: 100%;
            text-align: left;
          }
        }
      }
    }
    @include media("<lg") {
      .what-i-do {
        display: none;
      }
    }
    @include media(">lg") {
      .intro {
        display: none;
      }
    }
  }
</style>
