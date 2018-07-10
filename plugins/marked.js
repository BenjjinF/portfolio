import Vue from 'vue'
import marked from 'marked'

Vue.mixin({
  methods: {
    marked: input => {
      return marked(input)
    },
    resizeImage: (image, option) => {
      var imageService = '//img2.storyblok.com/'
      var path = image.replace('//a.storyblok.com', '')
      return imageService + option + path
    }
  }
})
