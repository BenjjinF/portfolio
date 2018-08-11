import Vue from 'vue';
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';

Raven
    .config('https://19d4996089d3480e962ca7adfa8f5c20@sentry.io/1260682')
    .addPlugin(RavenVue, Vue)
    .install();
