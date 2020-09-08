<template>
  <div>
    <div class="mt-4 overflow-hidden w-slide">
      <vue-glide
        v-if="movies"
        :perView="3"
        :gap="0"
      >
        <vue-glide-slide
          v-for="(movie,idx) in movies"
          :key="idx"
          class="mb-3 p-4"
        >
          <div
            @click="getDetailData(movie.imdbID)"
            class="h-card cursor-pointer w-64 bg-mov-bg-gray rounded-lg shadow-xl overflow-hidden transform transition-transform duration-100 hover:scale-105"
          >
            <div class="img-poster w-full">
              <img
                class="object-cover w-full h-full"
                :src="movie.Poster=='N/A' ? 'https://images.unsplash.com/photo-1512113569142-8a60fccc7caa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' :movie.Poster"
                alt="poster"
              >
            </div>
            <div class="flex flex-col items-start p-3">
              <h1 class="text-xs text-mov-g-100 uppercase">{{movie.Title}}</h1>
            </div>
            <span></span>
          </div>
        </vue-glide-slide>
      </vue-glide>
    </div>

    <div
      v-if="movie.Title != ''"
      class="text-xs"
    >
      &bull; {{movie.Title}} &bull; {{movie.Director}} &bull; {{movie.Gendre}} &bull;{{movie.Released}} &bull; {{movie.Runtime}}&bull; {{movie.Year}}
      &bull; {{movie.imdbRating}} &bull; {{movie.Rated}} &bull;
      <span
        v-for="(rating,i) in movie.Ratings"
        :key="i"
      >{{rating.Source}}: {{rating.Value}}</span>
    </div>
    <div class="mt-3">
      <button class="w-auto px-2 bg-orange-400 font-bold text-xs text-mov-g-400 rounded opacity-75 focus:outline-none">&bull; Details berisi beberapa properti film seperti judul, actor dan tahun release.</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Glide, GlideSlide } from "vue-glide-js";
export default {
  layout: "movie",
  components: {
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide
  },
  data() {
    return {
      judul: ""
    };
  },
  computed: {
    ...mapState({
      movies: state => state.movies.movies,
      movie: state => state.movies.movie
    })
  },
  async fetch({ store }) {
    await store.dispatch("movies/loadAllMovies");
  },
  methods: {
    getDetailData(imdbID) {
      this.$store.dispatch("movies/getMovieDetail", imdbID);
    }
  }
};
</script>

<style scoped>
.h-custom-01 {
  height: 93vh;
}
.h-card {
  height: 23rem;
}
.img-poster {
  height: 20rem;
}
.w-slide {
  width: 880px;
}
</style>
