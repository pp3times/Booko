<template>
  <div class="">
    <!-- <label class="relative block">
      <span class="sr-only">Search</span>
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
          x
        </svg>
      </span>
      <input
        class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder="Search for anything..."
        type="text"
        name="search"
      />
    </label> -->

    <!-- page -->
    <main
      class="flex w-full items-center justify-center bg-gray-900"
    >
      <!-- component -->
      <div class="flex bg-white w-full px-7">
        <input
          type="search"
          class="w-full border-none bg-transparent px-4 py-1 text-gray-900 outline-none focus:outline-none"
          placeholder="search"
          v-model="search"
        />

        <button
          type="button"
          class="m-2 rounded px-4 py-2 font-semibold text-gray-100"
          :class="
            search.length > 0
              ? 'bg-purple-500'
              : 'bg-gray-500 cursor-not-allowed'
          "
          :disabled="search.length == 0"
        >
          search
        </button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      search: "",
    };
  },
};
</script>

<style></style>
