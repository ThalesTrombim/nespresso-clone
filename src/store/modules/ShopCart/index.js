import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
  state() {
    return {
      shopcartIsOpen: false,
    };
  },
  actions,
  getters,
  mutations,
};
