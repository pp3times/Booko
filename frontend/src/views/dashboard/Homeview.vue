<template>
  <div>
    <Navbar />
    <button @click="logout">LOGOUT</button>
  </div>
</template>

<script>
import store from '../../store'
import Axios from 'axios'

Axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'HomeAdmin',
  components: {
    Navbar,
  },
  async created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push('/auth')
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/')
    },
  },
}
</script>

<style></style>
