import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      scroll: 0,
      loading: false,
      fromInDomain: false,
      contactFormSubmitted: false
    }
  })
}

export default createStore
