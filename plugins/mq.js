import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: { // default breakpoints - customize this
    sm: 484,
    md: 576,
    lg: 768,
    xl: 992
  },
  defaultBreakpoint: 'sm' // customize this for SSR
})