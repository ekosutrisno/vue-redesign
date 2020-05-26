<template>
  <div class="bg-cob-covid-gray rounded-lg shadow w-full p-4 h-auto">
    <div class="flex items-center text-cob-covid-black mb-1 ml-2">
      <span class="text-lg mr-1">Info Covid</span>
      <span
        v-tooltip="{ content: 'Cakupan wilayah', classes: 'text-xs' }"
        class="px-2 py-1 text-xs text-cob-covid-gray bg-indigo-600 rounded-full mr-1"
      > <i class="fa fa-fw fa-globe-asia"></i> Global</span>
      <span
        v-tooltip="{ content: 'Critical per setiap kasus', classes: 'text-xs' }"
        class="px-2 py-1 text-xs hidden sm:block text-cob-covid-gray bg-red-600 rounded-full mr-1"
      > <i class="fa fa-fw fa-lungs-virus"></i> Critical: {{dataSummary.NewDeaths}}</span>
      <span
        v-tooltip="{ content: 'Pasient yang telah dites', classes: 'text-xs' }"
        class="px-2 py-1 text-xs hidden md:block text-cob-covid-gray bg-cob-covid-green rounded-full"
      > <i class="fa fa-fw fa-stopwatch-20"></i> Tested: {{dataSummary.NewRecovered}}</span>
    </div>
    <div class="text-sm text-gray-600 font-semibold ml-2 mb-4">Updated At {{updated_at}} <span class="text-cob-covid-green"><i class="fa fa-fw fa-check-circle"></i></span></div>

    <div class="flex">
      <div class="w-1/4 p-2">
        <h1 class="text-xs sm:text-sm md:text-lg text-gray-600 mb-1">Total Kasus</h1>
        <div class="text-sm md:text-lg xl:text-3xl text-orange-400 font-bold border-r-4 border-orange-300">{{dataSummary.TotalConfirmed}} <i class="fa fa-fw fa-user-injured"></i> </div>
      </div>
      <div class="w-1/4 p-2">
        <h1 class="text-xs sm:text-sm md:text-lg text-gray-600 mb-1">Aktif Kasus</h1>
        <div class="text-sm md:text-lg xl:text-3xl text-indigo-500 font-bold border-r-4 border-cob-covid-green">{{dataSummary.NewConfirmed}} <i class="fa fa-fw fa-user-injured"></i> </div>
      </div>
      <div class="w-1/4 p-2">
        <h1 class="text-xs sm:text-sm md:text-lg text-gray-600 mb-1">Sembuh</h1>
        <div class="text-sm md:text-lg xl:text-3xl text-cob-covid-green font-bold border-r-4 border-red-500">{{dataSummary.TotalRecovered}} <i class="fa fa-fw fa-user-injured"></i> </div>
      </div>
      <div class="w-1/4 p-2">
        <h1 class="text-xs sm:text-sm md:text-lg text-gray-600 mb-1">Meninggal</h1>
        <div class="text-sm md:text-lg xl:text-3xl text-red-600 font-bold">{{dataSummary.TotalDeaths}} <i class="fa fa-fw fa-user-injured"></i> </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  name: "CovidSummary",
  data() {
    return {
      updated_at: ""
    };
  },
  created() {
    this.updated_at = new Date().toDateString();
    this.setBySummary();
  },
  computed: {
    dataSummary() {
      return this.$store.state.covid.summary;
    }
  },
  methods: {
    ...mapActions({
      setBySummary: "covid/setBySummary"
    })
  }
};
</script>

<style scoped>
</style>
