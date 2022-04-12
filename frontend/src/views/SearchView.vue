<template>
<div>
    <Navbar />
    <SearchBar />
  <div class="h-full font-ibmp px-6 pt-6 w-screen">
    <div class="flex text-4xl pl-10 pt-10">
        <h1 class="px-36">ผลการค้นหา ' '</h1>
    </div>
    <BookRow />
  </div>
</div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import BookRow from "@/components/bookrow/BookRow.vue";
import SearchBar from "@/components/TopBar/SearchBar.vue";

export default {
  name: "SearchView",
  components: {
    Navbar,
    BookRow,
    SearchBar,
  },
};
</script>

<style></style>
