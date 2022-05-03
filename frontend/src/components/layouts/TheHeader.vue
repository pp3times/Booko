<template>
  <header
    class="flex justify-between bg-white border-b-2 px-4 sm:justify-between sm:px-6"
  >
    <router-link
      to="/"
      class="hidden sm:block my-auto cursor-pointer underline underline-offset-2 text-primary"
    >
      Back to Website
    </router-link>

    <button class="sm:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-gray-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
    <Menu as="div" class="relative">
      <MenuButton
        class="flex items-center space-x-2 px-2 py-3 text-sm hover:bg-gray-200 focus:outline-none"
      >
        <!-- <img
          class="h-8 w-8 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        /> -->
        <BaseAvatar name="Jeremy" class="h-8 w-8 rounded-full" color="red" />
        <span>John Doe</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </MenuButton>
      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <MenuItems
          class="origin-top-right absolute right-0 w-48 shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
        >
          <div>
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                :class="[
                  active ? 'bg-gray-200' : '',
                  'block px-4 py-2 text-sm text-gray-700',
                ]"
                >Your Profile</a
              >
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                :class="[
                  active ? 'bg-gray-200' : '',
                  'block px-4 py-2 text-sm text-gray-700',
                ]"
                >Settings</a
              >
            </MenuItem>
          </div>
          <MenuItem v-slot="{ active }">
            <router-link
              :to="{ name: 'login' }"
              :class="[
                active ? 'bg-gray-200' : '',
                'block px-4 py-2 text-sm text-gray-700',
              ]"
              >Sign out</router-link
            >
          </MenuItem>
        </MenuItems>
      </transition>
    </Menu>
  </header>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
// import Avatar from "vue-avatar";
import Avatar from "vue-boring-avatars";
import BaseAvatar from "../BaseAvatar.vue";

export default {
  data() {
    return {
      colors: ["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"],
    };
  },
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    Avatar,
    BaseAvatar,
  },
};
</script>
