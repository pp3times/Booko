<template>
  <div>
    <!-- <nav>
      <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    </nav> -->
    <router-view />
  </div>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #01b266;
}

a.router-link-exact-active .nav-admin {
	@apply bg-gray-100 opacity-100 text-primary;
}

</style>
