<template>
  <div class="px-[6.5rem] font-ibmp">
    <div class="flex font-bold text-2xl py-3">หมวดหมู่หนังสือ</div>
    <hr />
    <div
      class="py-5 -mx-3 overflow-y-auto whitespace-nowrap scroll-hidden flex"
    >
      <a
        class="text-gray-700 leading-5 hover:text-blue-600 hover:underline mx-4 md:my-0"
        href="#"
        v-for="(book, index) in bookData"
        :key="index"
        >{{ index }}</a
      >
    </div>
    <div class="flex font-bold text-2xl py-3">หมวดหมู่สินค้า</div>
    <hr />
    <div
      class="py-5 -mx-3 overflow-y-auto whitespace-nowrap scroll-hidden flex"
    >
      <a
        class="text-red-500 leading-5 hover:text-red-800 hover:underline mx-4 md:my-0"
        href="#"
        >👀 สินค้าขายดี</a
      >

      <a
        class="text-red-500 leading-5 hover:text-red-800 hover:underline mx-4 md:my-0"
        href="#"
        >🔥 สินค้าราคาพิเศษ</a
      >
    </div>
  </div>
</template>

<script>
import bookData from "@/data/book.json";

export default {
  name: "Category",
  data() {
    return {
      bookData,
    };
  },
  props: ["isShow"],
  methods: {
    enableSave() {
      this.$emit("change-hidden", !this.isShow);
    },
  },
};
</script>

<style scoped>
.scroll-hidden::-webkit-scrollbar {
  height: 0px;
  background: transparent; /* make scrollbar transparent */
}
</style>
