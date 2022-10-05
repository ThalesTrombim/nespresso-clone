import { SET_SHOPCART } from "./mutationsTypes";

export default {
  [SET_SHOPCART](state) {
    console.log("teste");
    state.shopcartIsOpen = !state.shopcartIsOpen;
  },
};
