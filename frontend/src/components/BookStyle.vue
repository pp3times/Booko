<template>
  <div class="book-wrap">
    <a
      href="https://link.springer.com/book/10.1007/978-3-662-62746-4"
      class="block"
      target="_blank"
    >
      <div class="cover w-28 sm:w-40 md:w-[80%] xl:w-[60%]">
        <div class="book_shadow"></div>
        <img :src="imgUrl" />
        <div class="side side-1"></div>
        <div class="side side-2"></div>
      </div>
    </a>
    <sp class=""></sp>
  </div>
</template>

<script>
export default {
  name: "BookStyle",
  props: {
    imgUrl: {
      type: String,
      required: true,
    },
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
