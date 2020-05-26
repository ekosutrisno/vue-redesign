<template>
  <div>
    <CovidSummary />
    <div class="flex mt-5">
      <div class="w-full sm:w-2/3 p-3 bg-cob-covid-gray rounded-lg shadow mr-2">
        <div class="w-full">
          <div class="text-cob-covid-black mb-1">
            <span class="text-xl">Info Covid</span>
            <span class="px-2 py-1 text-xs text-cob-covid-gray bg-cob-covid-green rounded-full"> <i class="fa fa-fw fa-globe-asia"></i> Indonesia</span>
            <span class="px-2 py-1 text-xs text-cob-covid-gray bg-indigo-600 rounded-full"> <i class="fa fa-fw fa-stopwatch-20"></i> Tested: {{dataCountry.NewRecovered}}</span>
          </div>
          <div class="text-sm text-gray-600 font-semibold mb-4">Updated At {{updated_at}} <span class="text-cob-covid-green"><i class="fa fa-fw fa-check-circle"></i></span></div>
          <div class="flex">
            <div class="flex flex-col w-full mr-3">
              <div class="w-full p-2 pl-5 mb-4 border-2 border-orange-300 rounded-md shadow-custom bg-orange-100">
                <h1 class="text-lg text-gray-600 mb-1">Total Kasus</h1>
                <div class="text-3xl text-orange-400 font-bold">{{dataCountry.TotalConfirmed}} <i class="fa fa-fw fa-user-injured"></i> </div>
              </div>
              <div class="w-full p-2 pl-5 mb-4 border-2 border-indigo-300 rounded-md shadow-custom bg-indigo-100">
                <h1 class="text-lg text-gray-600 mb-1">Aktif Kasus</h1>
                <div class="text-3xl text-indigo-500 font-bold">{{dataCountry.NewConfirmed}} <i class="fa fa-fw fa-user-injured"></i> </div>
              </div>
            </div>
            <div class="flex flex-col w-full">
              <div class="w-full p-2 pl-5 mb-4 border-2 border-green-300 rounded-md shadow-custom bg-green-100">
                <h1 class="text-lg text-gray-600 mb-1">Pasien Sembuh</h1>
                <div class="text-3xl text-cob-covid-green font-bold">{{dataCountry.TotalRecovered}} <i class="fa fa-fw fa-user-injured"></i> </div>
              </div>
              <div class="w-full p-2 pl-5 mb-4 border-2 border-red-300 rounded-md shadow-custom bg-red-100">
                <h1 class="text-lg text-gray-600 mb-1">Pasien Meninggal</h1>
                <div class="text-3xl text-red-600 font-bold">{{dataCountry.TotalDeaths}} <i class="fa fa-fw fa-user-injured"></i> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/3 px-2 -mr-2 hidden sm:block">
        <div class="w-full bg-cob-covid-gray rounded-lg shadow overflow-hidden">
          <img
            class="object-cover"
            src="https://cdn.pixabay.com/photo/2020/03/21/07/48/epidemic-4952933__340.jpg"
            alt="ilustrasi"
          >
        </div>
        <div class="text-center mt-3">
          <div class="text-gray-400 mb-2">
            <i class="fas fa-microscope fa-5x"></i>
          </div>
          <a
            href="#."
            class="text-gray-500 text-sm hover:no-underline"
          >&copy; Eko Sutrisno {{new Date().getFullYear()}}</a>
        </div>
      </div>
    </div>
    <h1 class="text-gray-500 text-sm mt-3">&bull; Tetap jaga kesehatan Anda dimanapun berada, Selamat Hari Raya Idul Fitri 1441 H.</h1>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CovidSummary from "~/components/covid/CovidSummary";

export default {
  layout: "covid",
  components: { CovidSummary },
  data() {
    return {
      updated_at: ""
    };
  },
  created() {
    this.updated_at = new Date().toDateString();
    this.getInfoDataCovid();
  },
  computed: { ...mapGetters(["dataSummary", "dataCountry"]) },

  methods: {
    ...mapActions(["getInfoDataCovid"])
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
