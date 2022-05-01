<script setup></script>
<template>
  <div
    class="h-[83vh] bg-[#f3f3f3] flex justify-between items-center md:items-stretch md:flex-row flex-col"
  >
    <div class="h-full flex items-center justify-center w-3/5">
      <HeroBook />
    </div>
    <div
      class="w-3/6 text-primary font-bold flex items-start justify-center text-4xl lg:text-6xl flex-col py-10 md:py-0"
    >
      <h2>10% OFF SALE</h2>
      <h1>LAST 20 mins</h1>
      <button
        class="px-8 py-4 text-xl bg-primary hover:bg-secondary transition-all duration-300 font-semibold text-white rounded-md mt-2"
      >
        สั่งซื้อเลยตอนนี้
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style></style>
