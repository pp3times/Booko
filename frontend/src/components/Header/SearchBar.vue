<template>
  <div class="font-ibm w-full border-b-[1px] border-[#F0F0F0]">
    <main
      class="flex items-center justify-center bg-white py-3 container px-5 mx-auto"
    >
      <div
        class="m-2 rounded-sm pr-2 py-2 font-semibold text-white h-full cursor-pointer"
        @click="enableSave"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-primary hover:scale-125 transition-all duration-200"
        >
          <path
            d="M4 22h-4v-4h4v4zm0-12h-4v4h4v-4zm0-8h-4v4h4v-4zm3 0v4h17v-4h-17zm0 12h17v-4h-17v4zm0 8h17v-4h-17v4z"
          />
        </svg>
      </div>
      <form action="" class="flex bg-white w-full items-center rounded-sm">
        <!-- search icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="ml-5"
        >
          <path
            d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"
          />
        </svg>
        <input
          type="search"
          class="w-full border-none bg-transparent px-3 py-1 mx-4 text-gray-900 outline-none focus:border-b-primary rounded"
          placeholder="search"
          v-model="search"
        />

        <router-link :to="`/search/${this.search}`">
          <button
            type="button"
            class="m-2 rounded px-4 py-2 text-white"
            :class="
              search.length > 0
                ? 'bg-primary'
                : 'bg-gray-500 cursor-not-allowed'
            "
            :disabled="search.length == 0"
          >
            ค้นหา
          </button>
        </router-link>
      </form>
    </main>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      search: "",
			keyword: "",
    };
  },
  methods: {
    enableSave() {
      this.$emit("change-hidden", !this.isShow);
    },
  },
  // send search value to parent
  watch: {
    search: function (val) {
      this.$emit("search", val);
    },
  },
};
</script>

<style></style>
