<template>
  <LandingNavbar />

  <!-- Header -->
  <header id="header" class=" bg-orange-50 dark:bg-gray-800 mt-[10vh] w-full h-[90vh] p-5">
    <v-row class=" max-w-screen-xl mx-auto items-center h-full">
      <v-col cols="12" sm="6">
        <h1
          class="my-5 text-3xl  leading-tight tracking-tight text-gray-900 md:text-4xl dark:text-white text-center text-sm-left">
          <span class="text-5xl text-md-7xl font-bold relative">
            TJBAKT
            <img id="head-animation-1" src="../assets/images/cap.png" alt="" class="w-24 absolute -top-14 -left-12 ">
          </span>
        </h1>
        <p
          class="my-5 text-md leading-tight tracking-tight text-gray-900 md:text-md dark:text-white text-center text-sm-left leading-6">
          BuxMTI
          "Texnalogik Jarayonlarni Boshqarishning Axborot-Kommunikatsiya Tizimlari" kafedrasining veb sahifasiga
          xush kelibsiz!</p>
      </v-col>
      <v-col cols="12" sm="6" class="hidden sm:block">
        <img id="head-animation-2" src="../assets/images/bmti-img.png" alt="" class="w-full hidden sm:block">
      </v-col>
    </v-row>

    <!-- svg shape -->
    <svg class="w-full" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
      id="head-svg">
      <path fill="#fff" fill-opacity="1"></path>
    </svg>

  </header>

  <!-- Parallax -->
  <section id="parallax1">
    <h2 class="p-24  text-md uppercase tracking-tight leading-none text-gray-100 md:text-lg lg:text-2xl text-center">
      Ma'lumotlar</h2>
  </section>

  <!-- Ma'lumot -->
  <section id="malumotlar" class="bg-orange-100 dark:bg-gray-900 p-5 ">
    <div class="max-w-screen-xl mx-auto py-8">
      <LandingTabs />
    </div>
  </section>

  <!-- Parallax -->
  <section id="parallax2">
    <h2 class="p-24  text-md uppercase tracking-tight leading-none text-gray-100 md:text-lg lg:text-2xl text-center">
      Haqida</h2>
  </section>

  <!-- Haqida -->
  <section id="haqida" class="bg-orange-200 dark:bg-gray-900 p-5">
    <div class="max-w-screen-xl mx-auto py-8">
      <h2
        class="text-xl text-bold uppercase tracking-tight leading-none text-gray-900 dark:text-gray-100 md:text-lg lg:text-2xl text-center">
        Texnalogik jarayonlarni boshqarishning
        axborot-kommunikatsiya tizimlari kafedrasi</h2>

      <p class="my-5 text-lg font-light text-gray-900 dark:text-gray-100 "><span style="font-weight: 600;">Tashkil
          etilgan
          yili:</span>
        2013
      </p>
      <p class="my-5 text-lg font-light text-gray-900 dark:text-gray-100 "><span style="font-weight: 600;">O'qituvchilar
          soni:</span>
        35 ta
      </p>
      <p class="my-5 text-lg font-light text-gray-900 dark:text-gray-100 "><span style="font-weight: 600;">Talabalar
          soni:</span>
        1257 ta
      </p>
      <p class="my-5 text-lg font-light text-gray-900 dark:text-gray-100 "><span style="font-weight: 600;">Fanlar
          soni:</span>
        38 ta
      </p>
    </div>
  </section>

  <!-- Parallax -->
  <section id="parallax3">
    <h2 class="p-24  text-md uppercase tracking-tight leading-none text-gray-100 md:text-lg lg:text-2xl text-center">
      Aloqa</h2>
  </section>

  <!-- Contact -->
  <section class="bg-orange-300 dark:bg-gray-900  p-5">
    <div class="max-w-screen-xl mx-auto py-8">
      <v-row>
        <v-col cols="12" sm="5" md="5" class="flex justify-center items-center">
          <img src="../assets/images/k-mudiri.jpg" alt="Kafedra mudiri" class="rounded-lg object-cover m-3 h-[350px]">
        </v-col>
        <v-col cols="12" sm="7" md="7">
          <h3 class="text-lg font-light text-gray-900 dark:text-gray-100 mb-5">Texnologik jarayonlarniI boshqarishning
            axborot-kommunikatsiya tizimlari kafedra mudiri:</h3>
          <h4 class="text-lg font-bold text-gray-900 dark:text-gray-100 mb-5">Qobilov Hasan Xalilovich</h4>

          <p class="text-sm font-light text-gray-900 dark:text-gray-100  flex items-center"> <span
              class="mdi mdi-calendar-range text-lg me-2"></span> <span style="font-weight: 600;">Qabul
              vaqti:</span> Har kuni 15:00-17:00</p>
          <p class="text-sm font-light text-gray-900 dark:text-gray-100 "> <span
              class="mdi mdi-phone text-lg me-2"></span>
            <span style="font-weight: 600;">Telefon:
            </span> (0 365) 223-76-91, (91) 409-66-18
          </p>
          <p class="text-sm font-light text-gray-900 dark:text-gray-100 "> <span
              class="mdi mdi-email text-lg me-2"></span>
            <span style="font-weight: 600;"> Email:
            </span> h.qobilov@mail.ru
          </p>
        </v-col>
      </v-row>

    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-gray-50 dark:bg-gray-950 p-5">
    <p class="text-sm font-light text-gray-900 dark:text-gray-100 text-center">© 2024 TJBAKT | All Rights Reserved</p>
  </footer>
</template>


<script>
import LandingNavbar from '@/components/LandingNavbar.vue';
import LandingTabs from '@/components/tabs/LandingTabs.vue';

export default {
  components: { LandingNavbar, LandingTabs },
  mounted() {
    this.$store.dispatch('getTeachers')
    this.$store.dispatch('getSciences')
    this.$store.dispatch('getNews')
  }
}
</script>

<style scoped>
#head-animation-2 {
  animation: head-animation-two 2s infinite;
  animation-timing-function: ease-in-out;
}

@keyframes head-animation-two {
  0% {
    transform: translate(0, 0) scale(1);
  }

  50% {
    transform: translate(0, 30px) scale(1.03);
  }

  100% {
    transform: translate(0, 0) scale(1);
  }
}

#parallax1 {
  background: linear-gradient(90deg, #0000008d, #00000075), url('../assets/images/bmti-img2.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

#parallax2 {
  background: linear-gradient(90deg, #0000008d, #00000075), url('../assets/images/bmti-img.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

#parallax3 {
  background: linear-gradient(90deg, #0000008d, #00000075), url('../assets/images/bmti-img3.jpeg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}
</style>