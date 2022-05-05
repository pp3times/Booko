<template>
  <div>
    <Header />

    <section>
      <h1 class="sr-only">Checkout</h1>

      <div class="relative mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 relative">
          <div class="py-12 bg-gray-50 md:py-24">
            <div class="max-w-lg px-4 mx-auto lg:px-1">
              <div class="flex items-center">
                <span
                  class="w-10 h-10 bg-gradient-to-r from-primary to-primary-dark rounded-full"
                ></span>

                <h2 class="ml-4 font-medium">Booko</h2>
              </div>

              <div class="mt-8">
                <p class="text-2xl font-medium tracking-tight">
                  ยอดสุทธิ {{ totalpricewithvat }} +
                  <span class="text-gray-500">
                    VAT 7% จาก ( {{ total }} บาท )</span
                  >
                </p>
                <p class="mt-1 text-sm text-gray-500">
                  จากหนังสือ {{ totalbook }} รายการ ดังนี้
                </p>
              </div>

              <div class="mt-12">
                <div class="flow-root">
                  <ul class="-my-4 divide-y divide-gray-200">
                    <li
                      class="flex items-center justify-between py-4"
                      v-for="cart in cart"
                      :key="cart.book_id"
                    >
                      <div class="flex items-start">
                        <img
                          class="flex-shrink-0 object-cover w-16 h-16 rounded-lg"
                          :src="cart.book_coversrc"
                          alt=""
                        />

                        <div class="ml-4">
                          <p class="text-sm">{{ cart.book_name }}</p>

                          <dl class="mt-1 space-y-1 text-xs text-gray-500">
                            <div>
                              <dt class="inline">ผู้แต่ง :</dt>
                              <dd class="inline">{{ cart.book_author }}</dd>
                            </div>

                            <div>
                              <dt class="inline">สำนักพิมพ์ :</dt>
                              <dd class="inline">{{ cart.book_publisher }}</dd>
                            </div>
                          </dl>
                        </div>
                      </div>

                      <div>
                        <p class="text-sm">
                          ราคา {{ cart.book_price }} บาท
                          <small class="text-gray-500">
                            x {{ cart.quantity }}</small
                          >
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="py-12 bg-white md:py-24 sticky top-56 h-screen">
            <div class="max-w-lg px-4 mx-auto lg:px-8">
              <form class="grid grid-cols-6 gap-4">
                <div class="col-span-3">
                  <label
                    class="block mb-1 text-sm text-gray-600"
                    for="first_name"
                  >
                    First Name
                  </label>

                  <input
                    class="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                    type="text"
                    id="frst_name"
                    v-model="first_name"
                  />
                </div>

                <div class="col-span-3">
                  <label
                    class="block mb-1 text-sm text-gray-600"
                    for="last_name"
                  >
                    Last Name
                  </label>

                  <input
                    class="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                    type="text"
                    id="last_name"
                    v-model="last_name"
                  />
                </div>

                <div class="col-span-6">
                  <label class="block mb-1 text-sm text-gray-600" for="email">
                    Email
                  </label>

                  <input
                    class="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                    type="email"
                    id="email"
                    v-model="email"
                  />
                </div>

                <div class="col-span-6">
                  <label class="block mb-1 text-sm text-gray-600" for="phone">
                    Phone
                  </label>

                  <input
                    class="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                    type="tel"
                    id="phone"
                    v-model="phone"
                  />
                </div>
                <fieldset class="col-span-6">
                  <legend class="block mb-1 text-sm text-gray-600">
                    เลือกธนาคารที่ต้องการชำระ
                  </legend>

                  <div class="-space-y-px bg-white rounded-lg shadow-sm">
                    <div>
                      <label class="sr-only" for="bank">bank</label>

                      <select
                        class="border-gray-200 relative rounded-t-lg w-full focus:z-10 text-sm p-2.5"
                        id="bank"
                        name="bank"
                        autocomplete="bank-name"
                        v-model="bank"
                      >
                        <option value="" selected>
                          เลือกธนาคารที่ต้องการชำระ
                        </option>
                        <option
                          v-for="mybank in getbank"
                          :key="mybank.bank_id"
                          :value="mybank.bank_id"
                        >
                          {{ mybank.bank_name }} -
                          {{ mybank.bank_account_number }} ชื่อ
                          {{ mybank.bank_account_name }}
                        </option>
                      </select>
                    </div>
                  </div>
                </fieldset>

                <fieldset class="col-span-6">
                  <legend class="block mb-1 text-sm text-gray-600">
                    ที่อยู่สำหรับจัดส่ง
                  </legend>

                  <div class="-space-y-px bg-white rounded-lg shadow-sm">
                    <div>
                      <label class="sr-only" for="address">address</label>

                      <select
                        class="border-gray-200 relative rounded-t-lg w-full focus:z-10 text-sm p-2.5"
                        id="address"
                        name="address"
                        autocomplete="address-name"
                        v-model="address"
                      >
                        <option value="" selected>
                          เลือกที่อยู่สำหรับจัดส่ง
                        </option>
                        <option
                          v-for="myaddress in getaddress"
                          :key="myaddress.address_id"
                          :value="myaddress.address_id"
                        >
                          {{ myaddress.address_title }}
                        </option>
                      </select>
                    </div>
                  </div>
                </fieldset>

                <div class="col-span-6">
                  <div
                    class="cursor-pointer rounded-lg bg-black text-sm p-2.5 text-white w-full block"
                    @click="checkOut"
                  >
                    Confirm Checkout
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      cart: [],
      user: {},
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      bank: "",
      getbank: [],
      getaddress: [],
      address: "",
    };
  },
  methods: {
    checkOut() {
      // create order
      axios
        .post("http://localhost:4000/api/order/add", {
          order_customer_id: this.user.customer_id,
          order_price: this.totalpricewithvat,
          order_quantity: this.totalbook,
          order_address_id: this.address,
        })
        .then((response) => {
          // axios loop add this.cart
          for (let i = 0; i < this.cart.length; i++) {
            axios
              .post("http://localhost:4000/api/orderitem/add", {
                order_items_order_id: response.data.result.insertId,
                order_items_book_id: this.cart[i].book_id,
                order_items_quantity_per_book: this.cart[i].quantity,
                order_items_totalprice_per_book: this.cart[i].book_price,
              })

              .then((response) => {
                console.log(response);
              });
          }
          axios
            .post("http://localhost:4000/api/invoice/add", {
              invoice_order_id: response.data.result.insertId,
              invoice_customer_id: this.user.customer_id,
              invoice_address: this.address,
              invoice_bank_id: this.bank,
              invoice_firstname: this.first_name,
              invoice_lastname: this.last_name,
              // invoice_email: this.email,
              invoice_phone: this.phone,
            })
            .then((response) => {
              console.log(response);
            });
        });
      for (const x of this.cart) {
        axios.post("http://localhost:4000/api/book/update", {
          book_id: x.book_id,
          book_stock: x.book_stock - x.quantity,
        });
      }
      localStorage.removeItem("cart");

      // for (let j = 0; j < this.cart.length; j++) {
      // 	this.cart[j].quantity = 0;
      //   axios
      //     .post("http://localhost:4000/api/book/update", {
      //       book_id: this.cart[j].book_id,
      //       book_stock: this.cart[j].book_stock - this.cart[j].quantity,
      //     })
      //     .then((response) => {
      //       // console.log(response);
      //       // clear cart
      //       this.cart = [];
      //       // clear total
      //       this.total = 0;
      //       // clear totalbook
      //       this.totalbook = 0;
      //       // clear address
      //       this.address = "";
      //       // clear bank
      //       this.bank = "";
      //       // clear first_name
      //       this.first_name = "";
      //       // clear last_name
      //       this.last_name = "";
      //       // clear email
      //       this.email = "";
      //       // clear phone
      //       this.phone = "";
      //     });
      // }
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "Ordering is successfully",
      });
    },
  },

  // get cart from local storage
  created() {
    this.cart = JSON.parse(localStorage.getItem("cart"));
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("/sign");
    }
    this.user = this.$store.getters.getUser;

    // get bank from axios
    axios.get("http://localhost:4000/api/bank").then((res) => {
      this.getbank = res.data.result;
    });

    // get address from axios
    axios.get("http://localhost:4000/api/address").then((res) => {
      this.getaddress = res.data.result.filter(
        (address) => address.customer_id === this.user.customer_id
      );
    });
  },
  mounted() {
    this.first_name = this.user.customer_firstname;
    this.last_name = this.user.customer_lastname;
    this.email = this.user.customer_mail;
    this.phone = this.user.customer_phone;

    // this.getaddress = this.getaddress.filter(
    //   (address) => address.customer_id === this.user.customer_id
    // );
  },
  updated() {
    // get product from local storage name cart
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      this.cart = cart;
    }
  },
  computed: {
    total() {
      let total = 0;
      this.cart.forEach((product) => {
        total += product.quantity * product.book_price;
      });
      return total;
    },
    totalbook() {
      let total = 0;
      this.cart.forEach((product) => {
        total += product.quantity;
      });
      return total;
    },
    totalpricewithvat() {
      let total = 0;
      this.cart.forEach((product) => {
        total += product.quantity * product.book_price * (1 + 0.07);
      });
      return total.toFixed(2);
    },
  },
};
</script>

<style></style>
