<template>
  <div class="bg-eko min-h-screen p-5 font-sans">
    <div class="bg-white flex h-c1 mx-auto py-5 container rounded shadow-md">
      <div class="w-64 flex-none sticky">
        <div class="p-8">
          <div>
            <h1 class="font-bold text-2xl text-coa-purle mb-4">Workly</h1>
            <button class="py-2 px-6 w-full font-semibold text-indigo-500 bg-coa-gray-100 rounded-r-full rounded-bl-full focus:outline-none"><i class="fa fa-fw fa-plus"></i> New Task</button>
          </div>
        </div>
        <div class="flex flex-col">
          <nuxt-link
            to="/design01"
            class="text-coa-gray-300 w-full font-medium py-3 pl-8 text-lg border-l-4 border-transparent focus:border-coa-purle focus:text-indigo-700 focus:bg-gray-200"
          >
            <i class="fa fa-fw fa-store"></i> <span class="ml-3">Home</span>
          </nuxt-link>
          <nuxt-link
            to="/design01"
            class="text-coa-gray-300 w-full font-medium py-3 pl-8 text-lg border-l-4 border-transparent focus:border-coa-purle focus:text-indigo-700 focus:bg-gray-200"
          >
            <i class="fa fa-fw fa-receipt"></i> <span class="ml-3">My Task</span>
          </nuxt-link>
          <nuxt-link
            to="/design01"
            class="text-coa-gray-300 w-full font-medium py-3 pl-8 text-lg border-l-4 border-transparent focus:border-coa-purle focus:text-indigo-700 focus:bg-gray-200"
          >
            <i class="fa fa-fw fa-vote-yea"></i> <span class="ml-3">Task Catalog</span>
          </nuxt-link>
          <nuxt-link
            to="/design01"
            class="text-coa-gray-300 w-full font-medium py-3 pl-8 text-lg border-l-4 border-transparent focus:border-coa-purle focus:text-indigo-700 focus:bg-gray-200"
          >
            <i class="fa fa-fw fa-users"></i> <span class="ml-3">Community</span>
          </nuxt-link>
        </div>
      </div>
      <div class="flex-1 bg-coa-gray-100">ssasas</div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo";
export default {
  components: { Logo }
};
</script>

<style scoped>
.h-c1 {
  height: 93vh;
}
</style>
