import Vue from 'vue';
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';

const credentials = require('../credentials.js')

Raven
    .config(credentials.raven.config)
    .addPlugin(RavenVue, Vue)
    .install();
