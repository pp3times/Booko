<template>
  <div>
    <Header />
    <div
      class="font-bold font-ibm text-4xl underline text-primary container mx-auto px-5 mt-16"
    >
      รายการคำสั่งซื้อ
    </div>
    <div
      class="container font-ibm mx-auto px-5 h-[68vh] mb-20 pt-10 flex items-start justify-start flex-col space-y-10 overflow-x-auto scrollbar-thin scrollbar-thumb-green-700 scrollbar-track-green-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
    >
      <div
        class="overflow-x-auto flex items-start justify-start flex-col space-y-10"
      >
        <div class="flex space-x-10">
          <div v-for="invoice in databystatus" :key="invoice.invoice_id">
            <div class="w-96 h-[30rem] my-10">
              <router-link
                :to="`/invoice/${invoice.invoice_id}`"
                class="p-7 flex items-start justify-between flex-col h-96 shadow-lg border-2 rounded-md hover:border-4 hover:shadow-xl transition-all ease-in-out duration-200 hover:-translate-y-1"
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
                  จำนวนเงิน 3,000 บาท
                </p>
                <p v-if="invoice.invoice_ems" class="ml-36">
                  EMS : {{ invoice.invoice_ems }}
                </p>
              </router-link>
              <button
                v-if="invoice.invoice_status === 'reserved'"
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
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {
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
