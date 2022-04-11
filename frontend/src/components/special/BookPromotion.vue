<template>
  <div class="book-wrap">
    <a
      href="https://link.springer.com/book/10.1007/978-3-662-62746-4"
      class="block"
      target="_blank"
    >
      <div class="cover">
        <div class="book_shadow"></div>
        <img
          src="https://www.lib.kmitl.ac.th/wp-content/uploads/2022/01/978-3-662-62746-4.jpg"
        />
        <div class="side side-1"></div>
        <div class="side side-2"></div>
      </div>
    </a>
    <sp class=""></sp>

    <!-- <a
      href="https://link.springer.com/book/10.1007/978-3-662-62746-4"
      class="block"
      target="_blank"
    >
      <h5 class="cl-white book-title-wrap size-rm text-black">
        Machine Learning for Cyber Physical Systems
      </h5>
			<h5 class="text-white">Jürgen</h5>
			<h6 class="text-white">฿280</h6>
    </a> -->
  </div>
</template>

<script>
export default {
	name: 'Book',
};
</script>

<style lang="css" scoped>
.book_shadow {
  background: rgba(0, 0, 0, 0.462);
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
  width: 110%;
  margin: auto;
  display: block;
  position: relative;
  font-size: 0;
  transform-style: preserve-3d;
  transform: rotateY(-30deg) rotateX(30deg) translateY(0px) translateX(0px);
  transition: 0.6s cubic-bezier(0.42, -0.35, 0, 1.46);
  cursor: pointer;
	animation: book-flip 8s ease-in-out infinite;
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

@keyframes book-flip {
	0% {
		transform: rotateY(0deg) rotateX(0deg) translateY(0px) translateX(0px);
	}
	50% {
		transform: rotateY(-30deg) rotateX(30deg) translateY(0px) translateX(0px);
	}
	100% {
		transform: rotateY(0deg) rotateX(0deg) translateY(0px) translateX(0px);
	}
}

</style>
