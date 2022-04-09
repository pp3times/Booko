<template>
  <div class="h-[88vh] bg-gray-800 flex justify-between">
    <div class="h-full flex items-center justify-center w-2/4">
      <BookPromotion />
    </div>
    <div
      class="w-2/4 text-white flex items-start justify-center text-7xl flex-col"
    >
      <h2>10% OFF SALE</h2>
      <h1>LAST 20 mins</h1>
      <button class="px-3 py-2 bg-indigo-500 rounded-md mt-2">
        Buy this now
      </button>
    </div>
  </div>
</template>

<script>
import BookPromotion from "@/components/special/BookPromotion.vue";

export default {
  name: "Promotion",
  components: {
    BookPromotion,
  },
};
</script>

<style></style>
