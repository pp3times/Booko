<template>
  <div class="flex items-start justify-center flex-col px-24 h-86 bg-black">
    <h3 class="my-10 text-4xl underline underline-offset-4 text-white">New Coming Book</h3>
    <div class="flex">
      <BookRow />
      <!-- <Book />
      <Book />
      <Book />
      <Book /> -->
    </div>
  </div>
</template>

<script>
import BookRow from "@/components/bookrow/BookRow.vue";

export default {
  name: "Popular",
  components: {
    // HelloWorld
    BookRow,
  },
};
</script>

<style></style>
