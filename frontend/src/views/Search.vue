<template>
  <div>
    <Header />
    <div class="container mx-auto min-h-[85vh] px-6 py-8">
      <h1 class="text-4xl">ผลการค้นหาสำหรับ '{{ keyword }}'</h1>
      <div class="my-10 bg-white">
        <div>
          <div
            class="container mx-auto flex flex-col items-start justify-center px-5"
          >
            <h3
              class="py-10 text-4xl text-primary-dark underline underline-offset-4"
            ></h3>
            <div class="flex flex-col items-center justify-center">
              <div
                class="grid max-w-6xl grid-cols-2 gap-10 gap-y-10 md:grid-cols-3 lg:max-w-full lg:grid-cols-5"
              >
                <div v-for="(e, index1) in bookSearch" :key="index1">
                  <Bookbox
                    :bookId="e.book_id"
                    :imgUrl="e.book_coversrc"
                    :bookName="e.book_name"
                    :bookAuthor="e.book_author"
                    :bookPrice="e.book_price"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import Footer from "@/components/Footer/Footer.vue";
export default {
  components: { Footer },

  data() {
    return {
      keyword: "",
      book: [],
      data: [],
    };
  },
  mounted() {
    this.keyword = this.$route.params.keyword;
  },
  updated() {
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

      console.log(data);
      return data;
    },
  },
  computed: {
    bookSearch() {
      // var data = this.book;
      // console.log(data)
      if (this.keyword) {
        return this.book.filter((item) => {
          return item.book_name.indexOf(this.keyword) > -1;
        });
      }
    },
  },
  created() {
    // GET request using axios with error handling
    axios
      .get("http://localhost:4000/api/categories")
      .then((response) => (this.category = response.data))
      .catch((error) => {
        this.errorMessage = error.message;
        console.error("There was an error!", error);
      });
    axios
      .get("http://localhost:4000/api/books")
      .then((response) => (this.book = response.data))
      .catch((error) => {
        this.errorMessage = error.message;
        console.error("There was an error!", error);
      });
  },
};
</script>

<style></style>
