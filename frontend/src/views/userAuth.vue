<template>
  <div class="h-screen flex items-center justify-center flex-col space-y-5">
    <!-- <Navbar /> -->
    <div
      id="container"
      class="container min-h-screen md:min-h-[87vh] shadow-lg font-sukhumvit rounded-lg mx-auto relative overflow-hidden max-w-full w-2/3 mt-5 mb-2"
    >
      <div class="form-container signup-container">
        <form
          @submit.prevent="signUp"
          class="p-10 mt-6 mb-0 space-y-4 rounded-lg"
        >
          <p class="text-lg font-medium text-primary">สมัครสมาชิก</p>

          <div>
            <label for="firstname" class="text-md font-medium"
              >ชื่อจริง
              <span class="text-red-500">(ไม่ต้องมีคำนำหน้า)</span></label
            >

            <div class="relative mt-1">
              <input
                type="text"
                id="firstname"
                class="form-input w-full px-4 py-3 text-sm border-gray-200 focus-visible:border-primary-light focus:border-primary-light focus:ring-primary focus:shadow-primary border rounded-lg shadow-sm"
                placeholder="กรุณากรอกชื่อจริง"
                v-model="firstname"
              />
            </div>
          </div>

          <div>
            <label for="lastname" class="text-md font-medium">นามสกุล</label>

            <div class="relative mt-1">
              <input
                type="text"
                id="lastname"
                class="form-input w-full px-4 py-3 text-sm border-gray-200 focus-visible:border-primary-light focus:border-primary-light focus:ring-primary focus:shadow-primary border rounded-lg shadow-sm"
                placeholder="กรุณากรอกนามสกุล"
                v-model="lastname"
              />
            </div>
          </div>

          <div>
            <label for="email" class="text-md font-medium">อีเมลแอดเดรส</label>

            <div class="relative mt-1">
              <input
                type="email"
                id="email"
                class="form-input w-full pr-12 px-4 py-3 text-sm border-gray-200 focus-visible:border-primary-light focus:border-primary-light focus:ring-primary focus:shadow-primary border rounded-lg shadow-sm"
                placeholder="กรุณากรอกอีเมลแอดเดรส"
                v-model="mail"
              />

              <span class="absolute inset-y-0 inline-flex items-center right-4">
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
                class="form-input w-full px-4 py-3 text-sm border-gray-200 focus-visible:border-primary-light focus:border-primary-light focus:ring-primary focus:shadow-primary border rounded-lg shadow-sm"
                placeholder="กรุณากรอกเบอร์โทรศััพท์มือถือ"
                v-model="phone"
              />
            </div>
          </div>

          <div>
            <label for="password" class="text-md font-medium">รหัสผ่าน</label>

            <div class="relative mt-1">
              <input
                type="password"
                id="password"
                class="form-input w-full px-4 py-3 text-sm border-gray-200 focus-visible:border-primary-light focus:border-primary-light focus:ring-primary focus:shadow-primary border rounded-lg shadow-sm"
                placeholder="Enter password"
                v-model="password"
              />
            </div>
          </div>
          <div>
            <label for="confirm-password" class="text-md font-medium"
              >ยืนยันรหัสผ่าน</label
            >

            <div class="relative mt-1">
              <input
                type="password"
                id="confirm-password"
                class="form-input w-full px-4 py-3 text-sm border-gray-200 focus-visible:border-primary-light focus:border-primary-light focus:ring-primary focus:shadow-primary border rounded-lg shadow-sm"
                placeholder="Enter confirm-password"
                v-model="password_repeat"
              />
            </div>
          </div>
          <p class="text-red-500" v-if="msg">* {{ msg }}</p>
          <button
            @click="signUp"
            class="block w-full px-5 py-3 text-md font-medium text-white bg-primary rounded-lg"
          >
            สมัครสมาชิก
          </button>
        </form>
      </div>
      <div class="form-container signin-container">
        <form
          @submit.prevent="login"
          class="p-10 mt-6 mb-0 space-y-4 rounded-lg"
        >
          <p class="text-lg font-medium text-primary">เข้าสู่ระบบ</p>

          <div>
            <label for="email" class="text-md font-medium">อีเมลแอดเดรส</label>

            <div class="relative mt-1">
              <input
                type="email"
                id="email"
                class="form-input w-full px-4 py-3 text-sm border-gray-200 focus-visible:border-primary-light focus:border-primary-light focus:ring-primary focus:shadow-primary border rounded-lg shadow-sm"
                placeholder="Enter email"
                v-model="mail"
              />

              <span class="absolute inset-y-0 inline-flex items-center right-4">
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
            <label for="password" class="text-md font-medium">รหัสผ่าน</label>

            <div class="relative mt-1">
              <input
                type="password"
                id="password"
                class="form-input w-full px-4 py-3 text-sm border-gray-200 focus-visible:border-primary-light focus:border-primary-light focus:ring-primary focus:shadow-primary border rounded-lg shadow-sm"
                placeholder="Enter password"
                v-model="password"
              />
            </div>
          </div>
          <p class="text-red-500" v-if="msg">* {{ msg }}</p>
          <button
            type="submit"
            class="block w-full px-5 py-3 text-md font-medium text-white bg-primary rounded-lg"
          >
            เข้าสู่ระบบ
          </button>
        </form>
      </div>
      <div class="overlay-container">
        <div
          class="overlay bg-gradient-to-tr from-primary to-primary-dark relative text-white"
        >
          <div class="overlay-panel overlay-left">
            <router-link
              to="/"
              class="text-gray-200 underline mb-6 underline-offset-8"
            >
              ← กลับสู่หน้าหลัก
            </router-link>
            <h1 class="text-2xl font-bold">ฉันมีบัญชีของ Bookko อยู่แล้ว</h1>
            <p class="mt-2">กดปุ่มด้านล่างเพื่อไปยังแถบเข้าสู่ระบบ</p>
            <button
              id="signin"
              class="bg-white hover:bg-primary-light text-primary font-bold py-2 px-4 rounded w-26 mt-6"
            >
              เข้าสู่ระบบ
            </button>
          </div>
          <div class="overlay-panel overlay-right">
            <router-link
              to="/"
              class="text-gray-200 underline mb-6 underline-offset-8"
            >
              ← กลับสู่หน้าหลัก
            </router-link>
            <h1 class="text-2xl font-bold">ฉันยังไม่มีบัญชีของ Bookko</h1>
            <p class="mt-2">กดปุ่มด้านล่างเพื่อไปยังแถบสร้างบัญชี</p>
            <button
              id="signup"
              class="bg-white hover:bg-primary-light text-primary font-bold py-2 px-4 rounded w-26 mt-6"
            >
              สมัครสมาชิก
            </button>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <!-- copyright -->
      <p class="text-center text-gray-500 text-xs">
        &copy; 2020 Bookko. All rights reserved.
      </p>
    </footer>
  </div>
</template>

<script>
import AuthService from "../services/AuthService";
import store from "../store/store";

export default {
  name: "AuthView",
  data() {
    return {
      totalSteps: 3,
      currentStep: 1,
      firstname: "",
      lastname: "",
      mail: "",
      phone: "",
      password: "",
      password_repeat: "",
      msg: "",
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
  methods: {
    async signUp() {
      try {
        const credentials = {
          firstname: this.firstname,
          lastname: this.lastname,
          mail: this.mail,
          phone: this.phone,
          password: this.password,
          password_repeat: this.password_repeat,
        };
        const response = await AuthService.signUp(credentials);
        this.msg = response.msg;
        this.$router.push("/");
      } catch (error) {
        this.msg = error.response.data.msg;
      }
    },
    async login() {
      try {
        const loginCredentials = {
          mail: this.mail,
          password: this.password,
        };
        const response = await AuthService.login(loginCredentials);
        this.msg = response.msg;

        const token = response.token;
        const user = response.user;
				
        console.log(store);
        this.$store.dispatch("login", { token, user });

        this.$router.push("/");
      } catch (error) {
        this.msg = error.response.data.msg;
      }
    },
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

.container.right-panel-active .signin-container {
  opacity: 0;
  transform: translateX(100%);
}

.container.right-panel-active .overlay-container {
  transform: translateX(-100%);
}

.container.right-panel-active .signup-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
}

.container.right-panel-active .overlay {
  transform: translateX(50%);
}

.container.right-panel-active .overlay-left {
  transform: translateX(0);
}
.container.right-panel-active .overlay-right {
  transform: translateX(20%);
}
</style>
