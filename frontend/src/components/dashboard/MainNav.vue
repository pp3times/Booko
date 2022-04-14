<template>
  <div
    class="flex lg:flex-col items-center justify-center h-full space-x-4 lg:space-x-0 lg:space-y-4 py-2 lg:py-4 nav-admin"
  >
    <router-link class="group" :to="{ name: 'dashboard' }">
      <div
        class="nav-admin flex justify-center items-center w-10 h-10 lg:w-14 lg:h-14 rounded-xl text-white opacity-50 transform group-hover:bg-gray-100 group-hover:opacity-100 group-hover:text-emerald-500 group-hover:scale-110 lg:-translate-y-0 duration-300 shadow-xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path
            d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
          />
        </svg>
      </div>
    </router-link>
    <router-link class="group" :to="{ name: 'ManageBook' }">
      <div
        class="nav-admin flex justify-center items-center w-10 h-10 lg:w-14 lg:h-14 rounded-xl text-white opacity-50 transform group-hover:bg-gray-100 group-hover:opacity-100 group-hover:text-emerald-500 group-hover:scale-110 lg:-translate-y-0 duration-300 shadow-xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="h-6 w-6"
          fill="currentColor"
        >
          <path
            d="M23 5v13.883l-1 .117v-16c-3.895.119-7.505.762-10.002 2.316-2.496-1.554-6.102-2.197-9.998-2.316v16l-1-.117v-13.883h-1v15h9.057c1.479 0 1.641 1 2.941 1 1.304 0 1.461-1 2.942-1h9.06v-15h-1zm-12 13.645c-1.946-.772-4.137-1.269-7-1.484v-12.051c2.352.197 4.996.675 7 1.922v11.613zm9-1.484c-2.863.215-5.054.712-7 1.484v-11.613c2.004-1.247 4.648-1.725 7-1.922v12.051z"
          />
        </svg>
      </div>
    </router-link>
    <router-link class="group" :to="{ name: 'ManageCategory' }">
      <div
        class="nav-admin flex justify-center items-center w-10 h-10 lg:w-14 lg:h-14 rounded-xl text-white opacity-50 transform group-hover:bg-gray-100 group-hover:opacity-100 group-hover:text-emerald-500 group-hover:scale-110 lg:-translate-y-0 duration-300 shadow-xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
					class="w-6 h-6"
					fill="currentColor"
        >
          <path
            d="M10.605 0h-10.605v10.609l13.391 13.391 10.609-10.604-13.395-13.396zm-4.191 6.414c-.781.781-2.046.781-2.829.001-.781-.783-.781-2.048 0-2.829.782-.782 2.048-.781 2.829-.001.782.782.781 2.047 0 2.829z"
          />
        </svg>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "MainNav",
};
</script>
