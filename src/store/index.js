import Vue from "vue";
import Vuex from "vuex";
import ShopCart from "./modules/ShopCart";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    cart: ShopCart,
  },
});

export default store;
