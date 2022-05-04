<template>
  <div class="font-ibmp container px-5 mx-auto">
    <div class="flex font-bold text-2xl py-3">หมวดหมู่หนังสือ</div>
    <hr />
    <div
      class="py-5 -mx-3 overflow-y-auto whitespace-nowrap scroll-hidden flex"
    >
      <div
        class="text-gray-700 leading-5 hover:text-blue-600 hover:underline mx-4 md:my-0"
        v-for="(category, index) in this.category"
        :key="index"
      >
        <router-link :to="`/category/${category.category_id}`">
          {{ category.category_name }}
        </router-link>
      </div>
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
import axios from "axios";
import bookData from "@/data/book.json";

export default {
  name: "Category",
  data() {
    return {
      bookData,
      category: [],
      book: [],
    };
  },
  props: ["isShow"],
  methods: {
    enableSave() {
      this.$emit("change-hidden", !this.isShow);
    },
  },
  created() {
    // GET request using axios with error handling
    axios
      .get("http://localhost:4000/api/categories")
      .then((response) => (this.category = response.data))
      .catch((error) => {
        this.errorMessage = error.message;
        console.error("There was an error!", error);
      });
    axios
      .get("http://localhost:4000/api/books")
      .then((response) => (this.book = response.data))
      .catch((error) => {
        this.errorMessage = error.message;
        console.error("There was an error!", error);
      });
  },
  computed: {
  },
};
</script>

<style scoped>
.scroll-hidden::-webkit-scrollbar {
  height: 0px;
  background: transparent; /* make scrollbar transparent */
}
</style>
