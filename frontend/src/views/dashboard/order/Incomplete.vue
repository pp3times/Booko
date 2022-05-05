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
                class="
                  w-full
                  max-w-lg
                  transform
                  overflow-hidden
                  rounded-2xl
                  bg-white
                  px-8
                  py-8
                  text-left
                  align-middle
                  shadow-xl
                  transition-all
                "
              >
                <DialogTitle
                  as="h3"
                  class="text-xl font-bold leading-6 text-primary"
                >
                  Add New User
                </DialogTitle>
                <div class="mt-5">
                  <!-- <p class="text-sm text-gray-500">
                    Your payment has been successfully submitted. We’ve sent you
                    an email with all of the details of your order.
                  </p> -->
                  <form action="" class="space-y-5">
                    <div>
                      <label for="firstname" class="text-md font-medium"
                        >ชื่อจริง
                        <span class="text-red-500"
                          >(ไม่ต้องมีคำนำหน้า)</span
                        ></label
                      >

                      <div class="relative mt-1">
                        <input
                          type="text"
                          id="firstname"
                          class="
                            form-input
                            w-full
                            px-4
                            py-3
                            text-sm
                            border-gray-200
                            focus-visible:border-primary-light
                            focus:border-primary-light
                            focus:ring-primary
                            focus:shadow-primary
                            border
                            rounded-lg
                            shadow-sm
                          "
                          placeholder="กรุณากรอกชื่อจริง"
                          v-model="firstname"
                        />
                      </div>
                    </div>

                    <div>
                      <label for="lastname" class="text-md font-medium"
                        >นามสกุล</label
                      >

                      <div class="relative mt-1">
                        <input
                          type="text"
                          id="lastname"
                          class="
                            form-input
                            w-full
                            px-4
                            py-3
                            text-sm
                            border-gray-200
                            focus-visible:border-primary-light
                            focus:border-primary-light
                            focus:ring-primary
                            focus:shadow-primary
                            border
                            rounded-lg
                            shadow-sm
                          "
                          placeholder="กรุณากรอกนามสกุล"
                          v-model="lastname"
                        />
                      </div>
                    </div>

                    <div>
                      <label for="email" class="text-md font-medium"
                        >อีเมลแอดเดรส</label
                      >

                      <div class="relative mt-1">
                        <input
                          type="email"
                          id="email"
                          class="
                            form-input
                            w-full
                            pr-12
                            px-4
                            py-3
                            text-sm
                            border-gray-200
                            focus-visible:border-primary-light
                            focus:border-primary-light
                            focus:ring-primary
                            focus:shadow-primary
                            border
                            rounded-lg
                            shadow-sm
                          "
                          placeholder="กรุณากรอกอีเมลแอดเดรส"
                          v-model="mail"
                        />

                        <span
                          class="
                            absolute
                            inset-y-0
                            inline-flex
                            items-center
                            right-4
                          "
                        >
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
                      <label for="email" class="text-md font-medium"
                        >เบอร์โทรศัพท์มือถือ</label
                      >

                      <div class="relative mt-1">
                        <input
                          type="tel"
                          id="tel"
                          class="
                            form-input
                            w-full
                            px-4
                            py-3
                            text-sm
                            border-gray-200
                            focus-visible:border-primary-light
                            focus:border-primary-light
                            focus:ring-primary
                            focus:shadow-primary
                            border
                            rounded-lg
                            shadow-sm
                          "
                          placeholder="กรุณากรอกเบอร์โทรศััพท์มือถือ"
                          v-model="phone"
                        />
                      </div>
                    </div>

                    <div>
                      <label for="password" class="text-md font-medium"
                        >รหัสผ่าน</label
                      >

                      <div class="relative mt-1">
                        <input
                          type="password"
                          id="password"
                          class="
                            form-input
                            w-full
                            px-4
                            py-3
                            text-sm
                            border-gray-200
                            focus-visible:border-primary-light
                            focus:border-primary-light
                            focus:ring-primary
                            focus:shadow-primary
                            border
                            rounded-lg
                            shadow-sm
                          "
                          placeholder="Enter password"
                          v-model="password"
                        />
                      </div>
                    </div>

                    <div>
                      <label for="address" class="text-md font-medium"
                        >ที่อยู่ในการจัดส่งปัจจุบัน</label
                      >

                      <div class="relative mt-1">
                        <!-- <input
                          type="text"
                          id="address"
                          class="form-input w-full px-4 py-3 text-sm border-gray-200 focus-visible:border-primary-light focus:border-primary-light focus:ring-primary focus:shadow-primary border rounded-lg shadow-sm"
                          placeholder="Enter address"
                          v-model="address"
                        /> -->
                        <select
                          class="
                            form-select
                            w-full
                            px-4
                            py-3
                            text-sm
                            border-gray-200
                            focus-visible:border-primary-light
                            focus:border-primary-light
                            focus:ring-primary
                            focus:shadow-primary
                            border
                            rounded-lg
                            shadow-sm
                          "
                        >
                          <option>เลือกที่อยู่</option>
                          <option>เลือกที่อยู่</option>
                          <option>เลือกที่อยู่</option>
                        </select>
                      </div>
                    </div>
                    <!-- <button
                      @click="signUp"
                      class="block w-full px-5 py-3 text-md font-medium text-white bg-primary rounded-lg"
                    >
                      สมัครสมาชิก
                    </button> -->
                    <div class="mt-5 space-x-2 flex justify-end">
                      <button
                        type="button"
                        class="
                          focus:outline-none
                          inline-flex
                          justify-center
                          rounded-md
                          border border-transparent
                          bg-green-100
                          px-4
                          py-2
                          text-sm
                          font-medium
                          text-primary
                          hover:bg-primary-light
                          focus-visible:ring-2
                          focus-visible:ring-primary
                          focus-visible:ring-offset-2
                        "
                        @click="closeModal"
                      >
                        Create
                      </button>
                      <button
                        type="button"
                        class="
                          focus:outline-none
                          inline-flex
                          justify-center
                          rounded-md
                          border border-transparent
                          bg-red-100
                          px-4
                          py-2
                          text-sm
                          font-medium
                          text-red-900
                          hover:bg-red-200
                          focus-visible:ring-2
                          focus-visible:ring-red-500
                          focus-visible:ring-offset-2
                        "
                        @click="closeModal"
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
    <div class="flex justify-between px-4 mt-4 sm:px-8">
      <h2 class="text-2xl text-gray-600">Incomplete Order</h2>

      <div class="flex items-center space-x-1 text-xs">
        <router-link to="/dashboard" class="font-bold text-indigo-700"
          >Home</router-link
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-2 w-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
        <span class="text-gray-600">Users</span>
      </div>
    </div>

    <div class="p-4 mt-8 sm:px-8 sm:py-4">
      <div class="p-4 bg-white rounded">
        <div class="flex justify-between">
          <div>
            <div class="relative text-gray-400">
              <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
              <input
                id="search"
                name="search"
                type="search"
                class="
                  w-full
                  py-2
                  text-sm text-gray-900
                  rounded-md
                  pl-10
                  border border-gray-300
                  focus:outline-none focus:ring-gray-500 focus:z-10
                "
                placeholder="Search user"
              />
            </div>
          </div>
        </div>
        <table class="w-full mt-2 text-gray-500">
          <thead class="border-b">
            <tr>
              <th class="p-2 text-left text-gray-600">
                <input
                  v-model="selectAll"
                  type="checkbox"
                  class="
                    h-5
                    w-5
                    text-blue-500
                    border-gray-300
                    rounded
                    cursor-pointer
                    focus:ring-0
                  "
                />
              </th>
              <th class="text-left text-gray-600">Order ID</th>
              <th class="text-left text-gray-600">Name</th>
              <th class="text-left text-gray-600">Price</th>
              <th class="text-left text-gray-600">Quantity</th>
              <th class="text-right text-gray-600">Status</th>
              <th class="text-right text-gray-600">Create At</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="order in all_order" :key="order.order_id">
              <td class="p-2">
                <input
                  type="checkbox"
                  class="
                    h-5
                    w-5
                    text-blue-500
                    border-gray-300
                    rounded
                    cursor-pointer
                    focus:ring-0
                  "
                  :checked="selectAll"
                />
              </td>
              <td class="flex items-center py-4">
                <div class="px-4">
                  <div>
                    <a href="#" class="text-gray-600 font-bolder">{{
                      order.order_id
                    }}</a>
                  </div>
                </div>
              </td>
              <!-- <td>
                <span
                  v-if="user.isActive"
                  class="px-2 py-1 rounded text-xs text-white bg-green-500"
                  >Active</span
                >
                <span
                  v-else
                  class="px-2 py-1 rounded text-xs text-white bg-red-500"
                  >Suspended</span
                >
              </td> -->
              <td>{{ order.firstname + " " + order.lastname }}</td>
              <td>{{ order.order_price }}</td>
              <td>{{ order.order_quantity }}</td>
              <td class="text-right">
                <span
                  v-if="order.order_status == 'delivered'"
                  class="px-2 py-1 rounded text-xs text-white bg-green-500"
                  >{{order.order_status}}</span
                >
                <span
                  v-else
                  class="px-2 py-1 rounded text-xs text-white bg-red-500"
                  >{{order.order_status}}</span
                >
              </td>
              <td class="text-right">{{ order.order_createAt }}</td>
              <td class="text-right">
                <Menu as="div" class="relative inline-block text-left">
                  <div>
                    <button class="flex
                  items-center
                  bg-green-500
                  p-2
                  text-white
                  rounded
                  text-sm
                  hover:bg-green-600"
                  @click="checkOrder(order.order_id)">Check Order</button>
                  </div>

                  <transition
                    enter-active-class="transition duration-100 ease-out"
                    enter-from-class="transform scale-95 opacity-0"
                    enter-to-class="transform scale-100 opacity-100"
                    leave-active-class="transition duration-75 ease-in"
                    leave-from-class="transform scale-100 opacity-100"
                    leave-to-class="transform scale-95 opacity-0"
                  >
                    <MenuItems
                      class="
                        absolute
                        right-0
                        w-32
                        mt-1
                        origin-top-right
                        bg-white
                        divide-y divide-gray-100
                        rounded-md
                        shadow-lg
                        ring-1 ring-black ring-opacity-5
                        z-50
                        focus:outline-none
                      "
                    >
                      <div class="px-1 py-1">
                        <MenuItem v-slot="{ active }">
                          <button
                            :class="[
                              active
                                ? 'bg-gray-400 text-white'
                                : 'text-gray-900',
                              'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                            ]"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-5 h-5 mr-2 text-violet-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                              />
                            </svg>
                            Edit
                          </button>
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                          <button
                            @click="deleteUser(order.order_id)"
                            :class="[
                              active
                                ? 'bg-red-400 text-white'
                                : 'text-gray-900',
                              'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                            ]"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-5 h-5 mr-2 text-violet-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                            Delete
                          </button>
                        </MenuItem>
                      </div>
                    </MenuItems>
                  </transition>
                </Menu>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="7" class="py-2">
                <div
                  class="
                    hidden
                    sm:flex-1 sm:flex sm:items-center sm:justify-between
                  "
                >
                  <div>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import userList from "@/data/users/userList.json";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ref } from "vue";
import Swal from "sweetalert2";
import axios from "axios";

export default {
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
  },

  data() {
    return {
      all_order: [],
      all_customer: [],
      admin: null,
    };
  },

  setup() {
    const selectAll = ref(false);

    return {
      userList,
      selectAll,
    };
  },
  created() {
    this.getOrder();
    this.getCustomer();
    this.admin = this.$store.getters.getAdmin;
  },

  methods: {
    deleteUser(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.value) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    async getOrder() {
      try {
        const response = await axios.get("http://localhost:4000/api/order");
        this.all_order = response.data.filter(
          (order) => order.order_check == null
        );
        // foreach change book_createAt format to date format and change book_updateAt format to date format
        this.all_order.forEach(function (order) {
          order.order_createAt = new Date(order.order_createAt).toDateString();
        });
        const response2 = await axios.get("http://localhost:4000/api/customer");
        this.all_customer = response2.data;
        console.log(this.all_customer);
        console.log(
          this.all_customer.filter((customer) => customer.customer_id == "2")
        );
        this.all_order[0].firstname = "test";
        this.all_order.forEach(
          (order) =>
            (order.firstname = this.all_customer.filter(
              (customer) => customer.customer_id == order.order_customer_id
            )[0].customer_firstname)
        );
        this.all_order.forEach(
          (order) =>
            (order.lastname = this.all_customer.filter(
              (customer) => customer.customer_id == order.order_customer_id
            )[0].customer_lastname)
        );
      } catch (err) {
        console.log(err);
      }
    },
    async getCustomer() {
      try {
        const response = await axios.get("http://localhost:4000/api/customer");
        this.all_customer = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    checkOrder(id){
      Swal.fire({
        title: "Are you sure you want to checked this order?",
        text: "Make sure you select the right order",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Checked this order",
      }).then((result) => {
        if (result.value) {
          Swal.fire("Checked!", "Your order has been Checked.", "success");
          axios.put(
          "http://localhost:4000/api/orderCheck/"+id,
          {
            order_check : this.admin.admin_id,
          }
        ).then(function (){
          const response = axios.get("http://localhost:4000/api/order");
          this.all_order = response.data.filter(
          (order) => order.order_check == null
        );
        });
        }
      });
    },
    // selectAllUsers() {
    // 	this.selectAll.value = !this.selectAll.value;
    // 	this.userList.forEach(user => {
    // 		user.selected = this.selectAll.value;
    // 	});
    // },
    // selectUser(user) {
    // 	user.selected = !user.selected;
    // },
    // deleteSelectedUsers() {
    // 	const selectedUsers = this.userList.filter(user => user.selected);
    // 	if (selectedUsers.length > 0) {
    // 		Swal.fire({
    // 			title: 'Are you sure?',
    // 			text: "You won't be able to revert this!",
    // 			icon: 'warning',
    // 			showCancelButton: true,
    // 			confirmButtonColor: '#3085d6',
    // 			cancelButtonColor: '#d33',
    // 			confirmButtonText: 'Yes, delete it!'
    // 		}).then((result) => {
    // 			if (result.value) {
    // 				Swal.fire('Deleted!', 'Your file has been deleted.', 'success')
    // 			}
    // 		})
    // 	}
    // },
  },
};
</script>