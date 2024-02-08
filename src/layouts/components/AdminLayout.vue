<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer expand-on-hover rail permanent class="bg-slate-50 dark:bg-slate-900  dark:text-slate-100">
        <v-list class="h-[10vh]">
          <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" title="Sandra Adams"
            subtitle="sandra_a88@gmailcom"></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item title="Dashboard" value="dashboard" @click="$router.push({ name: 'dashboard' })">
            <template v-slot:prepend>
              <v-icon class="dark:text-orange-600">
                mdi-view-dashboard
              </v-icon>
            </template>
          </v-list-item>
          <v-list-item title="O'qituvchilar" value="teachers" @click="$router.push({ name: 'teachers' })">
            <template v-slot:prepend>
              <v-icon class="dark:text-orange-600">
                mdi-account
              </v-icon>
            </template>
          </v-list-item>
          <v-list-item title="Fanlar" value="sciences" @click="$router.push({ name: 'scienses' })">
            <template v-slot:prepend>
              <v-icon class="dark:text-orange-600">
                mdi-book
              </v-icon>
            </template>
          </v-list-item>
          <v-list-item title="Yangiliklar" value="news" @click="$router.push({ name: 'news' })">
            <template v-slot:prepend>
              <v-icon class="dark:text-orange-600">
                mdi-newspaper
              </v-icon>
            </template>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main class="h-screen ">
        <Navbar />

        <div class="h-screen overflow-y-auto bg-gray-100 dark:bg-gray-800  pt-[10vh]">
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