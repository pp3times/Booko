<template>
  <!-- <div class="col-span-12 sm:col-span-6 md:col-span-3"> -->
  <div class="">
    <card class="w-full flex flex-col">
      <div class="relative h-52 md:h-[16rem]">
        <!-- Image Video -->
        <a href="#">
          <BookStyle :imgUrl="imgUrl" />
        </a>
        <p
          class="absolute right-2 bottom-2 bg-primary-light text-gray-100 text-xs px-1 z-[200]"
        >
          Flash Sale
        </p>
      </div>
      <div class="flex flex-row mt-0 sm:mt-2 lg:mt-10 gap-2 justify-center">
        <!-- Description -->
        <div clas="flex flex-col">
          <a href="https://link.springer.com/book/10.1007/978-3-662-62746-4">
            <p class="text-primary text-xl font-semibold">
              {{ bookName }}
            </p>
          </a>
          <a class="text-gray-400 text-md mt-2 hover:text-gray-100" href="#">
            {{ bookAuthor }}
          </a>
          <p class="text-red-500 text-lg mt-1">{{ bookPrice }}</p>
        </div>
      </div>
    </card>
  </div>
</template>

<script>
import BookStyle from "@/components/BookStyle.vue";

export default {
  name: "Book",
  components: {
    BookStyle,
  },
  props: {
    imgUrl: {
      type: String,
      required: true,
    },
    bookName: {
      type: String,
      required: true,
    },
    bookAuthor: {
      type: String,
      required: true,
    },
    bookPrice: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
