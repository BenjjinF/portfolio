import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner, faChevronLeft, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithubSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSpinner, faChevronLeft, faEnvelope)
library.add(faLinkedin, faGithubSquare, faInstagram)

Vue.component('font-awesome-icon', FontAwesomeIcon)
