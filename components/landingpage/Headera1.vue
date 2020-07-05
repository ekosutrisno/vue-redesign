<template>
  <div class="container px-10 py-5 mx-auto flex flex-col md:flex-row items-center justify-between">
    <div class="relative rounded-full w-10 h-10 bg-white shadow opacity-75">
      <h1 class="flex items-center absolute top-0 left-0 mt-2 -ml-2">
        <span class="font-medium">Fly</span>
        <span class="font-bold">Hight</span>
      </h1>
    </div>
    <div class="flex flex-col md:flex-row mb-3 sm:mb-0 items-center justify-between md:space-x-3">
      <Linksa1 v-for="link in links" :key="link.id" :link="link" />
    </div>
    <div class="flex items-center justify-between space-x-3">
      <button
        class="py-2 px-3 font-semibold focus:outline-none border-b-2 border-transparent hover:border-gray-800"
      >Register</button>
      <button
        class="py-2 px-8 font-semibold text-white bg-mov-bg-dark rounded-lg hover:bg-gray-800 focus:outline-none"
      >Sigin</button>
      <button
        class="py-2 px-3 font-semibold focus:outline-none border-b-2 border-transparent hover:border-gray-800"
      >
        <span>EN</span>
        <i class="fa fa-fw fa-caret-down"></i>
      </button>
    </div>
  </div>
</template>

<script>
import Linksa1 from "@/components/landingpage/Linksa1";

export default {
  name: "Headera1",
  components: { Linksa1 },
  data: () => ({
    links: [
      {
        id: 1,
        to: "/landingpage/a1",
        text: "Holiday Package"
      },
      {
        id: 2,
        to: "/landingpage/a1",
        text: "Flight Schedule"
      },
      {
        id: 3,
        to: "/landingpage/a1",
        text: "Account Settings"
      },
      {
        id: 4,
        to: "/landingpage/a1",
        text: "Manage Booking"
      }
    ]
  })
};
</script>

<style>
</style>
