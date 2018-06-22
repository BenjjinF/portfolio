<template lang="html">
  <section id="what-i-do">
    <intro class="intro"></intro>
    <div v-if="animations.length > 0" :track-scroll="scroll" style="display: none;"></div>
    <h1 class="what-i-do"><span class="underline">What I Do</span></h1>
    <article>
      <div class="animation">
        <responsiveApps ref="responsiveAnimation"></responsiveApps>
      </div>
      <div class="description">
        <h2>Responsive Web Apps</h2>
        <p>I build fast, scalable web applications that look great on devices of any size.</p>
      </div>
    </article>

    <article>
      <div class="animation" ref="a">
        <automateWorkflows ref="automateAnimation"></automateWorkflows>
      </div>
      <div class="description">
        <h2>Automate Workflows</h2>
        <p>With a background in operations, I know how to get things done; I design business processes to require a human touch only when it is best.</p>
      </div>
    </article>
    <article>
      <div class="animation">
        <reports ref="reportsAnimation"></reports>
      </div>
      <div class="description">
        <h2>Self-Generating Reports</h2>
        <p>I can work with your existing data sources, or help you develop a data-pipeline, so that your business has the information it needs to make informed decisions.</p>
      </div>
    </article>
  </section>
</template>

<script>
import responsiveApps from '~/components/animated/responsiveApps/responsiveApps.vue'
import automateWorkflows from '~/components/animated/automateWorkflows/automateWorkflows.vue'
import reports from '~/components/animated/reports.vue'
import intro from '~/components/TheHeader/_intro.vue'

export default {
  data() {
    return {
      'isMounted': false,
      'animateAtsSet': false,
      'animationsDone': false,
      'animations': [
        {
          'ref': 'responsiveAnimation',
          'delay': 300,
          'position': null,
          'offset': -300,
          'animateAt': null

        },
        {
          'ref': 'automateAnimation',
          'delay': 0,
          'position': null,
          'offset': -300,
          'animateAt': null
        },
        {
          'ref': 'reportsAnimation',
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
    responsiveApps,
    automateWorkflows,
    reports,
    intro
  }
}
</script>

<style lang="scss">

  #what-i-do {
    .intro {
      margin-top: 0;
      margin-bottom: $main-padding-sm-y;
      text-align: center;
    }
    article {
      margin-bottom: $spacing * 3;
      > .animation {
        width: 70%;
        margin: 0 auto;
      }
      .description {
        h2, p {
          text-align: center;
        }
        h2 {
          margin: $spacing/2 0;
        }
        p {
          margin-top: 0;
        }
      }
    }
    @include media(">md") {
      .intro {
        width: 100%;
        background-color: $primary-light;
        padding: $spacing;
        border-radius: $default-border-radius;
        color: $primary-dark;
        margin-bottom: $main-padding-md-y
      }
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
