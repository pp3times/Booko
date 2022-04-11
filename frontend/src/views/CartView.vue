<template>
  <div>
		<BoardCast />
    <Navbar />
    <h1>This is an CartView page</h1>
    <div class="w-full max-w-lg p-4 px-8 py-10 overflow-hidden bg-white shadow-xl-blue rounded-xl">
        <form @submit.prevent="">
          <transition
            enter-active-class="duration-500 ease-out"
            enter-class="-translate-x-full opacity-0"
            enter-to-class="translate-x-0 opacity-100"
            leave-active-class="duration-500 ease-in"
            leave-class="translate-x-0 opacity-100"
            leave-to-class="-translate-x-full opacity-0"
          >
            <section v-show="currentStep==1" class="flex flex-col transition-all transform">
                ......
                <button class="px-4 py-2 text-sm text-white bg-blue-500 ..." @click="currentStep = 2">
                    Siguiente
                </button>
            </section>
          </transition>
          <transition
            enter-active-class="duration-500 ease-out"
            enter-class="translate-x-full opacity-0"
            enter-to-class="translate-x-0 opacity-100"
            leave-active-class="duration-500 ease-in"
            leave-class="translate-x-0 opacity-100"
            leave-to-class="translate-x-full opacity-0"
          >
            <section v-show="currentStep==2" class="flex flex-col transition-all transform">
              <span class="inline-flex items-center justify-start my-6 -ml-2.5 w-auto">
                <svg @click="currentStep = 1" class="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                </svg>
              </span>
            </section>
          </transition>
        </form>
      </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import BoardCast from "@/components/TopBar/BoardCast.vue";

export default {
  name: "CartView",
  components: {
    Navbar,
		BoardCast
  },
  data () {
      return {
        totalSteps: 3,
        currentStep: 1,
      }
    }
};
</script>
<style>

</style>