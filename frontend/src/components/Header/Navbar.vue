<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/solid";
</script>
<template>
  <div class="bg-primary font-sukhumvit">
    <nav
      class="container font-medium px-6 py-6 mx-auto md:flex md:justify-between md:items-center"
    >
      <div class="flex items-center justify-between">
        <router-link
          to="/"
          class="text-xl font-bold text-white md:text-2xl hover:tracking-widest transition-all duration-200 ease-in-out"
          >Booko
        </router-link>
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="flex md:hidden">
          <button
            type="button"
            class="text-white hover:text-gray-400 focus:outline-none focus:text-gray-400"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
      >
        <li class="text-white">
          <router-link to="/payments">ชำระเงิน</router-link>
        </li>
        <li class="text-white">
          <router-link to="/Contact">ช่วยเหลือ</router-link>
        </li>
        <li class="flex space-x-5">
          <span class="mr-6 text-white border-r-2"></span>
          <p @click="state = !state">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="fill-white cursor-pointer mb-1 w-6 h-6"
            >
              <path
                d="M6.665 9.068l-3.665-1.66v14l3.665 2.592 14.335-2.155v-14.845l-14.335 2.068zm-1.665 1.441l1 .453v10.118l-1-.707v-9.864zm14 9.615l-11 1.653v-10.881l11-1.587v10.815zm-2-15.833l-.001 1.749c0 .246-.18.455-.423.492-.303.045-.576-.19-.576-.495v-1.746c.001-.691-.231-1.304-.653-1.726-.368-.37-.847-.565-1.384-.565-1.547 0-2.96 1.558-2.963 3.268v1.681c0 .247-.181.457-.425.494-.302.046-.575-.189-.575-.494l.001-1.683c.004-2.261 1.866-4.266 3.962-4.266 1.717 0 3.039 1.387 3.037 3.291zm-9.999 2.209v-2.235c.004-2.26 1.866-4.265 3.962-4.265.492 0 .944.125 1.35.332-.423.17-.822.4-1.188.683l-.162-.015c-1.547 0-2.961 1.558-2.963 3.268v2.232c0 .248-.182.458-.427.494-.3.045-.572-.187-.572-.494z"
              />
            </svg>
          </p>
        </li>
        <!-- <li @click="state = !state">x</li> -->
        <li>
          <router-link
            to="/sign"
            v-if="!this.$store.getters.isLoggedIn"
            class="text-primary bg-white shadow-md hover:text-primary hover:shadow-primary-dark/80 hover:shadow-md hover:bg-white transition duration-300 px-6 py-3 rounded"
            >เข้าสู่ระบบ</router-link
          >
          <div
            class="flex items-center space-x-5"
            v-if="this.$store.getters.isLoggedIn"
          >
            <router-link to="/me" class="text-white font-bold flex">
              <!-- <BaseAvatar :name="this.$store.getters.getUser.customer_firstname" color="red" /> -->
              <!-- ยินดีต้อนรับคุณ,
              {{ this.$store.getters.getUser.customer_firstname }} -->
              <div class="w-full max-w-sm pr-4">
                <Popover v-slot="{ open }" class="relative">
                  <PopoverButton
                    :class="open ? '' : 'text-opacity-90'"
                    class="group inline-flex items-center rounded-md bg-slate-100 px-4 py-3 text-base font-bold font-ibm text-primary hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                  >
                    <span>ยินดีต้อนรับคุณ, {{ this.user_name }}</span>
                    <ChevronDownIcon
                      :class="open ? '' : 'text-opacity-70'"
                      class="ml-2 h-5 w-5 text-primary-dark transition duration-150 ease-in-out group-hover:text-opacity-80"
                      aria-hidden="true"
                    />
                  </PopoverButton>

                  <transition
                    enter-active-class="transition duration-200 ease-out"
                    enter-from-class="translate-y-1 opacity-0"
                    enter-to-class="translate-y-0 opacity-100"
                    leave-active-class="transition duration-150 ease-in"
                    leave-from-class="translate-y-0 opacity-100"
                    leave-to-class="translate-y-1 opacity-0"
                  >
                    <PopoverPanel
                      class="absolute left-1/2 z-10 mt-3 w-full -translate-x-1/2 transform px-4 sm:px-0"
                    >
                      <div
                        class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
                      >
                        <div class="bg-gray-50 p-3 flex flex-col space-y-1">
                          <a
                            href="##"
                            class="flow-root rounded-md px-2 py-4 transition duration-150 ease-in-out group hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                          >
                            <span class="flex items-center">
                              <span
                                class="text-sm font-bold text-gray-900 group-hover:text-primary transition-all ease-in-out duration-800"
                              >
                                แก้ไขข้อมูลส่วนตัว
                              </span>
                            </span>
                          </a>
                          <div
                            @click="logout"
                            class="flow-root rounded-md px-2 py-4 transition duration-150 group ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                          >
                            <span class="flex items-center">
                              <span
                                class="text-sm font-bold text-gray-900 group-hover:text-primary transition-all ease-in-out duration-800"
                              >
                                ออกจากระบบ
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </PopoverPanel>
                  </transition>
                </Popover>
              </div>
            </router-link>
            <!-- <div
              @click="logout"
              class="text-primary font-bold hover:text-white cursor-pointer hover:bg-primary transition duration-300 px-4 py-2 bg-white rounded-md"
            >
              ออกจากระบบ
            </div> -->
          </div>
        </li>
      </ul>
    </nav>
    <Cart :state="state" @close-cart="(e, st) => (this.state = st)" />
    <!-- 		
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative z-10" @close="open = false">
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
                          Shopping cart
                        </DialogTitle>
                        <div class="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            class="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            @click="open = false"
                          >
                            <span class="sr-only">Close panel</span>
                            <XIcon class="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div class="mt-8">
                        <div class="flow-root">
                          <ul
                            role="list"
                            class="-my-6 divide-y divide-gray-200"
                          >
                            <li
                              v-for="product in products"
                              :key="product.id"
                              class="flex py-6"
                            >
                              <div
                                class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
                              >
                                <img
                                  :src="product.imageSrc"
                                  :alt="product.imageAlt"
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
                                        {{ product.name }}
                                      </a>
                                    </h3>
                                    <p class="ml-4">{{ product.price }}</p>
                                  </div>
                                  <p class="mt-1 text-sm text-gray-500">
                                    {{ product.color }}
                                  </p>
                                </div>
                                <div
                                  class="flex flex-1 items-end justify-between text-sm"
                                >
                                  <p class="text-gray-500">
                                    Qty {{ product.quantity }}
                                  </p>

                                  <div class="flex">
                                    <button
                                      type="button"
                                      class="font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div
                        class="flex justify-between text-base font-medium text-gray-900"
                      >
                        <p>Subtotal</p>
                        <p>$262.00</p>
                      </div>
                      <p class="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div class="mt-6">
                        <a
                          href="#"
                          class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                          >Checkout</a
                        >
                      </div>
                      <div
                        class="mt-6 flex justify-center text-center text-sm text-gray-500"
                      >
                        <p>
                          or
                          <button
                            type="button"
                            class="font-medium text-indigo-600 hover:text-indigo-500"
                            @click="open = false"
                          >
                            Continue Shopping<span aria-hidden="true">
                              &rarr;</span
                            >
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
    </TransitionRoot> -->
  </div>
</template>
<script>
import axios from "axios";
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XIcon } from "@heroicons/vue/outline";
import BaseAvatar from "../BaseAvatar.vue";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  {
    id: 3,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  {
    id: 4,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  {
    id: 5,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  {
    id: 6,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];
export default {
  name: "Navbar",
  components: {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    XIcon,
    BaseAvatar,
  },
  setup() {
    let showMenu = ref(false);
    let open = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);

    return { showMenu, toggleNav, products, open };
  },
  data() {
    return {
      state: false,
      products: products,
      user_name: "",
    };
  },
  updated() {
    this.user_name = this.$store.getters.getUser.customer_firstname;
    const response = axios.get(
      "http://localhost:4000/api/customer/" +
        this.$store.getters.getUser.customer_id
    );
    console.log(response);
    this.user_name = response.customer_firstname;
  },
  mounted() {
    this.user_name = this.$store.getters.getUser.customer_firstname;
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/sign");
    },
  },
};
</script>
<style>
.fixed-top {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;
}
</style>
