<template>
  <div>
    <body
      class="bg-gray-200 font-ibm print:bg-white md:flex lg:flex xl:flex print:flex md:justify-center lg:justify-center xl:justify-center print:justify-center sf"
    >
      <div class="lg:w-1/12 xl:w-1/4"></div>
      <div
        class="w-full bg-white lg:w-full xl:w-2/3 lg:mt-20 lg:mb-20 lg:shadow-xl xl:mt-02 xl:mb-20 xl:shadow-xl print:transform print:scale-90"
      >
        <header
          class="flex flex-col items-center px-8 pt-20 text-lg text-center bg-white border-t-8 md:block lg:block xl:block print:block md:items-start lg:items-start xl:items-start print:items-start md:text-left lg:text-left xl:text-left print:text-left print:pt-8 print:px-2 md:relative lg:relative xl:relative print:relative"
          :class="{
            'border-primary': data.invoice_status === 'paid',
            'border-red-500': data.invoice_status === 'reserved',
            'border-yellow-500': data.invoice_status === 'waiting',
            'border-blue-500': data.invoice_status === 'delivered',
            'border-slate-500': data.invoice_status === 'cancel',
          }"
        >
          <!-- <img
            class="w-3/6 h-auto md:w-1/4 lg:ml-12 xl:ml-12 print:px-0 print:py-0"
            src="https://via.placeholder.com/200x100.png"
          /> -->
          <div
            class="w-3/6 h-auto md:w-1/4 lg:ml-12 xl:ml-12 print:px-0 print:py-0 text-5xl font-bold"
            :class="{
              'text-primary': data.invoice_status === 'paid',
              'text-red-500': data.invoice_status === 'reserved',
              'text-yellow-500': data.invoice_status === 'waiting',
              'text-blue-500': data.invoice_status === 'delivered',
              'text-slate-500': data.invoice_status === 'cancel',
            }"
          >
            Booko
          </div>
          <div
            class="flex flex-row mt-12 mb-2 ml-0 text-2xl font-bold md:text-3xl lg:text-4xl xl:text-4xl print:text-2xl lg:ml-12 xl:ml-12"
          >
            INVOICE
            <div
              class="text-primary"
              :class="{
                'text-primary': data.invoice_status === 'paid',
                'text-red-500': data.invoice_status === 'reserved',
                'text-yellow-500': data.invoice_status === 'waiting',
                'text-blue-500': data.invoice_status === 'delivered',
                'text-slate-500': data.invoice_status === 'cancel',
              }"
            >
              <span class="mr-4 text-sm"> </span> #
            </div>
            <span id="invoice_id" class="text-gray-500">
              {{ data.invoice_id }}{{ user.customer_id
              }}{{ data.invoice_order_id }}{{ data.invoice_bank_id }}</span
            >
          </div>
          <div class="flex flex-col lg:ml-12 xl:ml-12 print:text-sm">
            <!-- <span>Issue date: 2020.09.06</span> -->
            <span v-if="data.invoice_status === 'paid' || data.invoice_status === 'paid'">Paid date: 2020.09.07</span>
            <span>Due date: {{ datetimenow }}</span>
          </div>
          <div
            class="px-8 py-2 mt-16 text-3xl font-bold text-primary border-4 border-gray-200 border-dashed md:absolute md:right-0 md:top-0 md:mr-12 lg:absolute lg:right-0 lg:top-0 xl:absolute xl:right-0 xl:top-0 print:absolute print:right-0 print:top-0 lg:mr-20 xl:mr-20 print:mr-2 print:mt-8"
            :class="{
              'text-primary': data.invoice_status === 'paid',
              'text-red-500': data.invoice_status === 'reserved',
              'text-yellow-500': data.invoice_status === 'waiting',
              'text-blue-500': data.invoice_status === 'delivered',
              'text-slate-500': data.invoice_status === 'cancel',
            }"
          >
            {{ data.invoice_status }}
          </div>
          <contract
            class="flex flex-col m-12 text-center lg:m-12 md:flex-none md:text-left md:relative md:m-0 md:mt-16 lg:flex-none lg:text-left lg:relative xl:flex-none xl:text-left xl:relative print:flex-none print:text-left print:relative print:m-0 print:mt-6 print:text-sm"
          >
            <span
              class="font-extrabold md:hidden lg:hidden xl:hidden print:hidden"
              >FROM</span
            >
            <from class="flex flex-col">
              <span id="company-name" class="font-medium"
                >{{ data.invoice_firstname }}
                {{ data.invoice_lastname }}</span
              >
              <span id="company-country"
                ><span class="flag-icon flag-icon-us"></span>
                {{ filterAddress[0].address_province }}</span
              >
              <span id="company-address"
                >เลขที่ {{ filterAddress[0].address_number }} ถนน
                {{ filterAddress[0].address_road }}</span
              >
              <div class="flex-row">
                <span id="c-city"
                  >เขต {{ filterAddress[0].address_district }}</span
                >,
                <span id="c-postal"
                  >แขวง {{ filterAddress[0].address_subdistrict }}</span
                >
              </div>
              <span id="company-phone">{{
                filterAddress[0].address_phone
              }}</span>
              <span id="company-mail">{{ user.customer_mail }}</span>
            </from>
            <span
              class="mt-12 font-extrabold md:hidden lg:hidden xl:hidden print:hidden"
              >TO</span
            >
            <to
              class="flex flex-col md:absolute md:right-0 md:text-right lg:absolute lg:right-0 lg:text-right print:absolute print:right-0 print:text-right"
            >
              <span id="person-name" class="font-medium"
                >บริษัท บุ๊คโกะ คอร์ปอเรชั่น จำกัด</span
              >
              <span id="person-country"
                ><span class="flag-icon flag-icon-hu"></span>กรุงเทพมหานคร</span
              >
              <div class="flex-row">
                <span id="p-postal"> 222 ซอยราชปรารภ 3 </span>
                <span id="p-city">ถนนราชปรารภ</span>
              </div>
              <span id="person-address">แขวงถนนพญาไท เขตราชเทวี</span>
              <span id="person-phone">02-345-6789</span>
              <span id="person-mail">info@booko.com</span>
            </to>
          </contract>
        </header>
        <hr class="border-gray-300 md:mt-8 print:hidden" />
        <content>
          <div
            id="content"
            class="flex justify-center md:p-8 lg:p-20 xl:p-20 print:p-2"
          >
            <table
              class="w-full text-left table-auto print:text-sm"
              id="table-items"
            >
              <thead>
                <tr
                  class="text-white bg-primary-dark print:bg-gray-300 print:text-black"
                >
                  <th class="px-4 py-2">สินค้า</th>
                  <th class="px-4 py-2 text-right">จำนวน</th>
                  <th class="px-4 py-2 text-right">ราคาต่อชิ้น</th>
                  <th class="px-4 py-2 text-right">ราคาทั้งหมด</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in invoice_items" :key="index">
                  <td class="px-4 py-2 border hover:bg-gray-100">
                    {{ item.book_name }}
                  </td>
                  <td
                    class="px-4 py-2 text-right border tabular-nums slashed-zero hover:bg-gray-100"
                  >
                    {{ item.book_quantity }}
                  </td>
                  <td
                    class="px-4 py-2 text-right border tabular-nums slashed-zero hover:bg-gray-100"
                  >
                    {{ item.book_price }}
                  </td>
                  <td
                    class="px-4 py-2 text-right border tabular-nums slashed-zero hover:bg-gray-100"
                  >
                    {{ item.book_totalprice }}
                  </td>
                </tr>
                <tr
                  class="text-white bg-primary-dark print:bg-gray-300 print:text-black"
                >
                  <td class="invisible"></td>
                  <td class="invisible"></td>
                  <td class="px-4 py-2 text-right border">
                    <span class="flag-icon flag-icon-hu print:hidden"></span>
                    ยอดรวม
                  </td>
                  <td
                    class="px-4 py-2 text-right border tabular-nums slashed-zero"
                  >
                    {{ totalprice }}
                  </td>
                </tr>
                <tr
                  class="text-white bg-primary-dark print:bg-gray-300 print:text-black"
                >
                  <td class="invisible"></td>
                  <td class="invisible"></td>
                  <td class="px-4 py-2 text-right border">VAT</td>
                  <td
                    class="px-4 py-2 text-right border tabular-nums slashed-zero"
                  >
                    7%
                  </td>
                </tr>
                <tr
                  class="text-white bg-primary-dark print:bg-gray-300 print:text-black"
                >
                  <td class="invisible"></td>
                  <td class="invisible"></td>
                  <td class="px-4 py-2 font-extrabold text-right border">
                    ยอดรวมสุทธิ
                  </td>
                  <td
                    class="px-4 py-2 text-right border tabular-nums slashed-zero"
                  >
                    {{ totalpricetax }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </content>
        <payment-history v-if="data.invoice_status === 'paid'">
          <div class="mt-20 mb-20 print:mb-2 print:mt-2">
            <h2 class="text-xl font-semibold text-center print:text-sm">
              ประวัติการชำระเงิน
            </h2>
            <div class="flex flex-col items-center text-center print:text-sm">
              <p class="font-medium">
                2022/09/06 06:43PM
                <span class="font-light">
                  จำนวนเงิน <span class="font-extrabold">1,000</span> บาท
                  เข้าบัญชีธนาคารกสิกรไทย
                </span>
              </p>
            </div>
          </div>
        </payment-history>
        <div
          class="flex flex-col items-center mb-24 leading-relaxed print:mt-0 print:mb-0"
        >
          <span
            class="w-64 text-4xl text-center text-black border-b-2 border-black border-dotted opacity-75 sign print:text-lg"
            >{{ data.invoice_firstname }}</span
          >
          <span class="text-center mt-3">ผู้ซื้อ</span>
        </div>
        <footer
          class="flex flex-col items-center justify-center h-48 pb-6 leading-loose text-white bg-gradient-to-br from-primary to-primary-dark print:bg-white print:pb-0"
        >
          <span class="mt-4 text-xs print:mt-0"
            >ใบแจ้งหนี้ถูกสร้างขึ้นเมื่อ {{ datatimenow }}</span
          >
          <span class="mt-4 text-base print:text-xs"
            >© 2022 Booko. All rights reserved.</span
          >
          <span class="print:text-xs">{{ thailandtime }}</span>
        </footer>
      </div>
      <div class="lg:w-1/12 xl:w-1/4"></div>
    </body>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: [],
      id: 0,
      user: [],
      address: [],
      order: [],
      order_items: [],
      invoice_items: [],
      book: [],
    };
  },

  created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("/sign");
    }
    this.user = this.$store.getters.getUser;
    this.id = parseInt(this.$route.params.id);
    // axios get invoice data which invoice_customer_id = this.user.customer_id
    axios
      .get(`http://localhost:4000/api/invoice/${this.id}`)
      .then((res) => {
        this.data = res.data.result[0];
        axios
          .get(`http://localhost:4000/api/order/${this.user.customer_id}`)
          .then((res) => {
            this.order = res.data.result;
            this.order = this.order.filter((item) => {
              if (item.order_id === this.data.invoice_order_id) {
                return item;
              }
            });
            axios
              .get(
                `http://localhost:4000/api/orderitem/${this.order[0].order_id}`
              )
              .then((res) => {
                // console.log(this.order.order_id);
                this.order_items = res.data.result;
                axios
                  .get(`http://localhost:4000/api/books`)
                  .then((res) => {
                    this.book = res.data;
                    this.book = this.book.filter((item) => {
                      const book_id = this.order_items.map((item) => {
                        return item.order_items_book_id;
                      });
                      return book_id.includes(item.book_id);
                    });
                    // foreach and append
                    this.book.forEach((item) => {
                      this.invoice_items.push({
                        book_id: item.book_id,
                        book_name: item.book_name,
                        book_price: item.book_price,
                        book_quantity: this.order_items.filter((item2) => {
                          if (item2.order_items_book_id === item.book_id) {
                            return item2.order_items_quantity_per_book;
                          }
                        })[0].order_items_quantity_per_book,
                        // book_totalprice: new Intl.NumberFormat("th-TH", {
                        //   maximumSignificantDigits: 3,
                        // }).format(
                        //   this.order_items.filter((item2) => {
                        //     if (item2.order_items_book_id === item.book_id) {
                        //       return item2.order_items_quantity_per_book;
                        //     }
                        //   })[0].order_items_quantity_per_book * item.book_price
                        // ),
                        book_totalprice:
                          this.order_items.filter((item2) => {
                            if (item2.order_items_book_id === item.book_id) {
                              return item2.order_items_quantity_per_book;
                            }
                          })[0].order_items_quantity_per_book * item.book_price,
                      });
                    });
                    this.order_items.forEach((item2) => {
                      this.invoice_items.push({
                        order_items_book_id: item.book_id,
                        order_items_book_name: item.book_name,
                        order_items_book_price: item.book_price,
                        order_items_book_quantity: item2.order_items_quantity,
                        order_items_book_total: item2.order_items_total,
                      });
                    });
                    // console.log(this.invoice_items);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
    // axios
    //   .get(`http://localhost:4000/api/invoice`)
    //   .then((res) => {
    //     this.invoice = res.data.result;
    // 		this.invoice = this.invoice.filter(invoice => {
    // 			console.log(invoice.invoice_id)
    // 			if (invoice.invoice_id == this.id) {
    // 				return invoice
    // 			}
    // 		})
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    axios
      .get(`http://localhost:4000/api/address/${this.user.customer_id}`)
      .then((res) => {
        this.address = res.data.result;
      })
      .catch((err) => {
        console.log(err);
      });

    // axios
    //   .get(`http://localhost:4000/api/order/${this.user.customer_id}`)
    //   .then((res) => {
    //     this.order = res.data.result;
    // 		this.order = this.order.filter(item => {
    // 			if (item.order_id === this.data.invoice_order_id) {
    // 				return item
    // 			}
    // 		})
    //     axios
    //       .get(`http://localhost:4000/api/orderitem/${this.order.order_id}`)
    // 			console.log(`http://localhost:4000/api/orderitem/${this.order.order_id}`)
    //       .then((res) => {
    //         // console.log(this.order.order_id);
    //         this.order_items = res.data.result;
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  },
  computed: {
    thailandtime() {
      return `กรุงเทพมหานคร - 222 ซอยราชปรารภ 3 ถนนราชปรารภ แขวงถนนพญาไท เขตราชเทวี 02-345-6789`;
    },
    datatimenow() {
      return new Intl.DateTimeFormat("th-TH", {
        year: "numeric",
        month: "long",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      }).format(new Date());
    },
    datetimenow() {
      return new Intl.DateTimeFormat("th-TH", {
        year: "numeric",
        month: "numeric",
        day: "2-digit",
      }).format(new Date());
    },
    totalprice() {
      let total = 0;
      this.invoice_items.forEach((item) => {
        // total += parseFloat(item.book_totalprice.replace(",", ""));
        total += parseFloat(item.book_totalprice);
      });
      // return new Intl.NumberFormat("th-TH", {
      //   maximumSignificantDigits: 3,
      // }).format(total);
      return total;
    },
    totalpricetax() {
      let total = 0;
      this.invoice_items.forEach((item) => {
        // total += parseFloat(item.book_totalprice.replace(",", ""));
        total += parseFloat(item.book_totalprice);
      });
      // return new Intl.NumberFormat("th-TH", {
      //   maximumSignificantDigits: 3,
      // }).format(total * 1.07);
      return (total * 1.07).toFixed(2);
    },
    filterAddress() {
      return this.address.filter((address) => {
        return address.address_id === this.data.invoice_address;
      });
    },
    filterBook() {
      return this.book.filter((book) => {
        // console.log(book.book_id);
        // this.order_items.forEach((item) => {
        // 	return item
        //   // if (item.order_item_book_id == book.book_id) {
        //   //   // if (book.book_id === item.order_items_book_id ) {
        //   //   console.log(book.book_id, item.order_items_book_id);
        // 	// 	return book
        //   // }
        // });
        this.order_items.forEach((item) => {
          if (item.order_item_book_id === book.book_id) {
            return book;
          }
        });
        // return book.book_id === this.order_items.order_item_book_id;
      });
    },
  },
};
</script>

<style></style>
