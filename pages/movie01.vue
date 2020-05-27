<template>
  <div class="p-2">
    <div class="container p-4 mx-auto flex">
      <!-- awal sidebar -->
      <div class="h-full p-8 flex-none flex flex-col w-70 bg-mov-bg-gray rounded">
        <NLink
          to="/"
          class="w-full"
        >
          <div class="flex w-full items-center justify-between">
            <div class="flex items-center">
              <div class="w-8 h-8 rounded-full overflow-hidden">
                <img
                  class="object-cover h-full w-full"
                  src="https://images.unsplash.com/photo-1511551203524-9a24350a5771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  alt="avatar"
                >
              </div>
              <div class="ml-4">
                <h1 class="text-mov-g-100 font-bold">Katty Smith</h1>
                <h1 class="text-mov-green-01 font-bold text-sm -mt-1">Patient</h1>
              </div>
            </div>
            <div class="text-mov-green-01"><i class="fa fa-angle-down"></i></div>
          </div>
        </NLink>

        <div class="flex flex-col justify-between items-start mt-10 pb-4 border-b border-gray-700">
          <h1 class="font-extrabold mb-5 text-xs text-gray-600 uppercase">Patient</h1>
          <NLink
            to="/"
            class="w-full mb-4"
          >
            <button class="font-semibold group focus:outline-none">
              <span class="text-gray-600 mr-2 group-focus:text-mov-green-01 group-hover:text-mov-green-01 transition-colors duration-200"><i class="fa fa-fw fa-home"></i></span>
              <span class="text-mov-g-100 group-focus:text-mov-green-01 group-hover:text-mov-green-01 transition-colors duration-200">Dashboard</span>
            </button>
          </NLink>
          <NLink
            to="/"
            class="w-full mb-4"
          >
            <button class="font-semibold group focus:outline-none">
              <span class="text-gray-600 mr-2 group-focus:text-mov-green-01 group-hover:text-mov-green-01 transition-colors duration-200"><i class="fa fa-fw fa-id-card-alt"></i></span>
              <span class="text-mov-g-100 group-focus:text-mov-green-01 group-hover:text-mov-green-01 transition-colors duration-200">Enquiries</span>
            </button>
          </NLink>
          <NLink
            to="/"
            class="w-full mb-4"
          >
            <button class="font-semibold group focus:outline-none">
              <span class="text-gray-600 mr-2 group-focus:text-mov-green-01 group-hover:text-mov-green-01 transition-colors duration-200"><i class="fa fa-fw fa-user-graduate"></i></span>
              <span class="text-mov-g-100 group-focus:text-mov-green-01 group-hover:text-mov-green-01 transition-colors duration-200">Profiles</span>
            </button>
          </NLink>
          <NLink
            to="/"
            class="w-full mb-4"
          >
            <button class="font-semibold group focus:outline-none">
              <span class="text-gray-600 mr-2 group-focus:text-mov-green-01 group-hover:text-mov-green-01 transition-colors duration-200"><i class="fa fa-fw fa-credit-card"></i></span>
              <span class="text-mov-g-100 group-focus:text-mov-green-01 group-hover:text-mov-green-01 transition-colors duration-200">Payments</span>
            </button>
          </NLink>
        </div>

        <div class="flex flex-col justify-between items-start mt-6">
          <h1 class="font-extrabold mb-5 text-xs text-gray-600 uppercase">Patient</h1>
          <NLink
            to="/"
            class="w-full mb-4"
          >
            <button class="font-semibold group focus:outline-none">
              <span class="text-gray-600 mr-2 group-focus:text-mov-green-01 group-hover:text-mov-green-01 transition-colors duration-200"><i class="fa fa-fw fa-list"></i></span>
              <span class="text-mov-g-100 group-focus:text-mov-green-01 group-hover:text-mov-green-01 transition-colors duration-200">Invitations</span>
            </button>
          </NLink>
          <NLink
            to="/"
            class="w-full mb-4"
          >
            <button class="font-semibold group focus:outline-none">
              <span class="text-gray-600 mr-2 group-focus:text-mov-green-01 group-hover:text-mov-green-01 transition-colors duration-200"><i class="fa fa-fw fa-download"></i></span>
              <span class="text-mov-g-100 group-focus:text-mov-green-01 group-hover:text-mov-green-01 transition-colors duration-200">Data Cloud</span>
            </button>
          </NLink>

          <div class="w-full h-full p-5 bg-mov-bg-dark rounded-lg">
            <h1 class="font-bold text-center text-mov-g-100 mb-2">Need out help?</h1>
            <button class="w-full py-2 px-3 bg-mov-green-01 font-bold text-mov-g-400 rounded-full hover:opacity-75 focus:outline-none">Contact Us</button>
          </div>
        </div>
      </div>
      <!-- ending sidebar -->

      <!-- awal content -->
      <div class="h-full p-8 flex-1 rounded text-mov-g-100">
        <div class="w-full flex items-center justify-between">
          <div>wkwkw</div>
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-10 mr-10">
              <div class="text-gray-600"><i class="fa fa-calendar"></i></div>
              <div class="text-mov-g-100 relative">
                <i class="fa fa-bell"></i>
                <div class="absolute top-0 right-0 bg-red-600 rounded-full w-4 h-4 text-white text-xs text-center -mt-1 -mr-2">2</div>
              </div>
            </div>
            <NLink
              to="/"
              class="w-full"
            >
              <div class="flex w-full items-center justify-between">
                <div class="flex items-center">
                  <div class="mr-4">
                    <h1 class="text-mov-g-100 font-bold">Katty Smith</h1>
                  </div>
                  <div class="w-8 h-8 rounded-full overflow-hidden">
                    <img
                      class="object-cover h-full w-full"
                      src="https://images.unsplash.com/photo-1511551203524-9a24350a5771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                      alt="avatar"
                    >
                  </div>
                </div>
                <div class="text-mov-green-01 ml-4"><i class="fa fa-angle-down"></i></div>
              </div>
            </NLink>

          </div>
        </div>
      </div>
      <!-- ending content  -->
    </div>
  </div>
</template>

<script>
export default {
  layout: "movie"
};
</script>

<style scoped>
.h-custom-01 {
  height: 93vh;
}
.h-custom-01 {
  height: 90vh;
}
</style>
