<template>
  <div class="flex flex-col min-h-screen">
    <div class="w-full jumbotron">
      <div>
        <Headera1 />
      </div>
      <div class="mt-8 container px-10">
        <Middlea1 />
      </div>
    </div>
    <div class="relative flex flex-col justify-end container mx-auto bg-white bottom-jumbotron">
      <CardMidlea1 />
      <div class="p-5 flex items-center justify-between">
        <button
          class="py-2 px-3 font-semibold focus:outline-none border-b-2 border-transparent hover:border-gray-800"
        >Popular destinations</button>
        <button
          class="py-2 px-3 font-semibold focus:outline-none border-b-2 border-transparent hover:border-gray-800"
        >Explore All</button>
      </div>
    </div>
  </div>
</template>

<script>
import Headera1 from "@/components/landingpage/Headera1";
import Middlea1 from "@/components/landingpage/Middlea1";
import CardMidlea1 from "@/components/landingpage/CardMidlea1";

export default {
  components: { Headera1, Middlea1, CardMidlea1 }
};
</script>

<style scoped>
.jumbotron {
  height: 75vh;
  background-image: url(https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=300);
  background-repeat: no-repeat;
  background-size: cover;
}
.bottom-jumbotron {
  height: 25vh;
}
</style>
