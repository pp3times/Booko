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
    <!-- Edit Bank -->
    <TransitionRoot appear :show="edit_modal" as="template">
      <Dialog as="div" @close="closeEditModal" class="relative z-10">
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
                  Edit Bank
                </DialogTitle>
                <div class="mt-5">
                  <!-- <p class="text-sm text-gray-500">
                    Your payment has been successfully submitted. We’ve sent you
                    an email with all of the details of your order.
                  </p> -->
                  <form action="" class="space-y-5">
                    <div>
                      <label for="bank_name" class="text-md font-medium"
                        >ชื่อธนาคาร</label
                      >

                      <div class="relative mt-1">
                        <input
                          type="text"
                          id="bank_name"
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
                          placeholder="กรุณากรอกชื่อธนาคาร"
                          v-model="edit_bank_name"
                        />
                      </div>
                    </div>

                    <div>
                      <label for="bank_account_name" class="text-md font-medium"
                        >ชื่อจริง - นามสกุล</label
                      >

                      <div class="relative mt-1">
                        <input
                          type="text"
                          id="bank_account_name"
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
                          placeholder="กรุณากรอกชื่อจริงและนามสกุล"
                          v-model="edit_bank_account_name"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        for="bank_account_number"
                        class="text-md font-medium"
                        >เลขที่บัญชี</label
                      >

                      <div class="relative mt-1">
                        <input
                          type="text"
                          id="bank_account_number"
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
                          placeholder="กรุณากรอกเลขบัญชี"
                          v-model="edit_bank_account_number"
                        />
                      </div>
                    </div>


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
                        @click="updateBank"
                      >
                        Edit
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
                        @click="closeEditModal()"
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
    <!-- Create Bank -->
    <TransitionRoot appear :show="create_modal" as="template">
      <Dialog as="div" @close="closeCreateModal" class="relative z-10">
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
                  Add New Bank
                </DialogTitle>
                <div class="mt-5">
                  <!-- <p class="text-sm text-gray-500">
                    Your payment has been successfully submitted. We’ve sent you
                    an email with all of the details of your order.
                  </p> -->
                  <form action="" class="space-y-5">
                    <div>
                      <label for="bank_name" class="text-md font-medium"
                        >ชื่อธนาคาร</label
                      >

                      <div class="relative mt-1">
                        <input
                          type="text"
                          id="bank_name"
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
                          placeholder="กรุณากรอกชื่อธนาคาร"
                          v-model="new_bank_name"
                        />
                      </div>
                    </div>

                    <div>
                      <label for="bank_account_name" class="text-md font-medium"
                        >ชื่อจริง - นามสกุล</label
                      >

                      <div class="relative mt-1">
                        <input
                          type="text"
                          id="bank_account_name"
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
                          placeholder="กรุณากรอกชื่อจริงและนามสกุล"
                          v-model="new_bank_account_name"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        for="bank_account_number"
                        class="text-md font-medium"
                        >เลขที่บัญชี</label
                      >

                      <div class="relative mt-1">
                        <input
                          type="text"
                          id="bank_account_number"
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
                          placeholder="กรุณากรอกเลขบัญชี"
                          v-model="new_bank_account_number"
                        />
                      </div>
                    </div>

                    <p v-if="errors.length" class="mt-4 text-red-500">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
  </p>

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
                        @click="saveBank()"
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
                        @click="closeCreateModal()"
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
      <h2 class="text-2xl text-gray-600">Bank Account</h2>

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
      <div class="p-8 bg-white rounded">
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
          <div>
            <div>
              <button
                @click="openCreateModal"
                class="
                  flex
                  items-center
                  bg-green-500
                  p-2
                  text-white
                  rounded
                  text-sm
                  hover:bg-green-600
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>

                Add Bank
              </button>
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
              <th class="text-left text-gray-600">Bank ID</th>
              <th class="text-left text-gray-600">Bank Name</th>
              <th class="text-left text-gray-600">Name</th>
              <th class="text-left text-gray-600">Account No.</th>
              <th class="text-right text-gray-600">ACTIONS</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="bank in all_bank" :key="bank.bank_id">
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
                      bank.bank_id
                    }}</a>
                  </div>
                </div>
              </td>
              <td>
                {{ bank.bank_name }}
              </td>
              <td>{{ bank.bank_account_name }}</td>
              <td>{{ bank.bank_account_number }}</td>
              <td class="text-right">
                <Menu as="div" class="relative inline-block text-left">
                  <div>
                    <MenuButton
                      class="
                        inline-flex
                        justify-center
                        w-full
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-white
                        rounded-md
                        bg-gray-500
                        hover:bg-gray-600
                        focus:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-white
                        focus-visible:ring-opacity-75
                      "
                    >
                      Actions
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="
                          w-5
                          h-5
                          ml-2
                          -mr-1
                          text-violet-200
                          hover:text-violet-100
                        "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </MenuButton>
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
                            @click="openEditModal(bank.bank_id)"
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
                            @click="deleteBankModal(bank.bank_id)"
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
                    <p class="text-sm text-gray-500">
                      Showing
                      <span class="font-medium">1</span>
                      to
                      <span class="font-medium">5</span>
                      of
                      <span class="font-medium">42</span>
                      results
                    </p>
                  </div>
                  <div>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
    <h2 class="ml-8 text-2xl text-gray-600 mt-12">Payment</h2>
    <div class="p-4 mt-8 sm:px-8 sm:py-4">
      <div class="p-8 bg-white rounded">
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
          <div></div>
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
              <th class="text-left text-gray-600">Payment ID</th>
              <th class="text-left text-gray-600">Invoice ID</th>
              <th class="text-left text-gray-600">Name</th>
              <th class="text-left text-gray-600">Payment Amount</th>
              <th class="text-right text-gray-600">Payment Time</th>
              <th class="text-right text-gray-600">Image</th>
              <th class="text-right text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="payment in all_payment" :key="payment.payment_id">
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
                      payment.payment_id
                    }}</a>
                  </div>
                </div>
              </td>
              <td>
                {{ payment.payment_invoice_id }}
              </td>
              <td>
                {{ payment.invoice_firstname + " " + payment.invoice_lastname }}
              </td>
              <td>{{ payment.payment_amount }}</td>
              <td class="text-right">{{ payment.payment_datetime }}</td>
              <td class="text-right">
                  <a :href="'http://localhost:3000/'+payment.payment_image" class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
  View
</a>
              </td>
              <td class="text-right">
                <button
                @click="checkPayment(payment.payment_invoice_id, payment.invoice_order_id, payment.payment_id)"
                  class="
                    bg-white
                    hover:bg-gray-100
                    text-gray-800
                    font-semibold
                    py-2
                    px-4
                    border border-gray-400
                    rounded
                    shadow
                  "
                  v-if="payment.invoice_check == null"
                >
                  Check
                </button>
                <span v-else
                  >Check By admin ID : {{ payment.invoice_check }}</span
                >
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
                    <p class="text-sm text-gray-500">
                      Showing
                      <span class="font-medium">1</span>
                      to
                      <span class="font-medium">5</span>
                      of
                      <span class="font-medium">42</span>
                      results
                    </p>
                  </div>
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

  setup() {
    const selectAll = ref(false);

    return {
      userList,
      selectAll,
    };
  },
  data() {
    return {
      all_bank: [],
      new_bank_name: "",
      new_bank_account_name: "",
      new_bank_account_number: "",
      create_modal: false,
      edit_bank_id: null,
      edit_modal: false,
      edit_bank_name: "",
      edit_bank_account_name: "",
      edit_bank_account_number: "",
      all_payment: [],
      admin: null,
      errors: [],
    };
  },
  created() {
    this.getBank();
    this.getPayment();
    this.admin = this.$store.getters.getAdmin;
  },

  methods: {
    openCreateModal() {
      this.create_modal = true;
    },
    closeCreateModal() {
      this.create_modal = false;
    },
    openEditModal(id) {
      this.edit_bank_id = id;
      this.edit_modal = true;
      this.getBankById(id);
    },
    closeEditModal() {
      this.edit_modal = false;
    },
    deleteBankModal(id) {
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
          this.deleteBank(id);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    async getBank() {
      try {
        const response = await axios.get("http://localhost:4000/api/bank");
        this.all_bank = response.data.result;
      } catch (err) {
        console.log(err);
      }
    },
    async saveBank() {
      try {
    //       new_bank_name: "",
    //   new_bank_account_name: "",
    //   new_bank_account_number: "",
    if(!this.new_bank_name || !this.new_bank_account_name || !this.new_bank_account_number){
        if (!this.new_bank_name) {
        this.errors.push('Bank name required.');
        }
      if (!this.new_bank_account_name) {
        this.errors.push('Bank Account name required.');
      }
      if (!this.new_bank_account_number) {
        this.errors.push('Bank Account name required.');
      }
    }
    else{
        await axios.post("http://localhost:4000/api/bank", {
          bank_name: this.new_bank_name,
          bank_account_name: this.new_bank_account_name,
          bank_account_number: this.new_bank_account_number,
        });
        this.new_bank_name = "";
        this.new_bank_account_name = "";
        this.new_bank_account_number = "";
        this.create_modal = false;
        this.getBank();
    }
        // this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
    async getBankById(id) {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/bank/" + id
        );
        this.edit_bank_name = response.data.bank_name;
        this.edit_bank_account_name = response.data.bank_account_name;
        this.edit_bank_account_number = response.data.bank_account_number;
      } catch (err) {
        console.log(err);
      }
    },
    async updateBank() {
      try {
        await axios.put("http://localhost:4000/api/bank/" + this.edit_bank_id, {
          bank_name: this.edit_bank_name,
          bank_account_name: this.edit_bank_account_name,
          bank_account_number: this.edit_bank_account_number,
        });
        this.closeEditModal();
        this.getBank();
      } catch (err) {
        console.log(err);
      }
    },
    async deleteBank(id) {
      try {
        await axios.delete("http://localhost:4000/api/bank/" + id);
        this.getBank();
      } catch (err) {
        console.log(err);
      }
    },
    async getPayment() {
      try {
        const response = await axios.get("http://localhost:4000/api/payment");
        this.all_payment = response.data;
        this.all_payment.forEach(function (payment) {
          payment.payment_datetime = new Date(
            payment.payment_datetime
          ).toTimeString();
        });
      } catch (err) {
        console.log(err);
      }
    },
    async checkPayment(invoice_id, invoice_order_id, payment_id) {
      try {
        await axios.put(
          "http://localhost:4000/api/invoice/" + invoice_id,
          {
            invoice_check : this.admin.admin_id,
            invoice_status : "paid",
          }
        );
        await axios.put(
          "http://localhost:4000/api/order/" + invoice_order_id,
          {
            order_status : "shipping",
          }
        );
        await axios.put(
          "http://localhost:4000/api/payment/" + payment_id,
          {
            payment_status : "correct",
          }
        );
        this.getPayment();
      } catch (err) {
        console.log(err);
      }
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
