<template>

  <div class="w-full flex items-center justify-between">
    <div>
      <form
        @submit.prevent="searchMovie()"
        class="flex items-center"
      >
        <div class="text-mov-green-01"><i class="fa fa-fw fa-search"></i></div>
        <input
          v-model="judul"
          type="text"
          placeholder="Search..."
          class="bg-transparent py-1 px-3 placeholder-gray-600 text-mov-g-100 font-bold focus:outline-none text-sm"
        >
      </form>
    </div>
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-10 mr-10">
        <div class="text-gray-600"><i class="fa fa-calendar"></i></div>
        <div class="text-mov-g-100 relative">
          <i class="fa fa-bell"></i>
          <div class="absolute top-0 right-0 bg-red-600 rounded-full w-4 h-4 text-white text-xs text-center -mt-1 -mr-2">2</div>
        </div>
      </div>
      <NLink
        to="/"
        class="w-full"
      >
        <div class="flex w-full items-center justify-between">
          <div class="flex items-center">
            <div class="mr-4">
              <h1 class="text-mov-g-100 font-bold">Katty Smith</h1>
            </div>
            <div class="w-8 h-8 rounded-full overflow-hidden">
              <img
                class="object-cover h-full w-full"
                src="https://images.unsplash.com/photo-1511551203524-9a24350a5771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="avatar"
              >
            </div>
          </div>
          <div class="text-mov-green-01 ml-4"><i class="fa fa-angle-down"></i></div>
        </div>
      </NLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieHeader",
  data() {
    return {
      judul: ""
    };
  },
  methods: {
    async searchMovie() {
      if (this.judul == "") return;
      await this.$store.dispatch("movies/searchMovies", this.judul);
      this.judul = "";
    }
  }
};
</script>

<style scoped>
</style>
