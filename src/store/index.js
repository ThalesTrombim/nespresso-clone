import { createStore } from "vuex";
import ShopCart from "./modules/ShopCart";

const store = createStore({
  modules: {
    cart: ShopCart,
  },
});

export default store;
