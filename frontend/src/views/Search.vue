<template>
  <div>
    <Header />
    <div class="min-h-[85vh] container px-6 py-8 mx-auto">
      <h1 class="text-4xl">ผลการค้นหาสำหรับ ''</h1>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer/Footer.vue";
export default {
  components: { Footer },
  data() {
    return {
			search: "",
		};
  },
  mounted() {
    this.getSearchQuery(this.$route.params.query);
  },
  methods: {
    enableSave() {
      this.$emit("change-hidden", !this.isShow);
    },
    getSearchQuery(id) {
      axios
        .get(`http://localhost:4000/api/search/${id}`)
        .then((res) => {
          this.search = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
