<template>
  <div>
    <!-- <Navbar /> -->
    <!-- <input type="text" placeholder="Username" v-model="username" />
    <input type="text" placeholder="Password" v-model="password" />
    <input type="button" @click="login" value="Login" />
    <p v-if="msg">{{ msg }}</p> -->

    <!-- <div>
          <input type="text" placeholder="Username" v-model="username" />
        </div>
        <input type="text" placeholder="Password" v-model="password" />
        <input type="button" @click="login" value="Login" />
        <p v-if="msg">{{ msg }}</p> -->
    <div class="h-screen flex">
      <div
        class="flex w-1/2 bg-gradient-to-tr from-primary to-primary-dark i justify-around items-center"
      >
        <div>
          <h1 class="text-white font-bold text-4xl font-sans">Booko Backend</h1>
          <p class="text-white mt-1">The most popular online book store</p>
          <router-link
            to="/"
            class="block px-5 bg-white text-primary mt-4 py-3 rounded-md font-bold mb-2 text-center w-40 hover:shadow-lg hover:-translate-y-[0.10rem] transition-all ease-in-out duration-300"
          >
            Back to Site !
          </router-link>
        </div>
      </div>
      <div class="flex w-1/2 justify-center items-center bg-white">
        <div class="bg-white">
          <h1 class="text-gray-800 font-bold text-2xl mb-1">Hello Admin!</h1>
          <p class="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
          <div class="flex items-center border-2 py-2 px-3 rounded-md mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
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
            <input
              class="pl-2 outline-none border-none"
              type="text"
              name=""
              id=""
              placeholder="Email Address"
              v-model="email"
            />
          </div>
          <div class="flex items-center border-2 py-2 px-3 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              class="pl-2 outline-none border-none"
              type="password"
              name=""
              id=""
              placeholder="Password"
              v-model="password"
            />
          </div>
          <div
            class="block w-full text-center cursor-pointer bg-primary mt-6 py-3 px-5 rounded-md text-white hover:bg-white hover:text-primary font-semibold mb-2 border-2 transition-all ease-in-out duration-300"
            @click="login"
          >
            Login
          </div>
					<p v-if="msg">{{ msg }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AuthService from '@/services/AuthService.js'
// import Navbar from '@/components/Navbar.vue'
import store from '../../store'
export default {
  data() {
    return {
      email: '',
      password: '',
      msg: '',
    }
  },
  components: {
    // Navbar,
  },
  methods: {
    async login() {
      try {
        const loginCredentials = {
          email: this.email,
          password: this.password,
        }
        const response = await AuthService.login(loginCredentials)
        this.msg = response.msg

        const token = response.token
        const user = response.user

        console.log(store)
        this.$store.dispatch('login', {token, user})

        this.$router.push('/dashboard')
      } catch (error) {
        this.msg = error.response.data.msg
      }
    },
  },
}
</script>
