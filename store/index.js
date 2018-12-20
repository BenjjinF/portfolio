import Vuex from 'vuex'

async function getProjectData(app) {
  const { data } = await app.$storyapi.get(
    'cdn/stories', {
      version: process.env.NODE_ENV == 'production' ? 'published' : 'draft',
      starts_with: 'projects/',
      is_startpage: 0
    }
  )
  return data.stories.map(story => {
    return {
      blok: story.content,
      id: story.slug,
      title: story.content.title,
      previewText: story.content.previewText,
      description: story.content.description,
      features: story.content.features,
      technologies: story.content.technologies,
      url: story.content.url,
      desktopImage: story.content.desktop_image,
      mobileImage:story.content.mobile_image
    }
  })
}

const createStore = () => {
  return new Vuex.Store({
    state: {
      scroll: 0,
      windowHeight: 0,
      loading: false,
      fromInDomain: false,
      contactFormSubmitted: false,
      projectData: null
    },
    mutations: {
      setProjectData(state, data) {
        state.projectData = data
      }
    },
    actions: {
      async nuxtServerInit ({ commit }, { app }) {
        const projectData = await getProjectData(app)
        commit('setProjectData', projectData)
      }
    }
  })
}

export default createStore
