import Vue from "vue";
import App from "./App.vue";

import SquareButton from "./components/ui/SquareButton.vue";
import MiniModal from "./components/ui/MiniModal.vue";

import store from "./store";

Vue.config.productionTip = false;

Vue.component("square-button", SquareButton);
Vue.component("mini-modal", MiniModal);

new Vue({
  store: store,
  render: (h) => h(App),
}).$mount("#app");
