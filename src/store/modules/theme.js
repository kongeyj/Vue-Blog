const state = {
  isTheme: JSON.parse(localStorage.getItem("isTheme")) ?? true,
};
const getters = {
  theme: (state) => state.isTheme,
};

const actions = {
  toggleTheme({ commit }) {
    commit("setTheme");
  },
};
const mutations = {
  setTheme(state) {
    state.isTheme = !state.isTheme;
    localStorage.setItem("isTheme", JSON.stringify(state.isTheme));
    if (state.isTheme == true) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
