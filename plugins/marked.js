import Vue from 'vue'
import marked from 'marked'

Vue.mixin({
  methods: {
    marked: function(input) {
      return marked(input)
    }
  }
})
