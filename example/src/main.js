import Vue from 'vue';
import VAutosizeInput from 'v-autosize-input';

Vue.use(VAutosizeInput);

import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
