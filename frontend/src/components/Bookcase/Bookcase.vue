<template>
  <div class="bg-white my-10">
    <div>
      <div
        class="flex items-start justify-center flex-col container px-5 mx-auto"
        v-for="(data, index) in bookEiei"
        :key="index"
      >
        <h3
          class="py-10 text-4xl underline underline-offset-4 text-primary-dark"
        >
          {{ this.category[index].category_name }}
        </h3>
        <div class="flex items-center justify-center flex-col">
          <div
            class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 gap-y-10 max-w-6xl lg:max-w-full"
          >
            <div v-for="(e, index1) in data" :key="index1">
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
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      category: [],
      book: [],
      data: [],
    };
  },
  computed: {
    bookEiei() {
      const data = this.category.map((element) => {
        return this.book.filter((element2) => {
          return element2.category_id == element.category_id;
        });
      });
      console.log(data);
      return data;
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

<style lang="css" scoped>
.book_shadow {
  background: #0003;
  height: 1rem;
  width: 100%;
  border-radius: 100%;
  margin: auto;
  filter: blur(0.5rem);
  transition: 0.6s;
  position: absolute;
  z-index: 0;
  bottom: -30px;
  left: 18px;
}
.side {
  position: absolute;
  transform-style: preserve-3d;
  box-sizing: border-box;
  z-index: 50;
}
.cover {
  width: 80%;
  margin: auto;
  display: block;
  position: relative;
  font-size: 0;
  transform-style: preserve-3d;
  transform: rotateY(-30deg) rotateX(30deg) translateY(0px) translateX(0px);
  transition: 0.6s cubic-bezier(0.42, -0.35, 0, 1.46);
  cursor: pointer;
}
.cover img {
  width: 100%;
  position: relative;
  z-index: 100;
}
.side-1 {
  background: linear-gradient(to right, #eee, #ddd);
  right: -20px;
  top: 0;
  width: 20px;
  height: 100%;
  transform-origin: left;
  transform: rotateY(90deg);
  border-right: 1px solid #999;
}
.side-2 {
  background: linear-gradient(to bottom, #eee, #ddd);
  left: 0;
  bottom: -20px;
  width: 100%;
  height: 20px;
  transform-origin: top;
  transform: rotateX(-90deg);
  border-bottom: 1px solid #999;
}
.book-wrap:hover .cover {
  transform: rotateY(-10deg) rotateX(10deg) translateY(-20px) translateX(0px);
}
.book-wrap:hover .cover .book_shadow {
  background: #0002;
  left: -10%;
  width: 120%;
  bottom: -40px;
}
.book-title-wrap {
  opacity: 0.8;
  /* height: 3em; */
  overflow: hidden;
  transition: all 0.3s;
}
.book-wrap:hover .book-title-wrap {
  opacity: 1;
}
</style>