<template>
  <v-card >
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
        permanent
        class="bg-slate-50 dark:bg-slate-900  dark:text-slate-100"
      >
        <v-list class="h-[10vh]">
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            title="Sandra Adams"
            subtitle="sandra_a88@gmailcom"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home" title="Dashboard" value="dashboard" @click="$router.push({ name: 'dashboard' })"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="O'qituvchilar" value="teachers" @click="$router.push({ name: 'teachers' })"></v-list-item>
          <v-list-item prepend-icon="mdi-book" title="Fanlar" value="sciences" @click="$router.push({ name: 'scienses' })"></v-list-item>
          <v-list-item prepend-icon="mdi-newspaper" title="Yangiliklar" value="news" @click="$router.push({ name: 'news' })"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main class="h-screen">
        <Navbar />

        <div class=" bg-gray-100 dark:bg-gray-800 h-screen pt-[10vh]">
          <slot />
        </div>

      </v-main>
    </v-layout>
  </v-card>
</template>
<script>
import Navbar from '@/components/Navbar.vue';

export default {
    components: { Navbar }
}
</script>

<style scoped></style>