<template>
  <div class="h-screen font-ibmp bg-zinc-200">
    <Navbar />
    <div class="flex justify-center items-center h-full text-4xl">
      <div
        class="flex justify-start items-center flex-col bg-primary text-white h-11/12 w-2/6 p-10"
      >
        <h1 class="font-bold text-3xl">ช่องการติดต่อ</h1>
        <div class="mt-8">
        <p class="text-xl font-semibold">
          E-mail 63070138@kmitl.ac.th และ เบอร์โทร 099-999-9999
        </p>
        <p class="text-xl">
          
        </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "ContactView",
  components: {
    Navbar,
  },
};
</script>

<style></style>
