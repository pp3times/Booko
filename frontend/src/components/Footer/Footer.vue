<template>
  <footer class="bg-gray-50 font-sukhumvit">
    <div
      class="container px-6  py-16 mx-auto"
    >
      <span class="block w-full h-10 text-2xl rounded-lg text-primary font-bold"
        >Booko | Online Book Store</span
      >

      <div class="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p class="font-medium">Company</p>

          <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <a class="hover:opacity-75" href=""> About </a>
            <a class="hover:opacity-75" href=""> Meet the Team </a>
            <a class="hover:opacity-75" href=""> History </a>
            <a class="hover:opacity-75" href=""> Careers </a>
          </nav>
        </div>

        <div>
          <p class="font-medium">Services</p>

          <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <a class="hover:opacity-75" href=""> 1on1 Coaching </a>
            <a class="hover:opacity-75" href=""> Company Review </a>
            <a class="hover:opacity-75" href=""> Accounts Review </a>
            <a class="hover:opacity-75" href=""> HR Consulting </a>
            <a class="hover:opacity-75" href=""> SEO Optimisation </a>
          </nav>
        </div>

        <div>
          <p class="font-medium">Helpful Links</p>

          <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <a class="hover:opacity-75" href=""> Contact </a>
            <a class="hover:opacity-75" href=""> FAQs </a>
            <a class="hover:opacity-75" href=""> Live Chat </a>
          </nav>
        </div>

        <div>
          <p class="font-medium">Legal</p>

          <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <a class="hover:opacity-75" href=""> Privacy Policy </a>
            <a class="hover:opacity-75" href=""> Terms & Conditions </a>
            <a class="hover:opacity-75" href=""> Returns Policy </a>
            <a class="hover:opacity-75" href=""> Accessibility </a>
          </nav>
        </div>
      </div>

      <div
        class="pt-8 mt-8 border-t border-gray-100 sm:items-center sm:justify-between sm:flex"
      >
        <p class="text-xs text-gray-500 flex">
          &copy; {{ date }} Booko Teams. All rights reserved.
          <router-link
            to="/dashboard"
            class="text-center ml-2 underline hover:text-primary transition-all duration-200 ease-in-out"
            >เข้าสู่ระบบหลังบ้าน
          </router-link>
        </p>

        <strong
          class="inline-flex items-center p-2 space-x-2 text-sm font-medium border border-gray-200 rounded"
        >
          <span> Status: </span>

          <span class="w-3 h-3 bg-green-600 rounded-full"></span>

          <span class="font-medium text-green-600">
            All systems operational
          </span>
        </strong>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>
