import Vue from "vue";
import Vuex from "vuex";
import ShopCart from "./modules/ShopCart";
import loginState from "./modules/login";
import navbarState from "./modules/navbar";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    cart: ShopCart,
    login: loginState,
    navbar: navbarState,
  },
});

export default store;
