<template>
  <TransitionRoot as="template" :show="state" class="font-sukhumvit">
    <Dialog as="div" class="relative z-10" @close="$emit('closeCart', false)">
      <TransitionChild
        as="template"
        enter="ease-in-out duration-500"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in-out duration-500"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
          >
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <DialogPanel class="pointer-events-auto w-screen max-w-md">
                <div
                  class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl"
                >
                  <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                    <div class="flex items-start justify-between">
                      <DialogTitle class="text-lg font-medium text-gray-900">
                        สินค้าในถุง
                      </DialogTitle>
                      <div class="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          class="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          @click="$emit('closeCart')"
                        >
                          <span class="sr-only">Close panel</span>
                          <XIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div class="mt-8">
                      <div class="flow-root">
                        <ul role="list" class="-my-6 divide-y divide-gray-200">
                          <template v-if="products.length > 0">
                            <li
                              v-for="product in products"
                              :key="product.id"
                              class="flex py-6"
                            >
                              <div
                                class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
                              >
                                <img
                                  :src="product.book_coversrc"
                                  :alt="product.book_name"
                                  class="h-full w-full object-cover object-center"
                                />
                              </div>

                              <div class="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div
                                    class="flex justify-between text-base font-medium text-gray-900"
                                  >
                                    <h3>
                                      <a :href="product.href">
                                        {{ product.book_name }}
                                      </a>
                                    </h3>
                                    <p class="ml-4">{{ product.book_price }}</p>
                                  </div>
                                  <!-- <p class="mt-1 text-sm text-gray-500">
                                  {{ product.color }}
                                </p> -->
                                </div>
                                <div
                                  class="flex flex-1 items-end justify-between text-sm"
                                >
                                  <p class="text-gray-500">
                                    จำนวน {{ product.quantity }}
                                  </p>

                                  <div class="flex">
                                    <button
                                      type="button"
                                      class="font-medium text-indigo-600 hover:text-indigo-500"
                                      @click="removeFromCart(product)"
                                    >
                                      ลบสินค้า
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </template>
                          <!-- <div > -->
                          <div
                            class="flex h-[70vh] items-center justify-center space-x-3 text-primary"
                            v-else
                          >
                            <h3>คุณยังไม่มีสินค้าในตระกร้า</h3>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path
                                d="M20.753 15.467c1.301 1.821.939 3.104 2.247 4.938l-5.041 3.595c-2.723-2.027-5.072-2.677-5.83-2.932-.723-.243-1.189-.706-1.029-1.289.164-.589.779-.764 1.286-.741.765.035 1.386.265 1.386.265l-3.516-4.93c-.314-.44-.211-1.051.229-1.365s1.05-.211 1.363.229l2.383 3.333c.114.161.338.199.498.084.162-.115.199-.339.085-.5l-.587-.823.944-.235c.248-.06.507.036.655.244l.48.673c.115.161.338.199.499.084s.197-.338.083-.5l-.555-.777.928-.208c.243-.052.495.045.64.247l.407.572c.114.161.339.198.5.084.16-.115.198-.339.084-.5l-.458-.641.273-.048c.952-.167 1.468.329 2.046 1.141zm-10.838-3.248c.61-.436 1.399-.45 1.987.002-.335-1.121-1.676-1.583-2.63-.902-.955.681-.952 2.099-.002 2.779-.235-.703.035-1.444.645-1.879zm1.577 10.745c-.682-.229-1.188-.571-1.569-.964h-6.923v-14h3v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h3v4.6c.541-.098 1.486-.294 2-.302v-6.298h-5v-2c0-2.209-1.791-4-4-4s-4 1.791-4 4v2h-5v18h13.134c-1-.49-1.683-.723-2.642-1.036zm-4.492-18.964c0-1.654 1.346-3 3-3s3 1.346 3 3v2h-6v-2z"
                              />
                            </svg>
                          </div>
                          <!-- </div> -->
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div
                      class="flex justify-between text-base font-medium text-gray-900"
                    >
                      <p>ยอดสุทธิ</p>
                      <p>{{ total }} บาท</p>
                    </div>
                    <p class="mt-0.5 text-sm text-gray-500">
                      ค่าส่งและภาษีมูลค่าเพิ่ม 7% จะถูกคิดในหน้า checkout
                    </p>
                    <div class="mt-6">
                      <router-link
                        :to="{ name: 'checkout' }"
                        class="flex items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700"
                        >Checkout</router-link
                      >
                    </div>
                    <div
                      class="mt-6 flex justify-center text-center text-sm text-gray-500"
                    >
                      <p>
                        or
                        <button
                          type="button"
                          class="font-medium text-green-600 hover:text-green-500"
                          @click="$emit('closeCart')"
                        >
                          เลือกสินค้าต่อ<span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XIcon } from "@heroicons/vue/outline";

// const products = [
//   {
//     id: 1,
//     name: "Throwback Hip Bag",
//     href: "#",
//     color: "Salmon",
//     price: "$90.00",
//     quantity: 1,
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
//     imageAlt:
//       "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
//   },
//   {
//     id: 2,
//     name: "Medium Stuff Satchel",
//     href: "#",
//     color: "Blue",
//     price: "$32.00",
//     quantity: 1,
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
//     imageAlt:
//       "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
//   },
//   // More products...
// ];

export default {
  components: {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    XIcon,
  },
  updated() {
    // get product from local storage name cart
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      this.products = cart;
    }
  },
  data() {
    return {
      products: [],
      isOpen: false,
    };
  },
  methods: {
    // closeCart() {
    // 	this.isOpen = false;
    // },
    // addToCart(product) {
    // 	let cart = JSON.parse(localStorage.getItem("cart"));
    // 	if (cart) {
    // 		cart.push(product);
    // 	} else {
    // 		cart = [product];
    // 	}
    // 	localStorage.setItem("cart", JSON.stringify(cart));
    // 	this.products = cart;
    // },
    removeFromCart(product) {
      let cart = JSON.parse(localStorage.getItem("cart"));
      let index = cart.findIndex((item) => item.book_id === product.book_id);
      console.log(cart[index].quantity);
      if (cart[index].quantity > 1) {
        cart[index].quantity--;
      } else {
        cart.splice(index, 1);
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      this.products = cart;
    },
  },
  computed: {
    total() {
      let total = 0;
      this.products.forEach((product) => {
        total += product.quantity * product.book_price;
      });
      return total;
    },
  },
  props: {
    state: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
};
</script>
