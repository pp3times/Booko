<template>
  <div>
    <SearchBar />
    <Category />
  </div>
</template>

<script>
import SearchBar from "@/components/TopBar/SearchBar.vue";
import Category from "@/components/TopBar/Category.vue";

export default {
  components: { SearchBar, Category },
  name: "TopBar",
};
</script>

<style></style>
