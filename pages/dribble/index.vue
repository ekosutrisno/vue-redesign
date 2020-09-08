<template>
  <div class="wrapper">
    <div class="border-b border-gray-200">
      <div class="flex items-center justify-between mx-8">
        <div class="flex items-center">
          <NLink to="/">
            <img
              class="w-20 mr-4"
              src="https://cdn.worldvectorlogo.com/logos/dribbble-4.svg"
              alt="logo-app"
            >
          </NLink>

          <div
            @mouseover="initShow = !initShow"
            class="mr-4 h-full py-6 "
          >
            <a class="font-normal cursor-pointer text-gray-600 hover:text-gray-900 inline-flex items-center">
              <span>Explore </span><i class="fa fa-fw fa-angle-down"></i>
            </a>
          </div>
          <div
            @mouseover="initShow = !initShow"
            class="mr-4 h-full py-6 "
          >
            <a class="font-normal cursor-pointer text-gray-600 hover:text-gray-900 inline-flex items-center">
              <span>For Designer </span><i class="fa fa-fw fa-angle-down"></i>
            </a>
          </div>
          <div class="h-4 border-l mr-6 border-gray-400"></div>
          <div
            @mouseover="initShow = !initShow"
            class="mr-4 h-full py-6"
          >
            <a class="cursor-pointer font-normal text-gray-600 hover:text-gray-900 inline-flex items-center">
              <span>Hiring Designer </span><i class="fa fa-fw fa-angle-down"></i>
            </a>
          </div>
        </div>
        <div class="flex items-center">
          <div class="mr-5 relative">
            <input
              type="text"
              class="bg-gray-200 placeholder-gray-600 text-gray-600 w-40 rounded-lg border border-transparent focus:border-pink-400 hover:border-pink-400 hover:bg-white inp transition-shadow duration-75 focus:outline-none focus:bg-white"
              placeholder="Search"
            >
            <span class="absolute top-0 left-0 ml-3 mt-2 text-gray-500">
              <i class="fa fa-search"></i>
            </span>
          </div>
          <div class="mr-5 relative">
            <span class="text-gray-500">
              <i class="fa fa-briefcase fa-lg"></i>
            </span>
            <span class="absolute bottom-0 right-0 -mr-1 -mb-1 text-xs text-green-500">
              <i class="fa fa-check-circle"></i>
            </span>
          </div>
          <div class="w-8 h-8 rounded-full overflow-hidden mr-5">
            <img
              class="object-cover"
              src="https://images.unsplash.com/photo-1557555187-23d685287bc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="profile"
            >
          </div>
          <button class="py-2 px-4 relative focus:outline-none rounded-lg bg-pink-600 text-white hover:bg-pink-400">
            Upload
            <span class="absolute w-3 h-3 -mr-1 bg-pink-600 border-2 border-white rounded-full top-0 right-0"></span>
          </button>
        </div>
      </div>
    </div>

    <div
      v-show="initShow"
      @mouseleave="initShow = !initShow"
      class="border-b border-gray-200 shadow-xl h-70 px-8"
    >
      <div class="flex items-center justify-start">
        <div class="mr-10 p-4">
          <img
            src="https://cdn.dribbble.com/assets/updated_navigation/job-board-662c703dbd11dddab7ae4d06c0348f64cfc7dca3a8c06633bec21c2700536a56.png"
            alt="img01"
          >
        </div>
        <div class="mr-10 p-4">
          <img
            src="https://cdn.dribbble.com/assets/updated_navigation/dribbble-projects-32a25d5c8142964474bcbf0c019679ea3e962c529669096c906c6354ecffb679.png"
            alt="img02"
          >
        </div>
        <div class="mr-10 p-4">
          <img
            src="https://cdn.dribbble.com/assets/updated_navigation/dribbble-pro-a3cf5682d7510107532d97d5cb1a7c8b103bb1c8ba19ead129e93b274b624fe8.png"
            alt="img03"
          >
        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  layout: "dribble",
  data() {
    return {
      initShow: false
    };
  },
  methods: {
    openMegaMenu() {
      alert("Hover aktif");
    }
  }
};
</script>

<style scoped>
.inp {
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  padding-left: 2.5rem;
  padding-right: 0.75rem;
}
.inp:hover,
.inp:focus {
  box-shadow: 0 0 0 4px rgba(224, 73, 131, 0.2);
}
</style>
