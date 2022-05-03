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
              class="border border-primary rounded-full tracking-wide px-3 font-medium py-1.5 text-md bg-gray-100 text-primary"
            >
              มีสินค้าพร้อมส่ง
            </strong>

            <div class="flex justify-between mt-8">
              <div class="max-w-[40vw] flex space-x-4 items-center">
                <h1 class="text-5xl font-bold underline text-primary">{{ book.book_name }}</h1>
                <div class="flex -ml-0.5">
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

              <!-- <p class="text-lg font-bold">฿119.99</p> -->
            </div>
            <details class="relative mt-4 group">
              <summary class="block">
                <div>
                  <div class="prose max-w-none group-open:hidden">
                    <h1 class="font-bold text-3xl mt-6">รายละเอียดหนังสือ</h1>
                    <div class="font-semibold -mt-5">
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
                        <span class="text-primary">{{
                          book.book_publisher
                        }}</span>
                      </div>
                      <div>
                        จำนวนหน้า :
                        <span class="text-primary"
                          >{{ book.book_page }} หน้า</span
                        >
                      </div>
                      <div>
                        ราคา :
                        <span class="text-primary"
                          >{{ book.book_price }} บาท</span
                        >
                      </div>
                    </div>
                  </div>

                  <span
                    class="mt-4 text-sm font-medium underline cursor-pointer group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0"
                  >
                    รายละเอียดเพิ่มเติม
                  </span>
                </div>
              </summary>

              <div class="pb-6 prose max-w-none">
                <h1 class="font-bold text-3xl mt-6">รายละเอียดหนังสือ</h1>
                <div class="font-semibold -mt-5">
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

                <div class="mt-3">{{ book.book_description }}</div>
              </div>
            </details>
            <!-- <div class="flex flex-col space-y-4">
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
            </div> -->
            <div class="mt-8 border-dashed border-4 p-8 rounded-md py-10">
              <div class="flex items-end space-x-3">
                <h1 class="text-xl font-bold">
                  ราคา
                  <span class="text-primary text-5xl">{{
                    book.book_price
                  }}</span>
                  บาท
                </h1>
              </div>
              <!-- <fieldset>
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
              </fieldset> -->

              <div class="flex mt-10">
                <div>
                  <label for="quantity" class="sr-only">Qty</label>

                  <input
                    type="number"
                    id="quantity"
                    v-model="quantity"
                    class="form-input w-20 py-3 px-3 text-xl font-semibold text-center border-gray-200 border-2 rounded no-spinners focus:border-primary"
                  />
                </div>

                <button
                  type="submit"
                  class="flex space-x-4 px-5 py-3 ml-3 text-xl font-medium text-white bg-green-600 rounded hover:bg-green-500 transition-all ease-in-out duration-200"
                  @click="addToCart(book.book_id, quantity)"
                >
                  <span>เพิ่มเข้าในตะกร้าสินค้า</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12.5 22h-9.5v-14h3v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h3v5.181c.482-.114.982-.181 1.5-.181l.5.025v-7.025h-5v-2c0-2.209-1.791-4-4-4s-4 1.791-4 4v2h-5v18h12.816c-.553-.576-1.004-1.251-1.316-2zm-5.5-18c0-1.654 1.346-3 3-3s3 1.346 3 3v2h-6v-2zm11.5 11c-2.484 0-4.5 2.015-4.5 4.5s2.016 4.5 4.5 4.5c2.482 0 4.5-2.015 4.5-4.5s-2.018-4.5-4.5-4.5zm2.5 5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
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
      quantity: 1,
      isShow: false,
      items: [],
      cart: [],
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
          this.items = [res.data];
        })
        .catch((err) => {
          console.log(err);
        });
    },
    isInCart(itemId) {
      if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
      const cartItem = this.cart.find(({ book_id }) => book_id === itemId);
      return Boolean(cartItem);
    },
    addToCart(itemId, quantity) {
      const item = this.items.find(({ book_id }) => book_id === itemId);
      if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
      const cartItems = JSON.parse(localStorage.getItem("cart"));
      // if item is already in cart, update quantity
      const cartItem = cartItems.find(({ book_id }) => book_id === itemId);
      if (cartItem) {
        cartItem.quantity += quantity;
      }
      // if item is not in cart, add it
      else {
        cartItems.push({
          ...item,
          quantity,
        });
      }

      localStorage.setItem("cart", JSON.stringify(cartItems));
      this.cart = JSON.parse(localStorage.getItem("cart"));
    },
    removeFromCart(itemId) {
      const cartItems = JSON.parse(localStorage.getItem("cart"));
      const index = cartItems.findIndex(({ book_id }) => book_id === itemId);
      cartItems.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      this.cart = JSON.parse(localStorage.getItem("cart"));
    },
  },
  components: { Book, Category, SearchBar },
};
</script>

<style></style>
