<template>
  <div>
    <Header />
    <section>
      <div class="relative container px-6 py-8 mx-auto font-sukhumvit mt-5">
        <div class="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
          <div class="grid grid-cols-2 gap-4 md:grid-cols-1 mt-5">
            <div class="aspect-w-1 aspect-h-1">
              <div class="w-5/6">
                <Book :imgUrl="book.book_coversrc" :id="book.book_id" />
              </div>
            </div>
          </div>

          <div class="top-0">
            <strong
              class="border border-primary rounded-full tracking-wide px-3 font-medium py-1.5 text-xs bg-gray-100 text-primary"
            >
              มีสินค้าพร้อมส่ง
            </strong>

            <div class="flex justify-between mt-8">
              <div class="max-w-[35ch]">
                <h1 class="text-2xl font-bold">{{ book.book_name }}</h1>

                <p class="mt-0.5 text-sm">แต่งโดย : {{ book.book_author }}</p>

                <div class="flex mt-2 -ml-0.5">
                  <svg
                    class="w-5 h-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    class="w-5 h-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    class="w-5 h-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    class="w-5 h-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    class="w-5 h-5 text-gray-200"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
              </div>

              <p class="text-lg font-bold">฿119.99</p>
            </div>

            <form class="mt-8">
              <fieldset>
                <legend class="mb-1 text-sm font-medium">ห่อปก</legend>

                <div class="flow-root">
                  <div class="flex flex-wrap -m-0.5">
                    <label for="color_tt" class="cursor-pointer p-0.5">
                      <input
                        type="radio"
                        name="color"
                        id="color_tt"
                        class="sr-only peer"
                        required
                      />

                      <span
                        class="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white"
                      >
                        ไม่ต้องการห่อปก
                      </span>
                    </label>

                    <label for="color_fr" class="cursor-pointer p-0.5">
                      <input
                        type="radio"
                        name="color"
                        id="color_fr"
                        class="sr-only peer"
                      />

                      <span
                        class="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white"
                      >
                        ต้องการห่อปก
                      </span>
                    </label>
                  </div>
                </div>
              </fieldset>

              <div class="flex mt-8">
                <div>
                  <label for="quantity" class="sr-only">Qty</label>

                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    value="1"
                    class="w-12 py-3 text-xs text-center border-gray-200 rounded no-spinners"
                  />
                </div>

                <button
                  type="submit"
                  class="block px-5 py-3 ml-3 text-xs font-medium text-white bg-green-600 rounded hover:bg-green-500"
                >
                  เพิ่มเข้าในรถเข็น
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="flex flex-col space-y-4">
          <h1 class="font-bold text-3xl">รายละเอียดหนังสือ</h1>
          <div class="font-semibold">
            <div>
              ชื่อหนังสือ :
              <span class="text-primary">{{ book.book_name }}</span>
            </div>
            <div>
              ผู้เขียน :
              <span class="text-primary">{{ book.book_author }}</span>
            </div>
            <div>
              สำนักพิมพ์ :
              <span class="text-primary">{{ book.book_publisher }}</span>
            </div>
            <div>
              จำนวนหน้า :
              <span class="text-primary">{{ book.book_page }} หน้า</span>
            </div>
            <div>
              ราคา :
              <span class="text-primary">{{ book.book_price }} บาท</span>
            </div>
          </div>
          <div>{{ book.book_description }}</div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import Book from "@/components/Bookcase/Book.vue";
import Category from "@/components/Header/Category.vue";
import SearchBar from "@/components/Header/SearchBar.vue";

export default {
  data() {
    return {
      book: {},
      isShow: false,
    };
  },
  mounted() {
    this.getBookDetail(this.$route.params.id);
  },
  methods: {
    getBookDetail(id) {
      axios
        .get(`http://localhost:4000/api/products/${id}`)
        .then((res) => {
          this.book = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  components: { Book, Category, SearchBar },
};
</script>

<style></style>
