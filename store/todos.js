const state = () => ({
  users: []
});

const mutations = {
  setUsers: (state, data) => (state.users = data)
};

const actions = {
  async getAllUsers({
    commit
  }) {
    const response = await this.$axios.$get('https://reqres.in/api/users?page=1');
    commit('setUsers', response.data)
  }
};

export default {
  state,
  mutations,
  actions
}
