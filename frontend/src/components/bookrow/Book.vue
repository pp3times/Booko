<template>
	<!-- <div class="col-span-12 sm:col-span-6 md:col-span-3"> -->
	<div class="">
      <card class="w-full flex flex-col">
        <div class="relative">
          <!-- Image Video -->
          <a href="#">
            <Test />
          </a>
          <p
            class="absolute right-2 bottom-2 bg-red-900 text-gray-100 text-xs px-1 py"
          >
            Flash Sale
          </p>
        </div>
        <div class="flex flex-row mt-2 gap-2">
          <!-- Description -->
          <div clas="flex flex-col">
            <a href="https://link.springer.com/book/10.1007/978-3-662-62746-4">
              <p class="text-gray-100 text-sm font-semibold">
                Machine Learning for Cyber Physical Systems
              </p>
            </a>
            <a class="text-gray-400 text-xs mt-2 hover:text-gray-100" href="#">
              Jürgen
            </a>
            <p class="text-gray-400 text-xs mt-1">฿280</p>
          </div>
        </div>
      </card>
    </div>
</template>

<script>
import Test from "@/components/Test.vue";

export default {
	name: 'Book',
	components: {
		Test,
	},
}
</script>

<style>

</style>