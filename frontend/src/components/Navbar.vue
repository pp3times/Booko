<template>
  <div class="bg-white">
    <nav
      class="container font-ibmp font-medium px-6 pt-6 pb-4 mx-auto md:flex md:justify-between md:items-center"
    >
      <div class="flex items-center justify-between">
        <router-link
          to="/"
          class="text-xl font-bold text-gray-500 md:text-2xl hover:text-primary"
          >Booko
        </router-link>
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="flex md:hidden">
          <button
            type="button"
            class="text-gray-500 hover:text-gray-400 focus:outline-none focus:text-gray-400"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
      >
        <li class="text-gray-500 hover:text-primary">
          <router-link to="/">หน้าหลัก</router-link>
        </li>
        <li class="text-gray-500 hover:text-primary">
          <router-link to="/about">เกี่ยวกับ</router-link>
        </li>

        <li class="text-gray-500 hover:text-primary">ติดต่อ</li>
        <li>
          <router-link
            to="/auth"
            class="text-white font-bold hover:text-primary hover:bg-white transition duration-300 px-4 py-2 bg-primary rounded-sm"
            >เข้าสู่ระบบ</router-link
          >
        </li>
        <li>
          <router-link to="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-primary cursor-pointer -ml-2"
            >
              <path
                d="M6.665 9.068l-3.665-1.66v14l3.665 2.592 14.335-2.155v-14.845l-14.335 2.068zm-1.665 1.441l1 .453v10.118l-1-.707v-9.864zm14 9.615l-11 1.653v-10.881l11-1.587v10.815zm-2-15.833l-.001 1.749c0 .246-.18.455-.423.492-.303.045-.576-.19-.576-.495v-1.746c.001-.691-.231-1.304-.653-1.726-.368-.37-.847-.565-1.384-.565-1.547 0-2.96 1.558-2.963 3.268v1.681c0 .247-.181.457-.425.494-.302.046-.575-.189-.575-.494l.001-1.683c.004-2.261 1.866-4.266 3.962-4.266 1.717 0 3.039 1.387 3.037 3.291zm-9.999 2.209v-2.235c.004-2.26 1.866-4.265 3.962-4.265.492 0 .944.125 1.35.332-.423.17-.822.4-1.188.683l-.162-.015c-1.547 0-2.961 1.558-2.963 3.268v2.232c0 .248-.182.458-.427.494-.3.045-.572-.187-.572-.494z"
              />
            </svg>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "Navbar",
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
};
</script>
<style>
.fixed-top {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;
}
</style>
