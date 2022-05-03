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
const editIsOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}
function closeEdit() {
  editIsOpen.value = false;
}
function openEdit() {
  editIsOpen.value = true;
}
</script>

<template>
  <div>
    <!-- Edit Book -->
    <TransitionRoot appear :show="editIsOpen" as="template">
      <Dialog as="div" @close="closeEdit" class="relative z-10">
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
                  max-w-xl
                  transform
                  overflow-hidden
                  rounded-2xl
                  bg-white
                  p-6
                  text-left
                  align-middle
                  shadow-xl
                  transition-all
                "
              >
                <DialogTitle
                  as="h3"
                  class="text-lg font-medium leading-6 text-gray-900"
                >
                  Add New Book
                </DialogTitle>
                <div class="mt-2">
                  <!-- <p class="text-sm text-gray-500">
                    Your payment has been successfully submitted. We’ve sent you
                    an email with all of the details of your order.
                  </p> -->
                  <form
                    action="http://localhost:4000/api/books"
                    method="post"
                    enctype="multipart/form-data"
                  >
                    <div>
                      <label for="bookname" class="text-md font-medium"
                        >ชื่อหนังสือ</label
                      >

                      <div class="relative mt-1">
                        <input
                          type="text"
                          id="bookname"
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
                          placeholder="กรุณากรอกชื่อหนังสือ"
                          name="bookname"
                          v-model="bookname"
                        />
                      </div>
                    </div>

                    <div>
                      <label for="description" class="text-md font-medium"
                        >รายละเอียดหนังสือ</label
                      >

                      <div class="relative mt-1">
                        <input
                          type="text"
                          id="description"
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
                          name="description"
                          v-model="description"
                        />
                      </div>
                    </div>

                    <div class="flex space-x-4">
                      <div class="w-1/3">
                        <label for="bookpage" class="text-md font-medium"
                          >จำนวนหน้า</label
                        >

                        <div class="relative mt-1">
                          <input
                            type="number"
                            id="bookpage"
                            class="
                              form-input
                              w-full
                              px-4
                              pr-16
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
                            placeholder="XXX"
                            v-model="page"
                            name="page"
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
                            หน้า
                          </span>
                        </div>
                      </div>
                      <div class="w-1/3">
                        <label for="price" class="text-md font-medium"
                          >ราคาหนังสือ</label
                        >

                        <div class="relative mt-1">
                          <input
                            type="number"
                            id="price"
                            class="
                              form-input
                              w-full
                              pr-16
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
                            placeholder="XXX"
                            v-model="price"
                            name="price"
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
                            บาท
                          </span>
                        </div>
                      </div>
                      <div class="w-1/3">
                        <label for="price" class="text-md font-medium"
                          >สต็อกสินค้า</label
                        >

                        <div class="relative mt-1">
                          <input
                            type="number"
                            id="stock"
                            class="
                              form-input
                              w-full
                              px-4
                              pr-16
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
                            placeholder="XX"
                            v-model="stock"
                            name="stock"
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
                            เล่ม
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label for="author" class="text-md font-medium"
                        >ผู้แต่ง</label
                      >

                      <div class="relative mt-1">
                        <input
                          type="text"
                          id="author"
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
                          placeholder="กรุณากรอกชื่อผู้แต่ง"
                          v-model="author"
                          name="author"
                        />
                      </div>
                    </div>
                    <div>
                      <label for="publisher" class="text-md font-medium"
                        >ชื่อสำนักพิมพ์</label
                      >

                      <div class="relative mt-1">
                        <input
                          type="text"
                          id="publisher"
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
                          placeholder="กรุณากรอกชื่อสำนักพิมพ์"
                          v-model="publisher"
                          name="publisher"
                        />
                      </div>
                    </div>
                    <div class="flex space-x-4">
                      <div class="w-1/2">
                        <label for="category" class="text-md font-medium"
                          >หมวดหมู่หนังสือ</label
                        >

                        <div class="relative mt-1">
                          <select
                            v-model="selected_category"
                            name="selected_category"
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
                            <option disabled v-bind:value="0">
                              เลือกหมวดหมู่
                            </option>
                            <option
                              v-for="category in categories"
                              :key="category.category_id"
                              v-bind:value="category.category_id"
                            >
                              {{ category.category_name }}
                            </option>
                          </select>
                        </div>
                      </div>
                      <div class="w-1/2">
                        <label for="isbn" class="text-md font-medium"
                          >ISBN</label
                        >

                        <div class="relative mt-1">
                          <input
                            type="number"
                            id="isbn"
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
                            placeholder="XXXXXXXXXXXXX"
                            v-model="isbn"
                            name="isbn"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label for="email" class="text-md font-medium"
                        >รูปปกหนังสือ</label
                      >

                      <div class="relative mt-1">
                        <div
                          class="
                            relative
                            h-40
                            rounded-lg
                            border-dashed border-2 border-gray-200
                            bg-white
                            flex
                            justify-center
                            items-center
                            hover:cursor-pointer
                          "
                        >
                          <div>
                            <input
                              id="myImage"
                              type="file"
                              class="h-full w-full opacity-1"
                              name="myImage"
                              accept="image/*"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mt-4 space-x-2 flex justify-end">
                      <input
                        type="submit"
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
                        @click="closeEdit"
                        value="Edit"
                      />
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
                        @click="closeEdit"
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
                  max-w-xl
                  transform
                  overflow-hidden
                  rounded-2xl
                  bg-white
                  p-6
                  text-left
                  align-middle
                  shadow-xl
                  transition-all
                "
              >
                <DialogTitle
                  as="h3"
                  class="text-lg font-medium leading-6 text-gray-900"
                >
                  Add New Book
                </DialogTitle>
                <div class="mt-2">
                  <!-- <p class="text-sm text-gray-500">
                    Your payment has been successfully submitted. We’ve sent you
                    an email with all of the details of your order.
                  </p> -->
                  <form
                    action="http://localhost:4000/api/books"
                    method="post"
                    enctype="multipart/form-data"
                  >
                    <div>
                      <label for="bookname" class="text-md font-medium"
                        >ชื่อหนังสือ</label
                      >

                      <div class="relative mt-1">
                        <input
                          type="text"
                          id="bookname"
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
                          placeholder="กรุณากรอกชื่อหนังสือ"
                          name="bookname"
                          v-model="bookname"
                        />
                      </div>
                    </div>

                    <div>
                      <label for="description" class="text-md font-medium"
                        >รายละเอียดหนังสือ</label
                      >

                      <div class="relative mt-1">
                        <input
                          type="text"
                          id="description"
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
                          name="description"
                          v-model="description"
                        />
                      </div>
                    </div>

                    <div class="flex space-x-4">
                      <div class="w-1/3">
                        <label for="bookpage" class="text-md font-medium"
                          >จำนวนหน้า</label
                        >

                        <div class="relative mt-1">
                          <input
                            type="number"
                            id="bookpage"
                            class="
                              form-input
                              w-full
                              px-4
                              pr-16
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
                            placeholder="XXX"
                            v-model="page"
                            name="page"
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
                            หน้า
                          </span>
                        </div>
                      </div>
                      <div class="w-1/3">
                        <label for="price" class="text-md font-medium"
                          >ราคาหนังสือ</label
                        >

                        <div class="relative mt-1">
                          <input
                            type="number"
                            id="price"
                            class="
                              form-input
                              w-full
                              pr-16
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
                            placeholder="XXX"
                            v-model="price"
                            name="price"
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
                            บาท
                          </span>
                        </div>
                      </div>
                      <div class="w-1/3">
                        <label for="price" class="text-md font-medium"
                          >สต็อกสินค้า</label
                        >

                        <div class="relative mt-1">
                          <input
                            type="number"
                            id="stock"
                            class="
                              form-input
                              w-full
                              px-4
                              pr-16
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
                            placeholder="XX"
                            v-model="stock"
                            name="stock"
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
                            เล่ม
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label for="author" class="text-md font-medium"
                        >ผู้แต่ง</label
                      >

                      <div class="relative mt-1">
                        <input
                          type="text"
                          id="author"
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
                          placeholder="กรุณากรอกชื่อผู้แต่ง"
                          v-model="author"
                          name="author"
                        />
                      </div>
                    </div>
                    <div>
                      <label for="publisher" class="text-md font-medium"
                        >ชื่อสำนักพิมพ์</label
                      >

                      <div class="relative mt-1">
                        <input
                          type="text"
                          id="publisher"
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
                          placeholder="กรุณากรอกชื่อสำนักพิมพ์"
                          v-model="publisher"
                          name="publisher"
                        />
                      </div>
                    </div>
                    <div class="flex space-x-4">
                      <div class="w-1/2">
                        <label for="category" class="text-md font-medium"
                          >หมวดหมู่หนังสือ</label
                        >

                        <div class="relative mt-1">
                          <select
                            v-model="selected_category"
                            name="selected_category"
<<<<<<< HEAD
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
=======
                            class="form-select w-full px-4 py-3 text-sm border-gray-200 focus-visible:border-primary-light focus:border-primary-light focus:ring-primary focus:shadow-primary border rounded-lg shadow-sm"
>>>>>>> a916899bcc18a51b601e5035b9b797b63d7e81c9
                          >
                            <option disabled v-bind:value="0">
                              เลือกหมวดหมู่
                            </option>
                            <option
                              v-for="category in categories"
                              :key="category.category_id"
                              v-bind:value="category.category_id"
                            >
                              {{ category.category_name }}
                            </option>
                          </select>
                        </div>
                      </div>
                      <div class="w-1/2">
                        <label for="isbn" class="text-md font-medium"
                          >ISBN</label
                        >

                        <div class="relative mt-1">
                          <input
                            type="number"
                            id="isbn"
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
                            placeholder="XXXXXXXXXXXXX"
                            v-model="isbn"
                            name="isbn"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label for="email" class="text-md font-medium"
                        >รูปปกหนังสือ</label
                      >

                      <div class="relative mt-1">
                        <div
                          class="
                            relative
                            h-40
                            rounded-lg
                            border-dashed border-2 border-gray-200
                            bg-white
                            flex
                            justify-center
                            items-center
                            hover:cursor-pointer
                          "
                        >
                          <div>
                            <input
                              id="myImage"
                              type="file"
                              class="h-full w-full opacity-1"
                              name="myImage"
                              accept="image/*"
                            />
                          </div>
                        </div>
                      </div>
                      <!-- 
                      <div class="relative mt-1">
                        <div
                          class="relative h-40 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer"
                        >
                          <div class="absolute z-10">
                            <div class="flex flex-col items-center">
                              <i
                                class="fa fa-cloud-upload fa-3x text-gray-200"
                              ></i>
                              <span class="block text-gray-400 font-normal"
                                >Attach you files here</span
                              >
                              <span class="block text-gray-400 font-normal"
                                >or</span
                              >
                              <span class="block text-blue-400 font-normal"
                                >Browse files</span
                              >
                            </div>
                          </div>
                          <input
                            type="file"
                            class="h-full w-full opacity-0"
                            name=""
                          />
                        </div>
                        <div
                          class="flex justify-between items-center text-gray-400 mt-2"
                        >
                          <span
                            >Accepted file type: .jpg, .png, .jpeg only</span
                          >
                          <span class="flex items-center"
                            ><i class="fa fa-lock mr-1"></i> secure</span
                          >
                        </div>
                      </div> -->
                    </div>

                    <!-- <button
                      @click="signUp"
                      class="block w-full px-5 py-3 text-md font-medium text-white bg-primary rounded-lg"
                    >
                      สมัครสมาชิก
                    </button> -->
                    <div class="mt-4 space-x-2 flex justify-end">
                      <!-- <button
                        type="button"
                        class="focus:outline-none inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-primary hover:bg-primary-light focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        @click="closeModal"
                      >
                        Create
                      </button> -->
                      <input
                        type="submit"
<<<<<<< HEAD
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
=======
                        class="focus:outline-none inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-primary hover:bg-primary-light focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
>>>>>>> a916899bcc18a51b601e5035b9b797b63d7e81c9
                        @click="closeModal"
                        value="Upload"
                      />
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
      <h2 class="text-2xl text-gray-600">Book List</h2>

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
                @click="openModal"
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

                Add new book
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
              <th class="text-left text-gray-600">ข้อมูลหนังสือ</th>
              <th class="text-left text-gray-600">ราคาหนังสือ (บาท)</th>
              <th class="text-left text-gray-600">สต็อกสินค้า</th>
              <th class="text-left text-gray-600">ขายครั้งล่าสุด</th>
              <th class="text-left text-gray-600">เพิ่มหนังสือเมื่อ</th>
              <th class="text-right text-gray-600">จัดการ</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="book in all_book" :key="book.book_id">
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
                <img
                  class="inline-block h-28 ring-2 ring-white"
                  :src="book.book_coversrc"
                  alt=""
                />
                <div class="px-4 w-60">
                  <div>
                    <a href="#" class="text-gray-600 font-bolder">
                      {{ book.book_name }}
                    </a>
                  </div>
                  <div class="font-bold text-sm">
                    แต่งโดย : {{ book.book_author }}
                  </div>
                </div>
              </td>
              <td>{{ book.book_price }}</td>
              <td>
                <span
                  v-if="book.book_stock >= 10"
                  class="px-2 py-1 rounded text-xs text-white bg-green-500"
                  >{{ book.book_stock }} เล่ม</span
                >
                <span
                  v-else
                  class="px-2 py-1 rounded text-xs text-white bg-red-500"
                  >{{ book.book_stock }} เล่ม</span
                >
              </td>
              <td>ซื้อล่าสุด</td>
              <td>{{ book.book_createAt }}</td>
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
                            @click="openEdit"
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
                            :class="[
                              active
                                ? 'bg-red-400 text-white'
                                : 'text-gray-900',
                              'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                            ]"
                            @click="deleteUser(book.book_id)"
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
                    <nav
                      class="
                        relative
                        z-0
                        inline-flex
                        rounded-md
                        shadow-sm
                        -space-x-px
                      "
                      aria-label="Pagination"
                    >
                      <a
                        href="#"
                        class="
                          relative
                          inline-flex
                          items-center
                          px-2
                          rounded-l-md
                          border border-gray-300
                          text-sm
                          font-medium
                          text-gray-500
                          hover:bg-gray-50
                        "
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
                        <form action="" method="get"></form>
                        <vue-router />
                      </a>
                      <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
                      <a
                        href="?page=1"
                        aria-current="page"
                        class="
                          z-10
                          bg-indigo-50
                          border-indigo-500
                          text-indigo-600
                          relative
                          inline-flex
                          items-center
                          px-4
                          py-1
                          border
                          text-sm
                          font-medium
                        "
                      >
                        1
                      </a>
                      <router-view />
                      <a
                        href="?page=2"
                        class="
                          border-gray-300
                          text-gray-500
                          hover:bg-gray-50
                          relative
                          inline-flex
                          items-center
                          px-4
                          py-1
                          border
                          text-sm
                          font-medium
                        "
                      >
                        2
                      </a>
                      <a
                        href="?page=2"
                        class="
                          border-gray-300
                          text-gray-500
                          hover:bg-gray-50
                          hidden
                          md:inline-flex
                          relative
                          items-center
                          px-4
                          py-1
                          border
                          text-sm
                          font-medium
                        "
                      >
                        3
                      </a>
                      <span
                        class="
                          relative
                          inline-flex
                          items-center
                          px-4
                          py-1
                          border border-gray-300
                          text-sm
                          font-medium
                          text-gray-700
                        "
                      >
                        ...
                      </span>
                      <a
                        href="#"
                        class="
                          border-gray-300
                          text-gray-500
                          hover:bg-gray-50
                          hidden
                          md:inline-flex
                          relative
                          items-center
                          px-4
                          py-1
                          border
                          text-sm
                          font-medium
                        "
                      >
                        8
                      </a>
                      <a
                        href="#"
                        class="
                          border-gray-300
                          text-gray-500
                          hover:bg-gray-50
                          relative
                          inline-flex
                          items-center
                          px-4
                          py-1
                          border
                          text-sm
                          font-medium
                        "
                      >
                        9
                      </a>
                      <a
                        href="#"
                        class="
                          border-gray-300
                          text-gray-500
                          hover:bg-gray-50
                          relative
                          inline-flex
                          items-center
                          px-4
                          py-1
                          border
                          text-sm
                          font-medium
                        "
                      >
                        10
                      </a>
                      <a
                        href="#"
                        class="
                          relative
                          inline-flex
                          items-center
                          px-2
                          py-1
                          rounded-r-md
                          border border-gray-300
                          text-sm
                          font-medium
                          text-gray-500
                          hover:bg-gray-50
                        "
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
      bookname: "",
      description: "",
      categories: [],
      page: null,
      price: null,
      stock: null,
      author: null,
      publisher: null,
      selected_category: 0,
<<<<<<< HEAD
      isbn: "",
=======
      isbn: null,
>>>>>>> a916899bcc18a51b601e5035b9b797b63d7e81c9
      all_book: [],
      selected_category: 0,
      imagefile: null,
      errors: [],
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
    this.getBooks();
    this.getCategories();
  },
  methods: {
    async saveBook() {
      try {
        await axios.post("http://localhost:4000/api/books", {
          product_name: this.productName,
          product_price: this.productPrice,
        });
        this.productName = "";
        this.productPrice = "";
        this.$router.push("/");
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
<<<<<<< HEAD
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
          axios.delete(`http://localhost:4000/api/books/${id}`);
          const newBook = this.all_book.filter(function(item) {
        return item.book_id !== id})
        this.all_book = newBook;
        }
      });
    },
=======
>>>>>>> a916899bcc18a51b601e5035b9b797b63d7e81c9
  },
};
</script>
