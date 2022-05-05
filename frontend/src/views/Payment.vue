<script setup>
import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}
</script>
<template>
  <div>
    <Header />
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-10 font-ibm">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all"
              >
                <DialogTitle
                  as="h3"
                  class="text-2xl font-medium leading-6 text-gray-900"
                >
                  หลักฐานการชำระเงิน
                </DialogTitle>
                <div class="mt-2">
                  <div class="flex flex-col space-y-3 mt-4">
                    <label for="bank">โอนเงินจาก</label>
                    <input
                      type="text"
                      name="bank"
                      id="bank"
                      class="border-2 rounded-md border-gray-2 px-4 py-3"
                    />
                  </div>
                  <div class="flex flex-col space-y-3 mt-4">
                    <label for="adminbank">ไปยังธนาคาร</label>
                    <input
                      type="text"
                      name="adminbank"
                      id="adminbank"
                      class="border-2 rounded-md border-gray-2 px-4 py-3"
                    />
                  </div>
                  <div class="flex flex-col space-y-3 mt-4">
                    <label for="money">จำนวนเงิน</label>
                    <input
                      type="text"
                      name="money"
                      id="money"
                      class="border-2 rounded-md border-gray-2 px-4 py-3"
                    />
                  </div>
									<div class="flex flex-col space-y-3 mt-4">
                    <label for="money">สลิปการโอน</label>
                    <input
                      type="file"
                      name="slip"
                      id="slip"
                      class="border-2 rounded-md border-gray-2 px-4 py-3"
                    />
                  </div>
                </div>

                <div class="mt-4 flex space-x-2 justify-end">
                  <button
                    type="button"
                    class="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    @click="closeModal"
                  >
                    ยกเลิก
                  </button>
                  <button
                    type="button"
                    class="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-primary hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                    @click="closeModal"
                  >
                    ส่งหลักฐานการชำระเงิน
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
    <div
      class="font-bold font-ibm text-4xl underline text-primary container mx-auto px-5 mt-16"
    >
      รายการคำสั่งซื้อ
    </div>
    <div
      class="container font-ibm mx-auto px-5 h-[68vh] mb-20 pt-10 flex items-start justify-start flex-col space-y-10 overflow-x-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-slate-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
    >
      <div
        class="overflow-x-auto flex items-start justify-start flex-col space-y-10"
      >
        <div class="flex space-x-10">
          <div
            v-if="databystatus.length === 0"
            class="flex items-center justify-center h-96 w-[80vw] translate-x-10"
          >
            ไม่มีบิลค้างชำระ / ประวัติการชำระเงิน
          </div>
          <div v-for="invoice in databystatus" :key="invoice.invoice_id">
            <div class="w-[26rem] h-[30rem] my-10">
              <router-link
                :to="`/invoice/${invoice.invoice_id}`"
                class="p-7 flex items-start justify-between flex-col h-96 shadow-lg border-2 rounded-md hover:border-[3px] hover:shadow-xl transition-all ease-in-out duration-200 hover:-translate-y-1"
              >
                <p class="text-4xl font-bold">
                  #INVOICE : {{ invoice.invoice_id }}{{ user.customer_id
                  }}{{ invoice.invoice_order_id }}{{ invoice.invoice_bank_id }}
                </p>

                <div class="text-3xl">
                  สถานะ
                  <p
                    v-if="invoice.invoice_status === 'reserved'"
                    class="text-red-500 text-4xl font-bold"
                  >
                    รอการชำระเงิน
                  </p>
                  <p
                    v-if="invoice.invoice_status === 'paid'"
                    class="text-green-500 text-4xl font-bold"
                  >
                    ชำระเงินสำเร็จ
                  </p>
                  <div
                    v-if="invoice.invoice_status === 'delivered'"
                    class="text-blue-500 text-4xl font-bold"
                  >
                    จัดสิ่งสินค้าเรียบร้อย
                  </div>
                  <p
                    v-if="invoice.invoice_status === 'cancel'"
                    class="text-gray-400 text-4xl font-bold"
                  >
                    คำสั่งซื้อถูกยกเลิก
                  </p>
                  <p
                    v-if="invoice.invoice_status === 'waiting'"
                    class="text-orange-500 text-4xl font-bold"
                  >
                    รอการตรวจสอบ
                  </p>
                </div>
                <p v-if="!invoice.invoice_ems" class="ml-40">
                  <!-- จำนวนเงิน : {{ invoice.invoice_total }} บาท -->
                </p>
                <p v-if="invoice.invoice_ems" class="ml-36">
                  EMS : {{ invoice.invoice_ems }}
                </p>
              </router-link>
              <button
                v-if="invoice.invoice_status === 'reserved'"
                @click="openModal"
                class="w-full mt-3 bg-slate-800 text-white px-4 py-3 rounded-md font-bold hover:bg-slate-900 transition-all ease-in-out duration-200"
              >
                ชำระเงิน
              </button>
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
export default {
  data() {
    return {
      id: "",
      book: [],
      data: [],
      category: [],
      user: [],
    };
  },
  created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("/sign");
    }
    this.user = this.$store.getters.getUser;
    // axios get invoice data which invoice_customer_id = this.user.customer_id
    axios
      .get(`http://localhost:4000/api/payment/${this.user.customer_id}`)
      .then((res) => {
        this.data = res.data.result;
        // axios get order
        axios
          .get(`http://localhost:4000/api/order/${this.user.customer_id}`)
          .then((res) => {
            this.book = res.data.result;
            // append order total price with tag to this.data
            this.data.forEach((invoice) => {
              this.book.forEach((order) => {
                if (invoice.invoice_order_id === order.order_id) {
                  invoice.invoice_total = order.order_price;
                }
              });
            });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {
    priceoforder() {
      let total = 0;
      for (let i = 0; i < this.book.length; i++) {
        total += this.book[i].order_price;
      }
      return total;
    },
    databystatus() {
      // re arrage data by invoice_status start from reserved to waiting to paid to delivered to cancel re arrange all to 1 array
      let data = [];
      this.data.forEach((item) => {
        if (item.invoice_status === "reserved") {
          data.push(item);
        }
      });
      this.data.forEach((item) => {
        if (item.invoice_status === "waiting") {
          data.push(item);
        }
      });
      this.data.forEach((item) => {
        if (item.invoice_status === "paid") {
          data.push(item);
        }
      });
      this.data.forEach((item) => {
        if (item.invoice_status === "delivered") {
          data.push(item);
        }
      });
      this.data.forEach((item) => {
        if (item.invoice_status === "cancel") {
          data.push(item);
        }
      });
      return data;
    },
  },
};
</script>

<style></style>
