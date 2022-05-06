<script setup>
import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { CheckIcon, SelectorIcon } from "@heroicons/vue/solid";
const people = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];
const selectedPerson = ref(people[0]);

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
                class="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
              >
                <DialogTitle
                  as="h3"
                  class="text-lg font-medium leading-6 text-gray-900"
                >
                  Add Category
                </DialogTitle>
                <div class="mt-2">
                  <!-- <p class="text-sm text-gray-500">
                    Your payment has been successfully submitted. We’ve sent you
                    an email with all of the details of your order.
                  </p> -->
                  <form action="" class="space-y-5">
                    <div>
                      <label for="bookname" class="text-md font-medium"
                        >ชื่อหมวดหมู่</label
                      >

                      <div class="relative mt-1">
                        <input
                          type="text"
                          id="bookname"
                          class="form-input w-full px-4 py-3 text-sm border-gray-200 focus-visible:border-primary-light focus:border-primary-light focus:ring-primary focus:shadow-primary border rounded-lg shadow-sm"
                          placeholder="กรุณากรอกชื่อหนังสือ"
                          v-model="category_name"
                        />
                      </div>
                    </div>

                    <div class="mt-4 space-x-2 flex justify-end">
                      <button
                        type="button"
                        class="focus:outline-none inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-primary hover:bg-primary-light focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        @click="saveCategory"
                      >
                        Create
                      </button>
                      <button
                        type="button"
                        class="focus:outline-none inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
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
      <h2 class="text-2xl text-gray-600">Category List</h2>

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
        <span class="text-gray-600">Books</span>
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
                class="w-full py-2 text-sm text-gray-900 rounded-md pl-10 border border-gray-300 focus:outline-none focus:ring-gray-500 focus:z-10"
                placeholder="Search user"
              />
            </div>
          </div>
          <div>
            <div>
              <button
                @click="openModal"
                class="flex items-center bg-green-500 p-2 text-white rounded text-sm hover:bg-green-600"
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

                Create New
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
                  class="h-5 w-5 text-blue-500 border-gray-300 rounded cursor-pointer focus:ring-0"
                />
              </th>
              <th class="text-left text-gray-600">ข้อมูลหนังสือ</th>
              <th class="text-left text-gray-600">จำนวนหนังสือ</th>
              <th class="text-left text-gray-600">สต็อกสินค้า</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="category in categories" :key="category.id">
              <td class="p-2">
                <input
                  type="checkbox"
                  class="h-5 w-5 text-blue-500 border-gray-300 rounded cursor-pointer focus:ring-0"
                  :checked="selectAll"
                />
              </td>
              <td class="flex items-center py-4">
                <div class="px-4 w-60">
                  <div>
                    <a href="#" class="text-gray-600 font-bolder">
                      {{ category.category_name }}
                    </a>
                  </div>
                </div>
              </td>
              <td></td>

              <td class="text-right">
                <Menu as="div" class="relative inline-block text-left">
                  <div>
                    <MenuButton
                      class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white rounded-md bg-gray-500 hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                    >
                      Actions
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
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
                      class="absolute right-0 w-32 mt-1 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50 focus:outline-none"
                    >
                      <div class="px-1 py-1">
                        <MenuItem v-slot="{ active }">
                          <button
                            :class="[
                              active
                                ? 'bg-red-400 text-white'
                                : 'text-gray-900',
                              'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                            ]"
                            @click="deleteUser(category.category_id)"
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
                  class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"
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
                    <nav
                      class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                      aria-label="Pagination"
                    >
                      <a
                        href="#"
                        class="relative inline-flex items-center px-2 rounded-l-md border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50"
                      >
                        <span class="sr-only">Previous</span>
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
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </a>
                      <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
                      <a
                        href="#"
                        aria-current="page"
                        class="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-1 border text-sm font-medium"
                      >
                        1
                      </a>
                      <a
                        href="#"
                        class="border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-1 border text-sm font-medium"
                      >
                        2
                      </a>
                      <a
                        href="#"
                        class="border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-1 border text-sm font-medium"
                      >
                        3
                      </a>
                      <span
                        class="relative inline-flex items-center px-4 py-1 border border-gray-300 text-sm font-medium text-gray-700"
                      >
                        ...
                      </span>
                      <a
                        href="#"
                        class="border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-1 border text-sm font-medium"
                      >
                        8
                      </a>
                      <a
                        href="#"
                        class="border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-1 border text-sm font-medium"
                      >
                        9
                      </a>
                      <a
                        href="#"
                        class="border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-1 border text-sm font-medium"
                      >
                        10
                      </a>
                      <a
                        href="#"
                        class="relative inline-flex items-center px-2 py-1 rounded-r-md border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50"
                      >
                        <span class="sr-only">Next</span>
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
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    </nav>
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
import books from "@/data/book/book.json";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ref } from "vue";
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
      categories: [],
      category_name: "",
      all_book: [],
      bookcount: 0,
    };
  },
  setup() {
    const selectAll = ref(false);

    return {
      books,
      userList,
      selectAll,
    };
  },

  created() {
    this.getCategories();
    this.getBooks();
  },
  computed: {
  },
  methods: {
    async getCategories() {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/categories"
        );
        this.categories = response.data;
      } catch (err) {
        console.log(err);
      }
    },
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
          axios.delete(`http://localhost:4000/api/categories/${id}`);
          const newBook = this.categories.filter(function (item) {
            return item.category_id !== id;
          });
          this.categories = newBook;
        }
      });
    },
    async saveCategory() {
      try {
        await axios.post("http://localhost:4000/api/categories", {
          category_name: this.category_name,
        });
        this.$router.go();
      } catch (err) {
        console.log(err);
      }
    },
    async getBooks() {
      try {
        const response = await axios.get("http://localhost:4000/api/books");
        this.all_book = response.data;
        // foreach change book_createAt format to date format and change book_updateAt format to date format
        this.all_book.forEach(function (book) {
          book.book_createAt = new Date(book.book_createAt).toDateString();
          book.book_updateAt = new Date(book.book_updateAt).toDateString();
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
