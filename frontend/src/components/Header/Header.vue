<template>
  <div>
    <Navbar />
    <SearchBar :isHidden="isShow" v-on:change-hidden="onChangeHidden" />
    <transition
      enter-active-class="duration-500 delay-500 ease-out"
      enter-class="-translate-x-full opacity-0"
      enter-to-class="translate-x-0 opacity-100"
      leave-active-class="duration-500 ease-in"
      leave-class="translate-x-0 opacity-100"
      leave-to-class="-translate-x-full opacity-0"
    >
      <Category v-if="isShow" />
    </transition>
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
