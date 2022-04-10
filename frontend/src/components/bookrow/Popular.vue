<template>
  <!-- <div class="flex items-start justify-center flex-col px-24 h-86 bg-black"> -->
  <!-- <div class="flex"> -->
  <div class="bg-black">
    <BookRow />
    <!-- <Book />
      <Book />
      <Book />
      <Book /> -->
    <!-- </div> -->
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
