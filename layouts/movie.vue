<template>
  <div class="bg-mov-bg-dark min-h-screen h-screen font-sans">
    <div class="p-2">
      <div class="container p-4 mx-auto flex">
        <MovieSidebar />
        <!-- awal content -->
        <div class="h-full p-8 flex-1 rounded text-mov-g-100">
          <MovieHeader />
          <transition name="slide-fade" mode="out-in">
            <nuxt />
          </transition>
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
    MovieHeader,
  },
};
</script>
<style lang="css" scoped>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
