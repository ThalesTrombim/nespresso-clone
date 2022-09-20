import Vue from "vue";
import App from "./App.vue";

import SquareButton from "./components/ui/SquareButton.vue";

Vue.config.productionTip = false;

Vue.component("square-button", SquareButton);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
