import { createApp } from 'vue'
import App from './App.vue'

// import * as Sentry from "@sentry/vue";

// Sentry.init({
//     App,
//     dsn: process.env.VUE_APP_SENTRYDSN,
//     tracesSampleRate: 1.0,
//   });

createApp(App).mount('#app')

// App.mixin(Sentry.createTracingMixins({ trackComponents: true }));
// Sentry.attachErrorHandler(App, { logErrors: true });
