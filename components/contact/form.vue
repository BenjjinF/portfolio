<template lang="html">
  <form id="contact-form" class="col-span">
    <input :class="{error: contactErrors.name}" type="text" v-model="contact.name" placeholder="Name">
    <input :class="{error: contactErrors.email}" type="email" v-model="contact.email" placeholder="Email">
    <!-- Grammarly adds overflow: hidden and cuts off the box-shadows -->
    <textarea type="text" v-model="contact.message" placeholder="Message" rows="5" data-gramm_editor="false"></textarea>
    <button @click="submit" class="button" type="button" name="button">
      <span v-if="!submitting">Send</span>
      <font-awesome-icon v-if="submitting" icon="spinner" pulse ></font-awesome-icon>
    </button>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      contact: {
        timestamp: new Date(),
        name: '',
        email: '',
        message: '',
      },
      contactErrors: {
        name: false,
        email: false,
      },
      submitting: false,
    }
  },
  methods: {
    validate() {
      let errors = false
      this.contactErrors = {
        name: false,
        email: false,
      }
      if (this.contact.name.length == 0) {
        this.contactErrors['name'] = true
        errors = true
      }
      // Email Regex
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      let valid_email = re.test(String(this.contact.email).toLowerCase())

      if (valid_email == false) {
        this.contactErrors['email'] = true
        errors = true
      }
      return errors
    },
    submit() {
      let errors = this.validate()
      let vm = this
      if (errors == false) {
        this.submitting = true
        axios.post(
          'https://btfrost-3edab.firebaseio.com/contact.json',
          this.contact
        ).then(function (response) {
          vm.submitting = false
          vm.$store.state.contactFormSubmitted = true
        }).catch(function (error) {
          console.log(error)
        })
      }
    }
  }
}
</script>

<style lang="scss">

  #contact-form {
    > * {
      @include responsive-spacing(margin-top, layout, y, .25);
      @include responsive-spacing(margin-bottom, layout, y, .25);
    }
    input, textarea {
      transition: $transition-duration;
      font-size: 1.25em;
      padding: $spacing / 2;
      border-radius: $default-border-radius;
      width: 100%;
      box-shadow: 0 0 0 1pt color(grey);
      -webkit-appearance: none; // box shadow doesn't show up on mobile
      color: color(grey);
      border: none;
      box-sizing: border-box;
      overflow:visible;

      &::placeholder {
        color: color(grey);
      }
      &:focus {
        outline: 0;
        box-shadow: 0 0 0 2pt color(primary, bright);
        color: color(primary, bright);
      }
      &.error {
        background-color: lighten(color(red), 35%);
        box-shadow: 0 0 0 2pt color(red);
        color: color(red);
        &::placeholder {
          color: color(red);
        }
      }
    }
  }

</style>
