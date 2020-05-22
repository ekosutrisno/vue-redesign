<template>
  <div class="bg-white flex min-h-screen mx-auto py-5 container rounded font-sans">
    <div class="w-64 flex-none shadow-lg">
      <div class="p-8">
        <div>
          <h1 class="font-bold text-2xl text-coa-purle mb-4">Workly</h1>
          <button class="py-2 px-6 w-full font-semibold text-indigo-500 bg-coa-gray-100 hover:bg-indigo-400 hover:text-white rounded-r-full rounded-bl-full focus:outline-none">
            <i class="fa fa-plus"></i> New Task
          </button>
        </div>
      </div>
      <div class="flex flex-col">
        <NLink
          to="/"
          class="text-coa-gray-400 w-full font-medium py-3 pl-8 text-lg border-l-4 border-transparent focus:border-coa-purle focus:text-indigo-700 focus:bg-gray-200"
        >
          <span><i class="fa fa-fw fa-store"></i>
          </span><span class="ml-4">Home</span>
        </NLink>
        <NLink
          to="/design01"
          class="text-coa-gray-400 w-full font-medium py-3 pl-8 text-lg border-l-4 border-transparent focus:border-coa-purle focus:text-indigo-700 focus:bg-gray-200"
        >
          <span><i class="fa fa-fw fa-receipt"></i></span>
          <span class="ml-3">My Task</span>
        </NLink>
        <NLink
          to="/design01"
          class="text-coa-gray-400 w-full font-medium py-3 pl-8 text-lg border-l-4 border-transparent focus:border-coa-purle focus:text-indigo-700 focus:bg-gray-200"
        >
          <span><i class="fa fa-fw fa-vote-yea"></i></span>
          <span class="ml-3">Task Catalog</span>
        </NLink>
        <NLink
          to="/design01"
          class="text-coa-gray-400 w-full font-medium py-3 pl-8 text-lg border-l-4 border-transparent focus:border-coa-purle focus:text-indigo-700 focus:bg-gray-200"
        >
          <span><i class="fa fa-fw fa-users"></i></span>
          <span class="ml-3">Community</span>
        </NLink>
      </div>
    </div>
    <div class="flex-1 bg-coa-gray-100">
      <div class="flex items-center justify-end p-4 space-x-3">
        <div class="space-x-2">
          <button class="bg-white text-base text-coa-gray-200 rounded-full py-2 px-3 shadow-md focus:outline-none">
            <i class="fa fa-envelope"></i>
          </button>
          <button class="bg-white text-base text-coa-gray-200 rounded-full py-2 px-3 shadow-md focus:outline-none">
            <i class="fa fa-bell"></i>
          </button>
        </div>
        <div class="border-r-2 border-coa-gray-200 h-8"></div>
        <div class="flex space-x-3 items-center">
          <div class="rounded-full cursor-pointer shadow-md w-8 h-8 overflow-hidden">
            <img
              class="object-cover"
              src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80"
              alt="avatar"
            />
          </div>
          <NLink
            to="/design01"
            class="text-coa-gray-300 font-semibold text-sm"
          >Hast's & Thing's <i class="fa fa-fw fa-angle-down"></i></NLink>
        </div>
      </div>

      <!-- Secsion 1 -->
      <div class="mx-10">
        <h1 class="text-4xl font-semibold text-gray-800 mb-5">
          Hey Tim, Welcome to Workly
        </h1>
        <div class="flex flex-wrap justify-start h-custom overflow-y-auto">
          <div class="card relative flex flex-col items-center bg-white group rounded cursor-pointer mr-4 mb-4 p-3">
            <div class="mt-10 w-20 h-20 shadow-custom rounded-md overflow-hidden">
              <img
                class="object-cover w-full h-full"
                src="https://cdn.pixabay.com/photo/2017/02/27/15/12/rice-2103481_960_720.jpg"
              />
              <img
                class="absolute object-cover rounded-md w-10 h-10 z-10 mt-20 ml-20 top-0 left-0"
                src="https://cdn.pixabay.com/photo/2017/02/27/15/12/rice-2103481_960_720.jpg"
              />
              <div class="absolute flex items-center justify-center rounded-md w-16 h-16 z-20 mt-5 mr-12 top-0 right-0 bg-white shadow-xl">
                <div class="border-dashed flex justify-center items-center border-2 text-green-600 rounded-md border-green-600 z-30 w-12 h-12">
                  <span> <i class="fa fa-plus"></i></span>
                </div>
              </div>
            </div>
            <div class="mt-5 px-5 flex flex-col items-center justify-start h-32">
              <h1 class="text-lg text-coa-gray-300 font-semibold">
                1. Add Your Store
              </h1>
              <p class="my-3 text-xs text-coa-gray-400 text-center">
                Fisrt things first, let get you amazing Shopify store linked to
                your Workly account
              </p>
            </div>
            <button
              @click="alertCard"
              class="py-2 px-6 w-auto text-xs font-semibold text-indigo-500 bg-gray-200 rounded-r-full rounded-bl-full transition-colors ease-in-out duration-200 hover:bg-indigo-600 hover:text-white focus:outline-none"
            >
              <span class="text-green-500"><i class="fa fa-fw fa-check-circle"></i></span>
              Yes, Completed!
            </button>
          </div>
          <div class="card relative flex flex-col items-center bg-white group rounded cursor-pointer mr-4 mb-4 p-3">
            <div class="mt-10 w-20 h-20 shadow-custom rounded-md overflow-hidden">
              <img
                class="object-cover w-full h-full"
                src="https://cdn.pixabay.com/photo/2018/08/26/19/18/yogurt-3633093_960_720.jpg"
              />
              <img
                class="absolute rounded-md w-10 h-10 z-10 mt-20 ml-20 top-0 left-0"
                src="https://cdn.pixabay.com/photo/2018/08/26/19/18/yogurt-3633093_960_720.jpg"
              />
              <div class="absolute flex items-center justify-center rounded-md w-16 h-16 z-20 mt-5 mr-12 top-0 right-0 bg-white shadow-xl">
                <div class="border-dashed flex justify-center items-center border-2 text-green-600 rounded-md border-green-600 z-30 w-12 h-12">
                  <span> <i class="fa fa-plus"></i></span>
                </div>
              </div>
            </div>
            <div class="mt-5 px-5 flex flex-col items-center justify-start h-32">
              <h1 class="text-lg text-coa-gray-300 font-semibold">
                2. Create a Task
              </h1>
              <p class="my-3 text-xs text-coa-gray-400 text-center">
                Need something quick? You can add custom Task or View
                recomendations
              </p>
            </div>
            <button
              @click="alertCard"
              class="py-2 px-6 w-auto text-xs font-semibold text-white bg-indigo-500 rounded-r-full rounded-bl-full transition-colors ease-in-out duration-200 hover:bg-indigo-600 hover:text-white focus:outline-none"
            >
              <i class="fa fa-fw fa-plus"></i> Add your Task
            </button>
          </div>
          <div class="card relative flex flex-col items-center bg-white group rounded cursor-pointer mr-4 mb-4 p-3">
            <div class="mt-10 w-20 h-20 shadow-custom rounded-md overflow-hidden">
              <img
                class="object-cover w-full h-full"
                src="https://images.unsplash.com/photo-1474031317822-f51f48735ddd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
              />
              <img
                class="absolute rounded-md w-10 h-10 z-10 mt-20 ml-20 top-0 left-0"
                src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
              />
              <div class="absolute flex items-center justify-center rounded-md w-16 h-16 z-20 mt-5 mr-12 top-0 right-0 bg-white shadow-xl">
                <div class="border-dashed flex justify-center items-center border-2 text-green-600 rounded-md border-green-600 z-30 w-12 h-12">
                  <span> <i class="fa fa-plus"></i></span>
                </div>
              </div>
            </div>
            <div class="mt-5 px-5 flex flex-col items-center justify-start h-32">
              <h1 class="text-lg text-coa-gray-300 font-semibold">
                3. Subscribe & Save
              </h1>
              <p class="my-3 text-xs text-coa-gray-400 text-center">
                Our subscription dedicated experts and unlimited task
              </p>
            </div>
            <button
              @click="alertCard"
              class="py-2 px-6 w-auto text-xs font-semibold text-white bg-gray-300 rounded-r-full rounded-bl-full transition-colors ease-in-out duration-200 hover:bg-indigo-600 hover:text-white focus:outline-none"
            >
              Subscibe now
            </button>
          </div>

          <!-- section 2 -->
          <div class="my-5">
            <h1 class="text-xl font-semibold text-gray-900 mb-4">
              Workly Recommend for "Hat's & Thing's"
            </h1>
            <div class="flex flex-wrap justify-start h-custom overflow-y-auto">
              <div class="card relative flex flex-col items-start bg-coa-black-100 group rounded-custom cursor-pointer mr-4 mb-4 py-3 px-6">
                <div class="mt-10">
                  <button class="py-1 px-3 tracking-wider text-xs rounded-full text-white bg-coa-gray-500 focus:outline-none">
                    Subscription Parks
                  </button>
                </div>
                <div class="mt-5 flex flex-col items-start justify-start h-32">
                  <h1 class="text-xl text-white font-semibold">
                    Get a Free Audit with Every subscription
                  </h1>
                  <p class="my-3 text-sm text-coa-gray-400">
                    some kind of shor description can go here to better explain
                    the recommended task.
                  </p>
                </div>
                <button
                  @click="alertCard"
                  class="py-2 px-6 w-auto mt-8 text-sm font-semibold text-white bg-indigo-600 rounded-r-full rounded-bl-full transition-colors ease-in-out duration-200 hover:bg-indigo-700 hover:text-white focus:outline-none"
                >
                  Get this Perk!
                </button>
              </div>
              <div class="card flex flex-col items-start bg-white group rounded cursor-pointer mr-4 mb-4 py-3 px-6">
                <div class="mt-5 flex flex-col items-start justify-start h-32">
                  <div class="space-x-1 mb-3">
                    <span class="text-orange-400"><i class="fa fa-star"></i></span>
                    <span class="text-orange-400"><i class="fa fa-star"></i></span>
                    <span class="text-orange-400"><i class="fa fa-star"></i></span>
                    <span class="text-orange-400"><i class="fa fa-star"></i></span>
                    <span class="text-gray-500"><i class="fa fa-star"></i></span>
                  </div>
                  <h1 class="text-xl text-coa-black-100 font-semibold">
                    Be Social - Sell your
                  </h1>
                  <h1 class="text-xl text-coa-black-100 font-semibold">
                    Stock directly on
                  </h1>
                  <h1 class="text-xl text-coa-black-100 font-semibold mb-3">
                    Instagram
                  </h1>
                  <button class="py-1 px-3 my-1 tracking-wider font-semibold text-xs rounded-full text-red-600 bg-red-200 focus:outline-none">
                    Marketing & Sales
                  </button>
                  <p class="my-3 text-sm text-coa-gray-400">
                    some kind of shor description can go here to better explain
                    the recommended task.
                  </p>
                  <div class="flex items-center justify-between w-full mt-3">
                    <div class="flex items-center text-coa-gray-400">
                      <span><i class="far fa-calendar mr-2"></i></span>
                      <span>1 Days</span>
                    </div>
                    <div class="flex items-center">
                      <div class="rounded-full cursor-pointer shadow-md w-8 h-8 overflow-hidden">
                        <img
                          class="object-cover"
                          src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80"
                          alt="avatar"
                        />
                      </div>
                      <div class="-ml-2 rounded-full cursor-pointer shadow-md w-8 h-8 overflow-hidden">
                        <img
                          class="object-cover"
                          src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80"
                          alt="avatar"
                        />
                      </div>
                      <div class="-ml-2 rounded-full cursor-pointer shadow-md w-8 h-8 overflow-hidden">
                        <img
                          class="object-cover"
                          src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80"
                          alt="avatar"
                        />
                      </div>
                      <div class="text-coa-gray-400 ml-3">
                        12
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card flex flex-col items-start bg-white group rounded cursor-pointer mr-4 mb-4 py-3 px-6">
                <div class="mt-5 flex flex-col items-start justify-start h-32">
                  <div class="space-x-1 mb-3">
                    <span class="text-orange-400"><i class="fa fa-star"></i></span>
                    <span class="text-orange-400"><i class="fa fa-star"></i></span>
                    <span class="text-orange-400"><i class="fa fa-star"></i></span>
                    <span class="text-orange-400"><i class="fa fa-star"></i></span>
                    <span class="text-orange-400"><i class="fa fa-star"></i></span>
                  </div>
                  <h1 class="text-xl text-coa-black-100 font-semibold">
                    Increase Confidence
                  </h1>
                  <h1 class="text-xl text-coa-black-100 font-semibold mb-3">
                    With TrustPilot reviews
                  </h1>
                  <button class="py-1 px-3 my-1 tracking-wider font-semibold text-xs rounded-full text-blue-600 bg-blue-200 focus:outline-none">
                    Marketing & Sales
                  </button>
                  <p class="my-3 text-sm text-coa-gray-400">
                    some kind of shor description can go here to better explain
                    the recommended task.
                  </p>
                  <div class="flex items-center justify-between w-full mt-10">
                    <div class="flex items-center text-coa-gray-400">
                      <span><i class="far fa-calendar mr-2"></i></span>
                      <span>2 Days</span>
                    </div>
                    <button
                      @click="alertCard"
                      class="py-2 px-6 w-auto text-sm font-semibold text-white bg-indigo-600 rounded-r-full rounded-bl-full transition-colors ease-in-out duration-200 hover:bg-indigo-700 hover:text-white focus:outline-none"
                    >
                      Get this Perk!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo";
export default {
  components: { Logo },
  methods: {
    alertCard(index) {
      alert("Anda mengklik Card");
    }
  }
};
</script>

<style scoped>
.h-c1 {
  height: 93vh;
}
.h-custom {
  height: 30rem;
}
.card {
  width: 18rem;
  height: 22rem;
  box-shadow: 0 10px 12px rgba(20, 31, 56, 0.05);
}
.shadow-custom {
  box-shadow: 0 10px 12px rgba(20, 31, 56, 0.05);
}

.rounded-custom {
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
}
</style>
