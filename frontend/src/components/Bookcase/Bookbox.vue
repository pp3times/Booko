<template>
  <div class="">
    <card class="w-full flex flex-col">
      <div class="relative h-52 md:h-[16rem]">
        <Book :imgUrl="imgUrl" :id="bookId" />
        <p
          class="absolute right-2 bottom-2 bg-primary-light text-gray-100 text-xs px-1 z-[200]"
        >
          Flash Sale
        </p>
      </div>
      <div class="flex flex-row mt-0 sm:mt-2 lg:mt-10 gap-2 justify-center">
        <!-- Description -->
        <div clas="flex flex-col">
          <router-link
            :to="`/detail/${bookId}`"
            class="text-gray-500 hover:text-primary"
          >
            <p class="text-primary text-xl font-semibold">
              {{ bookName }}
            </p>
          </router-link>
          <div class="text-gray-400 text-md mt-2" href="#">
            {{ bookAuthor }}
          </div>
          <p class="text-red-500 text-lg mt-1">฿ {{ bookPrice }}</p>
        </div>
      </div>
    </card>
  </div>
</template>

<script>
export default {
  props: {
    bookId: {
      type: Number,
      required: true,
    },
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
