<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900 shadow ">
    <div class=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 h-full">

      <!-- Left --> 
      <div class="flex items-center">
        <!-- Navbar toggle -->
        <button data-collapse-toggle="navbar-default" type="button"
          class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
          <span class="material-icons-sharp">
            menu
          </span>
        </button>

        <!-- Logo -->
        <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse hidden md:block">
          <img v-if="darkMode" src="@/assets/images/tjbakt-kafedra-logo-zip-file/png/logo-no-background.png" width="120px" alt="Logo" />
          <img v-else src="@/assets/images/tjbakt-kafedra-logo-zip-file/png/logo.png" width="120px" alt="Logo" />
        </a>
      </div>

      
      

      <!-- Right -->
      <div class="flex items-center">
        <!-- Search -->
        <button type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 flex items-center">
          <span class="material-icons-sharp">
            search
          </span>
        </button>

        <!-- Theme toggle -->
        <button @click="toggleTheme()" id="theme-toggle" type="button"
          class="ml-5 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2 flex items-center">
          <span v-if="darkMode" id="theme-toggle-dark-icon" class="material-icons-sharp">
            nights_stay
          </span>
          <span v-else id="theme-toggle-light-icon" class="material-icons-sharp">
            light_mode
          </span>
        </button>

        <!-- Profile dropdown -->
        <button data-collapse-toggle="navbar-default" type="button"
          class="ml-5 flex items-center bg-slate-300 p-2 rounded-lg">
          <span class="material-icons-sharp mr-2">
            account_circle
          </span>
          <div class="flex flex-col items-start">
            <span class="text-sm">AZYK</span>
          </div>
          <span class="material-icons-sharp ml-2">
            expand_more
          </span>
        </button>

      </div>

    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      darkMode: false
    }
  },
  methods: {
    toggleTheme() {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('color-theme', 'light')
        this.darkMode = false

      } else {
        document.documentElement.classList.add('dark')
        localStorage.setItem('color-theme', 'dark')
        this.darkMode = true
      }
    }
  }
}
</script>

<style scoped>
nav {
  height: 10vh;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
}
</style>