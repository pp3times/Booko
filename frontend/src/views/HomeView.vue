<template>
  <div>
    <Navbar />
		<Category />
    <Promotion />
    <Popular />
    <div class="relative flex py-24 px-24 items-center bg-black">
      <div class="flex-grow border-t border-white"></div>
      <span class="flex-shrink mx-4 text-white">Content</span>
      <div class="flex-grow border-t border-white"></div>
    </div>
		<!-- <Popular /> -->
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
// import Book from "@/components/Book.vue";
import Navbar from "@/components/Navbar.vue";
import Promotion from "@/components/special/Promotion.vue";
import Footer from "@/components/Footer.vue";
import Popular from "@/components/bookrow/Popular.vue";
import Category from "@/components/Category.vue";

export default {
  name: "HomeView",
  components: {
    // HelloWorld
    // Book,
    Navbar,
    Promotion,
    Footer,
    Popular,
		Category,
  },
};
</script>
