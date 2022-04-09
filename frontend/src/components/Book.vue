<template>
  <div class="grid grid-cols-12 gap-2 gap-y-4 max-w-6xl">
    <!-- Video 1 -->
    <div class="col-span-12 sm:col-span-6 md:col-span-3">
      <card class="w-full flex flex-col">
        <div class="relative">
          <!-- Image Video -->
          <a href="#">
            <Test />
          </a>
          <p
            class="absolute right-2 bottom-2 bg-red-900 text-gray-100 text-xs px-1 py"
          >
            Flash Sale
          </p>
        </div>
        <div class="flex flex-row mt-2 gap-2">
          <!-- Description -->
          <div clas="flex flex-col">
            <a href="https://link.springer.com/book/10.1007/978-3-662-62746-4">
              <p class="text-gray-100 text-sm font-semibold">
                Machine Learning for Cyber Physical Systems
              </p>
            </a>
            <a class="text-gray-400 text-xs mt-2 hover:text-gray-100" href="#">
              Jürgen
            </a>
            <p class="text-gray-400 text-xs mt-1">฿280</p>
          </div>
        </div>
      </card>
    </div>
  </div>
</template>

<script>
import Test from "@/components/Test.vue";
export default {
  name: "Book",
  components: {
    Test,
  },
};
</script>

<style lang="css" scoped>
.book_shadow {
  background: #0003;
  height: 1rem;
  width: 100%;
  border-radius: 100%;
  margin: auto;
  filter: blur(0.5rem);
  transition: 0.6s;
  position: absolute;
  z-index: 0;
  bottom: -30px;
  left: 18px;
}
.side {
  position: absolute;
  transform-style: preserve-3d;
  box-sizing: border-box;
  z-index: 50;
}

.cover {
  width: 80%;
  margin: auto;
  display: block;
  position: relative;
  font-size: 0;
  transform-style: preserve-3d;
  transform: rotateY(-30deg) rotateX(30deg) translateY(0px) translateX(0px);
  transition: 0.6s cubic-bezier(0.42, -0.35, 0, 1.46);
  cursor: pointer;
}
.cover img {
  width: 100%;
  position: relative;
  z-index: 100;
}

.side-1 {
  background: linear-gradient(to right, #eee, #ddd);
  right: -20px;
  top: 0;
  width: 20px;
  height: 100%;
  transform-origin: left;
  transform: rotateY(90deg);
  border-right: 1px solid #999;
}
.side-2 {
  background: linear-gradient(to bottom, #eee, #ddd);
  left: 0;
  bottom: -20px;
  width: 100%;
  height: 20px;
  transform-origin: top;
  transform: rotateX(-90deg);
  border-bottom: 1px solid #999;
}
.book-wrap:hover .cover {
  transform: rotateY(-10deg) rotateX(10deg) translateY(-20px) translateX(0px);
}
.book-wrap:hover .cover .book_shadow {
  background: #0002;
  left: -10%;
  width: 120%;
  bottom: -40px;
}
.book-title-wrap {
  opacity: 0.8;
  /* height: 3em; */
  overflow: hidden;
  transition: all 0.3s;
}
.book-wrap:hover .book-title-wrap {
  opacity: 1;
}
</style>
