<template>
  <div
    class="absolute top-0 p-5 h-auto -mt-32 bg-white w-full rounded-tl-none rounded-lg shadow-xl"
  >
    <div class="relative">
      <div
        class="absolute flex items-center justify-between w-36 ml-cs-left p-5 -my-16 -ml-5 bg-orange-300 top-0 left-0 rounded-tl-lg"
      >
        <h1 class="font-semibold">
          <i class="fa fa-fw fa-plane z-30 transform -rotate-45"></i>
          Flight
        </h1>
      </div>
      <div
        class="absolute flex items-center justify-between w-64 p-5 -my-16 ml-cs bg-black opacity-75 top-0 left-0 rounded-tr-lg"
      >
        <h1 class="font-semibold text-white">
          <i class="fa fa-fw fa-building z-30"></i>
          Hotel
        </h1>
        <h1 class="font-semibold text-white">
          <i class="fa fa-fw fa-car z-30"></i>
          Rent a Car
        </h1>
      </div>
    </div>
    <div class="flex flex-col mb-4">
      <div class="flex items-center justify-start space-x-10 mb-3">
        <button class="py-2 px-3 font-semibold focus:outline-none">
          <span>Round Trip</span>
          <i class="fa fa-fw fa-caret-down"></i>
        </button>
        <button class="py-2 px-3 font-semibold focus:outline-none">
          <span>02 Passenger</span>
          <i class="fa fa-fw fa-caret-down"></i>
        </button>
        <button class="py-2 px-3 font-semibold focus:outline-none">
          <span>Bussines Class</span>
          <i class="fa fa-fw fa-caret-down"></i>
        </button>
      </div>
      <div class="flex items-center justify-between space-x-3">
        <div class="flex justify-between items-center">
          <div class="py-4 px-6 border border-gray-400 rounded-lg w-72">
            <span class="block text-sm">FROM</span>
            <span class="block font-bold text-xl">Behance</span>
            <span class="block text-sm">BHN, North America, USA</span>
          </div>
          <div
            class="p-2 w-16 h-16 -ml-4 z-20 flex items-center justify-center border border-gray-400 bg-white rounded-full"
          >
            <i class="fa fa-exchange-alt text-gray-500"></i>
          </div>
          <div class="py-4 px-6 -ml-4 border border-gray-400 rounded-lg w-72">
            <span class="block text-sm">TO</span>
            <span class="block font-bold text-xl">Dribble</span>
            <span class="block text-sm">DRB, Cape Town, South Africa</span>
          </div>
        </div>
        <div class="flex py-4 px-6 border border-gray-400 rounded-lg w-full">
          <div class="w-1/2">
            <span class="block text-sm">DEPARTURE</span>
            <span class="block font-bold text-xl">
              Fri, 22 Mar
              <i class="fa fa-fw fa-calendar"></i>
            </span>
            <span class="block text-sm">
              <span class="mr-6">Prev</span>
              <span>Next</span>
            </span>
          </div>
          <div class="w-1/2">
            <span class="block text-sm">RETURN</span>
            <span class="block font-bold text-xl">
              Mon, 2 Apr
              <i class="fa fa-fw fa-calendar"></i>
            </span>
            <span class="block text-sm">
              <span class="mr-6">Prev</span>
              <span>Next</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="relative">
      <button
        class="absolute bottom-0 right-0 mr-2 -mb-10 tracking-wider py-3 px-8 font-semibold text-white text-sm bg-mov-bg-dark rounded-lg hover:bg-gray-800 focus:outline-none"
      >
        Search Flights
        <i class="fa fa-fw fa-arrow-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardMidlea1"
};
</script>

<style scoped>
.ml-cs {
  margin-left: 7.75rem;
  height: 2.75rem;
}
.ml-cs-left {
  height: 2.75rem;
}
</style>
