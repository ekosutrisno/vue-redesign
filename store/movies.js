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
  }, judul) {
    let dJudul = judul || 'x-men'
    const response = await this.$axios.$get(`http://omdbapi.com?apikey=77a8828f&s=${dJudul}`);
    commit('setMovies', response.Search)
  },
  async searchMovies({
    commit
  }, judul) {
    const response = await this.$axios.$get(`http://omdbapi.com?apikey=77a8828f&s=${judul}`);
    const movieDefault = [{
      "Title": "X-Men: Days of Future Past",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "23 May 2014",
      "Runtime": "132 min",
      "Genre": "Action, Adventure, Sci-Fi, Thriller",
      "Director": "Bryan Singer",
      "Writer": "Simon Kinberg (screenplay by), Jane Goldman (story by), Simon Kinberg (story by), Matthew Vaughn (story by)",
      "Actors": "Hugh Jackman, James McAvoy, Michael Fassbender, Jennifer Lawrence",
      "Plot": "The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.",
      "Language": "English, Vietnamese, French",
      "Country": "USA, UK, Canada",
      "Awards": "Nominated for 1 Oscar. Another 16 wins & 47 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZGIzNWYzN2YtMjcwYS00YjQ3LWI2NjMtOTNiYTUyYjE2MGNkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      "Ratings": [{
        "Source": "Internet Movie Database",
        "Value": "8.0/10"
      }, {
        "Source": "Rotten Tomatoes",
        "Value": "90%"
      }, {
        "Source": "Metacritic",
        "Value": "75/100"
      }],
      "Metascore": "75",
      "imdbRating": "8.0",
      "imdbVotes": "643,180",
      "imdbID": "tt1877832",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "N/A",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    }]
    if (response.Response == 'False') {
      commit('setMovies', movieDefault)
    } else {
      commit('setMovies', response.Search)
    }
  },
  async getMovieDetail({
    commit
  }, imdbID) {
    const response = await this.$axios.$get(`http://omdbapi.com?apikey=77a8828f&i=${imdbID}`);
    commit('setMovie', response)
  }
};

export default {
  state,
  mutations,
  actions
}
