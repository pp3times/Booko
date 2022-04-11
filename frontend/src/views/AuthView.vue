<template>
  <div>
    <Navbar />
    <div
      id="container"
      style="min-height: 480px"
      class="
        container
        mx-auto
        shadow-lg
        relative
        overflow-hidden
        max-w-full
        w-1/2
        mt-16
      "
    >
      <div class="form-container signup-container">
        <form
          action=""
          class="flex flex-col justify-center p-10 items-center text-center"
        >
          <h1 class="text-2xl font-bold">สร้างบัญชีผู้ใช้</h1>
          <div class="flex items-center border-b border-teal-500 py-2 mt-7">
            <input
              class="
                appearance-none
                bg-transparent
                border-none
                w-full
                text-gray-700
                mr-32
                py-1
                px-2
                leading-tight
                focus:outline-none
              "
              type="text"
              placeholder="อีเมลแอดเดรส"
            />
          </div>
          <div class="flex items-center border-b border-teal-500 py-2 max-w-sm">
            <input
              class="
                appearance-none
                bg-transparent
                border-none
                w-full
                text-gray-700
                mr-32
                py-1
                px-2
                leading-tight
                focus:outline-none
              "
              type="password"
              placeholder="รหัสผ่าน"
            />
          </div>
          <div class="flex items-center border-b border-teal-500 py-2 max-w-sm">
            <input
              class="
                appearance-none
                bg-transparent
                border-none
                w-full
                text-gray-700
                mr-32
                py-1
                px-2
                leading-tight
                focus:outline-none
              "
              type="password"
              placeholder="ยืนยันรหัสผ่าน"
            />
          </div>
          <button
            class="
              bg-primary
              hover:bg-primary-light
              text-white
              font-bold
              py-2
              px-4
              rounded
              w-26
              mt-10
            "
          >
            สมัครสมาชิก
          </button>
        </form>
      </div>
      <div class="form-container signin-container">
        <form
          action=""
          class="flex flex-col justify-center p-10 items-center text-center"
        >
          <h1 class="text-2xl font-bold">ลงชื่อเข้าสู่ระบบ</h1>
          <div
            class="
              flex
              items-center
              border-b border-teal-500
              py-2
              max-w-sm
              mt-7
            "
          >
            <input
              class="
                appearance-none
                bg-transparent
                border-none
                w-full
                text-gray-700
                mr-32
                py-1
                px-2
                leading-tight
                focus:outline-none
              "
              type="text"
              placeholder="อีเมลแอดเดรส"
            />
          </div>
          <div class="flex items-center border-b border-teal-500 py-2 max-w-sm">
            <input
              class="
                appearance-none
                bg-transparent
                border-none
                w-full
                text-gray-700
                mr-32
                py-1
                px-2
                leading-tight
                focus:outline-none
              "
              type="password"
              placeholder="รหัสผ่าน"
            />
          </div>
          <button
            class="
              bg-primary
              hover:bg-primary-light
              text-white
              font-bold
              py-2
              px-4
              rounded
              w-26
              mt-10
            "
          >
            เข้าสู่ระบบ
          </button>
        </form>
      </div>
      <div class="overlay-container">
        <div class="overlay bg-primary relative">
          <div class="overlay-panel overlay-left">
            <h1 class="text-2xl font-bold">ฉันมีบัญชีของ Bookko อยู่แล้ว</h1>
            <p class="mt-2">กดปุ่มด้านล่างเพื่อไปยังแถบเข้าสู่ระบบ</p>
            <button
              id="signin"
              class="
                bg-white
                hover:bg-primary-light
                text-primary
                font-bold
                py-2
                px-4
                rounded
                w-26
                mt-6
              "
            >
              เข้าสู่ระบบ
            </button>
          </div>
          <div class="overlay-panel overlay-right">
            <h1 class="text-2xl font-bold">ฉันยังไม่มีบัญชีของ Bookko</h1>
            <p class="mt-2">กดปุ่มด้านล่างเพื่อไปยังแถบสร้างบัญชี</p>
            <button
              id="signup"
              class="
                bg-white
                hover:bg-primary-light
                text-primary
                font-bold
                py-2
                px-4
                rounded
                w-26
                mt-6
              "
            >
              สมัครสมาชิก
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "AuthView",
  components: {
    Navbar,
  },
  data() {
    return {
      totalSteps: 3,
      currentStep: 1,
    };
  },
  mounted() {
    const signUpButton = document.getElementById("signup");
    const signInButton = document.getElementById("signin");
    const container = document.getElementById("container");

    signUpButton.addEventListener("click", () =>
      container.classList.add("right-panel-active")
    );

    signInButton.addEventListener("click", () =>
      container.classList.remove("right-panel-active")
    );
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}
.form-container form {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.signin-container {
  left: 0;
  width: 50%;
  z-index: 2;
}
.signup-container {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.overlay {
  background: cover;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-panel {
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  height: 100%;
  width: 50%;
  text-align: center;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-right {
  right: 0;
  transform: translateX(0);
}

.overlay-left {
  transform: translateX(-20%);
}

.container.right-panel-active .signin-container{
  opacity: 0;
  transform: translateX(100%);
    }

.container.right-panel-active .overlay-container{
  transform: translateX(-100%);
    }

.container.right-panel-active .signup-container{
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
    }

.container.right-panel-active .overlay{
  transform: translateX(50%);
    }

.container.right-panel-active .overlay-left{
  transform: translateX(0);
    }
.container.right-panel-active .overlay-right{
  transform: translateX(20%);
}
</style>
