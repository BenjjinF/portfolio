<template lang="html">
  <div class="page page-contact">
    <section>
      <h1 :class="{submitted: submitted}"><span class="underline">Contact</span></h1>
      <transition name="fade" mode="out-in">
          <component :is="contactComponent"></component>
      </transition>
    </section>
  </div>
</template>

<script>
import Form from '~/components/contact/form.vue'
import ThankYou from '~/components/contact/thankYou.vue'

export default {
  computed: {
    submitted() {
      return this.$store.state.contactFormSubmitted
    },
    contactComponent() {
      if (this.submitted) {
        return 'thankYou'
      } else {
        return 'Form'
      }
    },
  },
  components: {
      Form,
      ThankYou
  },
}
</script>

<style lang="scss">
  .page-contact {
    h1 {
      transition-duration: $transition-duration;
      &.submitted {
        opacity: 0;
      }
    }
  }
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity $transition-duration;
      opacity: 1;
  }

  .fade-leave-active {
      opacity: 0;
      transition: opacity $transition-duration;
  }
</style>
