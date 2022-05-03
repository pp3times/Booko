<script setup>
import Header from "@/components/Header/Header.vue";
</script>

<template>
  <div class="font-ibm">
    <Header />
    <Hero />
    <Bookcase />
    <Footer />
		
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    onChangeHidden() {
      this.isShow = !this.isShow;
    },
  },
};
</script>
<style></style>
