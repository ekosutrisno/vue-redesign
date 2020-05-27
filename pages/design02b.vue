<template>
  <div>
    <CovidSummary />
    <div class="mt-5">
      <div class="w-full p-3 bg-cob-covid-gray shadow mr-2 h-72 overflow-y-auto">
        <div class="text-cob-covid-black mb-1">
          <span class="text-xl">Info Covid</span>
          <span class="px-2 py-1 text-xs text-cob-covid-gray bg-indigo-600 rounded-full"> <i class="fa fa-fw fa-stopwatch-20"></i>Country</span>
        </div>
        <div v-if="allRegions ==null">
          <h1 class="text-gray-500 text-lg text-center">Loading...</h1>
        </div>
        <div
          v-else
          class="space-y-2"
        >
          <div
            v-for="(reg,idx) in allRegions"
            :key="idx"
            class="w-full flex items-center justify-between py-2 px-4 border-2 border-indigo-300 rounded-md shadow-custom bg-indigo-100"
          >
            <div class="w-48 flex-none">
              <span class="text-sm text-indigo-400 font-bold"><i class="fa fa-fw fa-globe-asia"></i> {{reg.Country}} </span>
              <div class="text-xs text-gray-600 font-semibold">Updated {{updated_at}} <span class="text-cob-covid-green"><i class="fa fa-fw fa-check-circle"></i></span></div>

            </div>
            <div class="flex flex-1 items-center">
              <div class="w-full xl:w-1/5">
                <h1 class="text-sm text-gray-600">Total Kasus</h1>
                <span class="text-sm xl:text-lg text-indigo-400 font-bold">{{reg.TotalConfirmed}} <i class="fa fa-fw fa-user-injured"></i> </span>
              </div>
              <div class="w-full xl:w-1/5">
                <h1 class="text-sm text-gray-600">Kasus Aktif</h1>
                <span class="text-sm xl:text-lg text-indigo-400 font-bold">{{reg.NewConfirmed}} <i class="fa fa-fw fa-user-injured"></i> </span>
              </div>
              <div class="hidden w-full md:block xl:w-1/5">
                <h1 class="text-sm text-gray-600">Kritikal</h1>
                <span class="text-sm xl:text-lg text-indigo-400 font-bold">{{reg.NewDeaths}} <i class="fa fa-fw fa-user-injured"></i> </span>
              </div>
              <div class="hidden xl:block w-1/5">
                <h1 class="text-sm text-gray-600">Sembuh</h1>
                <span class="text-lg text-indigo-400 font-bold">{{reg.TotalRecovered}} <i class="fa fa-fw fa-user-injured"></i> </span>
              </div>
              <div class="hidden xl:block w-1/5">
                <h1 class="text-sm text-gray-600">Meninggal</h1>
                <span class="text-lg text-indigo-400 font-bold">{{reg.TotalDeaths}} <i class="fa fa-fw fa-user-injured"></i> </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h1 class="text-gray-500 text-xs mt-3">&bull; Tetap jaga kesehatan Anda dimanapun berada, Selamat Hari Raya Idul Fitri 1441 H.</h1>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CovidSummary from "~/components/covid/CovidSummary";

export default {
  layout: "covid",
  components: { CovidSummary },
  data() {
    return {
      updated_at: ""
    };
  },
  mounted() {
    this.updated_at = new Date().toDateString();
  },
  computed: {
    ...mapState({
      allRegions: state => state.covid.regions,
      dataSummary: state => state.covid.summary
    })
  }
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
