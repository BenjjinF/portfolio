<template lang="html">
  <section id="what-i-do">
    <intro class="intro"></intro>
    <div v-if="!animationsDone" :track-scroll="scroll" style="display: none;"></div>
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
      'animations': [
        {
          'alreadyRun': false,
          'ref': 'responsiveAnimation',
          'offset': -300,
          'delay': 300
        },
        {
          'alreadyRun': false,
          'ref': 'automateAnimation',
          'offset': -300,
          'delay': 0
        },
        {
          'alreadyRun': false,
          'ref': 'reportsAnimation',
          'offset': -300,
          'delay': 0
        },
        // animating the skill bars cause the component to reload
        // {
        //   'alreadyRun': false,
        //   'ref': 'languages',
        //   'offset': -400,
        //   'delay': 0
        // },
        // {
        //   'alreadyRun': false,
        //   'ref': 'frameworks',
        //   'offset': -600,
        //   'delay': 0
        // },
      ]
    }
  },
  methods: {
    animate(value) {
      if (!value.alreadyRun) {
        setTimeout(() => {
          let ref = this.$refs[value.ref]
          if (Array.isArray(this.$refs[value.ref])) {
            ref = ref[0]
          }
          let animateAt = ref.$el.offsetTop + value.offset
          if (this.$store.state.scroll >= animateAt) {
            ref.animate()
            value.alreadyRun = true
          }
        }, value.delay)
      }
    },
  },
  computed: {
    animationsDone() {
      for (let animation in this.animations) {
        if (!animation.alreadyRun) {
          return false
        }
      }
      return true
    },
    scroll() {
      if (process.browser && this.isMounted ) {
        if (!this.animationsDone) {
          let scroll = this.$store.state.scroll
          this.animations.forEach((value) => {
            this.animate(value)
          })
          return scroll
        }
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
    display: flex;
    flex-direction: column;

    .intro {
      margin-top: 0;
      margin-bottom: $spacing * 3;
      text-align: center;
    }
    article {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: $spacing * 3;
      > .animation {
        width: 70%;
        margin-bottom: $spacing;
      }
      .description {
        h2, p {
          text-align: center;
        }
      }
    }
    @include media(">md") {
      flex-wrap: wrap;
      align-items: flex-start;
      margin-bottom: $spacing * 5;
      .intro {
        width: 100%;
        background-color: $primary-light;
        padding: $spacing;
        border-radius: $default-border-radius;
        color: $primary-dark;
      }
      article {
        flex-direction: row;
        width: 100%;
        align-items: center;
        &:last-child {
          margin-bottom: 0;
        }
        .animation {
          margin-right: 6%;
          width: 35%;
        }
        .description {
          width: 49%;
          display: flex;
          flex-direction: column;
          align-items: center;
          h2, p {
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
