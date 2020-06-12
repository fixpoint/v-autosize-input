import Vue from 'vue';
import VueAutosizeInputDirective from 'vue-autosize-input-directive';

Vue.use(VueAutosizeInputDirective);

import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
