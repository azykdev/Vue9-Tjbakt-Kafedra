<template>
  <div>
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img width="200px" src="../assets/images/tjbakt-kafedra-logo-zip-file/png/logo.png" alt="logo">
        </a>
        <div
          class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Hisobingizga kiring
            </h1>
            <form class="space-y-4 md:space-y-6" @submit.prevent>
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Foydalanuvchi nomi
                </label>
                <input v-model="admin.username" type="text" name="username" id="username"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="username" required="">
              </div>
              <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Parol</label>
                <input v-model="admin.password" type="password" name="password" id="password" placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required="">
              </div>

              <button @click="login(admin)" type="button"
                class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign
                in</button>



            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      admin: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    toggleTheme() {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('color-theme', 'light')
      } else {
        document.documentElement.classList.add('dark')
        localStorage.setItem('color-theme', 'dark')
      }
    },

    login(admin) {
      if (admin.username && admin.password) {
        let hasAdmin = false
        this.admins.forEach((item) => {
          if (item.username === admin.username && item.password === admin.password) {
            hasAdmin = true
          }
        })

        if (hasAdmin) {
          this.$router.push({ name: 'dashboard' })
        } else {
          alert("Foydalanuvchi nomi yoki parol noto'g'ri")
        }
      } else {
        alert("Foydalanuvchi nomi yoki parol kiritilmadi")
      }
    }
  },
  mounted() {
    this.$store.dispatch('getAdmins')
  },
  computed: {
    admins() {
      return this.$store.state.auth.admins
    },
  },

}
</script>

<style scoped></style>