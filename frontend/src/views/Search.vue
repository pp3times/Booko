<template>
  <div>
    <Header />
    <div class="min-h-[85vh] container px-6 py-8 mx-auto">
      <h1 class="text-4xl">ผลการค้นหาสำหรับ '{{ keyword }}'</h1>
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
      keyword: "",
    };
  },
  mounted() {
    this.keyword = this.$route.params.keyword;
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
  // get search value from parent
  watch: {
    search: function (val) {
      this.$emit("search", val);
    },
  },
};
</script>

<style></style>
