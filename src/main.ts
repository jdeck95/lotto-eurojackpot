import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import { Quasar, Notify } from 'quasar';
import langDe from 'quasar/lang/de';

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/material-icons-round/material-icons-round.css';

// Import Quasar css
import 'quasar/src/css/index.sass';

const app = createApp(App);

app.use(Quasar, {
  lang: langDe,
  plugins: { Notify },
});

app.use(createPinia());
app.use(router);

app.mount('#app');
