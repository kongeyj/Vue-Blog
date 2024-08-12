import axios from "axios";
const state = {
  blogs: [],
  tags: [],
};
const getters = {
  allBlogs: (state) => state.blogs,
  allTags: (state) => state.tags,
  getBlogById: (state) => (id) => state.blogs.find((blog) => blog.index === id),
  getBlogByTag: (state) => (ss) => {
    return state.blogs.filter((blog) => blog.tags.includes(ss));
  },
};
const actions = {
  async fetchBlogs({ commit }) {
    try {
      const response = await axios.get("/data/blogs.json");
      commit("setBlogs", response.data);
    } catch (error) {
      console.error("Error fetching JSON data:", error);
    }
  },
  async fetchTags({ commit }) {
    try {
      const response = await axios.get("/data/blogs.json");
      var data = response.data;
      const tags = [...new Set(data.map((blog) => blog.tags).flat())];
      commit("setTags", tags);
    } catch (error) {
      console.error("Error fetching JSON data:", error);
    }
  },
};
const mutations = {
  setBlogs: (state, data) => (state.blogs = data),
  setTags: (state, data) => (state.tags = data),
};
export default {
  state,
  getters,
  actions,
  mutations,
};
