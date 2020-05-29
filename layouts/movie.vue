<template>
  <div class="bg-mov-bg-dark min-h-screen h-screen font-sans">
    <div class="p-2">
      <div class="container p-4 mx-auto flex">
        <MovieSidebar />
        <!-- awal content -->
        <div class="h-full p-8 flex-1 rounded text-mov-g-100">
          <MovieHeader />
          <nuxt />
        </div>
        <!-- end content -->
      </div>
    </div>
  </div>
</template>

<script>
import MovieSidebar from "@/components/movie/MovieSidebar";
import MovieHeader from "@/components/movie/MovieHeader";
export default {
  name: "movie",
  components: {
    MovieSidebar,
    MovieHeader
  }
};
</script>
