<template>
  <div></div>
</template>
<script>
export default {
  data() {
    return {
      admin: [],
    };
  },
  // async created() {
  //   if (!this.$store.getters.isAdminLoggedIn) {
  //     this.$router.push("/admin");
  //   }
  //   this.admin = this.$store.getters.getAdmin;
  //   // this.secretMessage = await AuthService.getSecretContent();
  // },
  methods: {
    // logout() {
    //   this.$store.dispatch("logout");
    //   this.$router.push("/admin");
    // },
  },
};
</script>

<style></style>
