<template>
  <div class="bg-cob-covid-gray-bg0 py-2 h-screen">
    <div class="bg-cob-covid-gray-01 flex h-custom shadow-xs mx-auto container overflow-hidden rounded font-sans">
      <div class="hidden lg:block bg-cob-covid-gray shadow-md p-5 w-70 flex-none">
        <CovidSidebar />
      </div>
      <div class="flex-1 p-6">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import CovidSidebar from "~/components/covid/CovidSidebar";

export default {
  name: "covid",
  components: { CovidSidebar }
};
</script>
<style scoped>
.h-custom {
  height: 95vh;
}
.shadow-custom {
  box-shadow: 0 10px 12px rgba(20, 31, 56, 0.05);
}
</style>
