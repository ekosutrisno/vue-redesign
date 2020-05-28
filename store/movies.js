const state = () => ({
  users: [],
  movies: [],
  movie: {}
});

const mutations = {
  setUsers: (state, data) => (state.users = data),
  setMovies: (state, movies) => (state.movies = movies),
  setMovie: (state, movie) => (state.movie = movie),
};

const actions = {
  async getAllUsers({
    commit
  }) {
    const response = await this.$axios.$get('https://reqres.in/api/users?page=1');
    commit('setUsers', response.data)
  },
  async loadAllMovies({
    commit
  }, judul = 'x-men') {
    const key = '77a8828f';
    const response = await this.$axios.$get(`http://omdbapi.com?apikey=${key}&s=${judul}`);
    commit('setMovies', response.Search)
  },
  async getMovieDetail({
    commit
  }, imdbID) {
    const key = '77a8828f';
    const response = await this.$axios.$get(`http://omdbapi.com?apikey=${key}&i=${imdbID}`);
    commit('setMovie', response)
  }
};

export default {
  state,
  mutations,
  actions
}
