<template>
  <div class="flex min-h-screen">
    <the-sidebar />

    <div class="flex flex-col flex-grow bg-gray-200">
      <the-header />

      <div class="mb-auto">
        <router-view />
      </div>

      <the-footer />
    </div>
  </div>
</template>

<script>
import TheSidebar from "@/components/layouts/TheSidebar.vue";
import TheHeader from "@/components/layouts/TheHeader.vue";
import TheFooter from "@/components/layouts/TheFooter.vue";

export default {
  components: {
    TheSidebar,
    TheHeader,
    TheFooter,
  },
  data() {
    return {
      admin: [],
    };
  },
  created() {
    if (!this.$store.getters.isAdminLoggedIn) {
      this.$router.push("/login");
    }
    this.admin = this.$store.getters.getAdmin;
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    },
  },
};
</script>
