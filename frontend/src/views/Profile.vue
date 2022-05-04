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
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-10">
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
                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
              >
                <DialogTitle
                  as="h3"
                  class="text-lg font-medium leading-6 text-gray-900"
                >
                  เพิ่มที่อยู่
                </DialogTitle>
                <div class="mt-2">
                  <form action="" class="space-y-4">
                    <div>
                      <label class="sr-only" for="title">ชื่อที่อยู่</label>
                      <input
                        class="w-full p-3 text-sm border-gray-200 rounded-lg"
                        placeholder="บ้าน, ออฟฟิศ, บ้านเพื่อน, หอพัก, โรงเรียน, อื่นๆ"
                        type="text"
                        id="title"
                        v-model="address_title"
                      />
                    </div>
                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label class="sr-only" for="house">บ้านเลขที่</label>
                        <input
                          class="w-full p-3 text-sm border-gray-200 rounded-lg"
                          placeholder="บ้านเลขที่"
                          type="text"
                          id="house"
                          v-model="address_number"
                        />
                      </div>

                      <div>
                        <label class="sr-only" for="phone">เบอร์ติดต่อ</label>
                        <input
                          class="w-full p-3 text-sm border-gray-200 rounded-lg"
                          placeholder="เบอร์ติดต่อ"
                          type="tel"
                          id="phone"
                          v-model="address_phone"
                        />
                      </div>
                    </div>
                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label class="sr-only" for="dis">เขต / อำเภอ</label>
                        <input
                          class="w-full p-3 text-sm border-gray-200 rounded-lg"
                          placeholder="เขต / อำเภอ"
                          type="text"
                          id="dis"
                          v-model="address_district"
                        />
                      </div>

                      <div>
                        <label class="sr-only" for="subdis">แขวง / ตำบล</label>
                        <input
                          class="w-full p-3 text-sm border-gray-200 rounded-lg"
                          placeholder="แขวง / ตำบล"
                          type="text"
                          id="subdis"
                          v-model="address_subdistrict"
                        />
                      </div>
                    </div>
                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
                      <div>
                        <label class="sr-only" for="road">ถนน</label>
                        <input
                          class="w-full p-3 text-sm border-gray-200 rounded-lg"
                          placeholder="ถนน"
                          type="text"
                          id="road"
                          v-model="address_road"
                        />
                      </div>
                      <div>
                        <label class="sr-only" for="province">จังหวัด</label>
                        <input
                          class="w-full p-3 text-sm border-gray-200 rounded-lg"
                          placeholder="จังหวัด"
                          type="text"
                          id="province"
                          v-model="address_province"
                        />
                      </div>

                      <div>
                        <label class="sr-only" for="zipcode"
                          >รหัสไปรษณีย์</label
                        >
                        <input
                          class="w-full p-3 text-sm border-gray-200 rounded-lg"
                          placeholder="รหัสไปรษณีย์"
                          type="text"
                          id="zipcode"
                          v-model="address_zipcode"
                        />
                      </div>
                    </div>

                    <!-- <div
                      class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3"
                    >
                      <div>
                        <input
                          class="sr-only"
                          id="option1"
                          type="radio"
                          tabindex="-1"
                        />
                        <label
                          for="option1"
                          class="block w-full p-3 border border-gray-200 rounded-lg"
                          tabindex="0"
                        >
                          <span class="text-sm font-medium"> Option 1 </span>
                        </label>
                      </div>

                      <div>
                        <input
                          class="sr-only"
                          id="option2"
                          type="radio"
                          tabindex="-1"
                        />
                        <label
                          for="option2"
                          class="block w-full p-3 border border-gray-200 rounded-lg"
                          tabindex="0"
                        >
                          <span class="text-sm font-medium"> Option 2 </span>
                        </label>
                      </div>

                      <div>
                        <input
                          class="sr-only"
                          id="option3"
                          type="radio"
                          tabindex="-1"
                        />
                        <label
                          for="option3"
                          class="block w-full p-3 border border-gray-200 rounded-lg"
                          tabindex="0"
                        >
                          <span class="text-sm font-medium"> Option 3 </span>
                        </label>
                      </div>
                    </div> -->

                    <!-- <div>
                      <label class="sr-only" for="message">Message</label>
                      <textarea
                        class="w-full p-3 text-sm border-gray-200 rounded-lg"
                        placeholder="Message"
                        rows="8"
                        id="message"
                      ></textarea>
                    </div> -->

                    <div class="mt-4 flex items-center justify-end space-x-3">
                      <div
                        @click="closeModal"
                        class="inline-flex cursor-pointer items-center justify-center w-full px-5 py-3 text-white bg-red-500 rounded-lg sm:w-auto"
                      >
                        <span class="font-medium">ยกเลิก</span>
                      </div>
                      <button
                        @click="addAddress"
                        class="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-primary rounded-lg sm:w-auto"
                      >
                        <span class="font-medium">เพิ่มที่อยู่</span>
                      </button>
                    </div>
                  </form>
                </div>

                <!-- <div class="mt-4">
                  <button
                    type="button"
                    class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    @click="closeModal"
                  >
                    Got it, thanks!
                  </button>
                </div> -->
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
    <Header />
    <div
      class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 font-sukhumvit"
    >
      <div class="max-w-lg mx-auto flex flex-col items-center">
        <BaseAvatar name="Jeremy" size="xl" color="red" />
        <h1 class="text-2xl font-bold sm:text-3xl mt-10">แก้ไขข้อมูลส่วนตัว</h1>

        <!-- <p class="mt-4 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
          nulla eaque error neque ipsa culpa autem, at itaque nostrum!
        </p> -->
      </div>

      <form action="" class="max-w-md mx-auto mt-8 mb-0 space-y-4">
        <div class="flex space-x-3">
          <div>
            <label for="firstname" class="sr-only">firstname</label>

            <div class="relative">
              <input
                type="text"
                class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="ชื่อ"
                v-model="firstname"
                id="firstname"
              />

              <span class="absolute inset-y-0 inline-flex items-center right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div>
            <label for="lastname" class="sr-only">lastname</label>

            <div class="relative">
              <input
                type="text"
                class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="นามสกุล"
              />

              <span class="absolute inset-y-0 inline-flex items-center right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div>
          <label for="email" class="sr-only">Email</label>

          <div class="relative">
            <input
              type="email"
              class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Enter email"
            />

            <span class="absolute inset-y-0 inline-flex items-center right-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>
        </div>

        <div>
          <label for="password" class="sr-only">Password</label>
          <div class="relative">
            <input
              type="password"
              class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Enter password"
            />

            <span class="absolute inset-y-0 inline-flex items-center right-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div class="border-dashed border-2 p-3">
          <label for="address" class="sr-only">ที่อยู่ทั้งหมด</label>
          <div
            class="relative"
            v-for="address in getaddress"
            :key="address.address_id"
          >
            <!-- <input
              type="text"
              class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-lg"
              placeholder="Enter address"
            /> -->
            <div
              class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-lg"
            >
              {{ address.address_title }}
            </div>
            <span class="absolute inset-y-0 inline-flex items-center right-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18 14.45v6.55h-16v-12h6.743l1.978-2h-10.721v16h20v-10.573l-2 2.023zm1.473-10.615l1.707 1.707-9.281 9.378-2.23.472.512-2.169 9.292-9.388zm-.008-2.835l-11.104 11.216-1.361 5.784 5.898-1.248 11.103-11.218-4.536-4.534z"
                />
              </svg>
            </span>
          </div>
          <div
            @click="openModal"
            class="inline-block cursor-pointer w-full px-5 py-3 text-sm font-medium text-white bg-primary rounded-lg mt-4"
          >
            เพิ่มที่อยู่
          </div>
        </div>

        <div class="w-full">
          <button
            type="submit"
            class="inline-block w-full px-5 py-3 text-sm font-medium text-white bg-primary rounded-lg"
          >
            แก้ไขข้อมูลส่วนตัว
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BaseAvatar from "@/components/BaseAvatar.vue";
export default {
  components: { BaseAvatar },
  data() {
    return {
      user: [],
      getaddress: [],
      address_fetch: [],
      address_title: "",
      address_number: "",
      address_road: "",
      address_district: "",
      address_subdistrict: "",
      address_province: "",
      address_zipcode: "",
      address_phone: "",
    };
  },
  methods: {
    // add address
    addAddress() {
      axios
        .post("http://localhost:4000/api/address/add", {
          address_title: this.address_title,
          address_number: this.address_number,
          address_road: this.address_road,
          address_district: this.address_district,
          address_subdistrict: this.address_subdistrict,
          address_province: this.address_province,
          address_zipcode: this.address_zipcode,
          address_phone: this.address_phone,
          customer_id: this.user.customer_id,
        })
        .then((response) => {
          this.address_title = "";
          this.address_number = "";
          this.address_road = "";
          this.address_district = "";
          this.address_subdistrict = "";
          this.address_province = "";
          this.address_zipcode = "";
          this.address_phone = "";
          this.getaddress = response.data;
          this.address_fetch = response.data;
          this.closeModal();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // add address from axios
    // axios
    //   .post("http://localhost:4000/api/address", {
    //     address_number: this.address_number,
    //     address_road: this.address_road,
    //     address_district: this.address_district,
    //     address_subdistrict: this.address_subdistrict,
    //     address_province: this.address_province,
    //     address_zipcode: this.address_zipcode,
    //     customer_id: this.user.customer_id,
    //     address_phone: this.address_phone,
    //   })
    //   .then((res) => {
    //     this.address_fetch = res.data.result;
    //   });
  },
  created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("/sign");
    }
    this.user = this.$store.getters.getUser;

    // get address from axios
    axios.get("http://localhost:4000/api/address").then((res) => {
      this.getaddress = res.data.result.filter(
        (address) => address.customer_id === this.user.customer_id
      );
    });

    axios
      .get(
        "https://raw.githubusercontent.com/earthchie/jquery.Thailand.js/master/jquery.Thailand.js/database/raw_database/raw_database.json"
      )
      .then((res) => {
        this.address_fetch = res.data;
      });
  },
};
</script>

<style></style>
