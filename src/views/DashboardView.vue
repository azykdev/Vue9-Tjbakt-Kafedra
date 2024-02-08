<template>
  <div class="p-2">
    <v-row>
      <v-col cols="12" sm="6" md="4">
        <v-card class="dark:bg-slate-900 dark:text-slate-100" @click="$router.push('/teachers')"
          style="box-shadow: 5px 5px 25px rgba(0, 0, 0, .3)">
          <v-card-title>O'qituvchilar</v-card-title>

          <v-card-text>
            {{ teachers.length }} ta o'qituvchi
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-card class="dark:bg-slate-900 dark:text-slate-100" @click="$router.push('/sciences')"
          style="box-shadow: 5px 5px 25px rgba(0, 0, 0, .3)">
          <v-card-title>Fanlar</v-card-title>

          <v-card-text>
            {{ sciences.length }} ta fan
          </v-card-text>
        </v-card>
      </v-col>

      <v-col>
        <v-card class="dark:bg-slate-900 dark:text-slate-100" @click="$router.push('/news')"
          style="box-shadow: 5px 5px 25px rgba(0, 0, 0, .3)">
          <v-card-title>Yangiliklar</v-card-title>

          <v-card-text>
            {{ news.length }} ta o'qituvchi
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  computed: {
    teachers() {
      return this.$store.state.teachers.teachers
    },
    sciences() {
      return this.$store.state.sciences.sciences
    },
    news() {
      return this.$store.state.news.news
    }
  },
  mounted() {
    this.$store.dispatch('getTeachers')
    this.$store.dispatch('getSciences')
    this.$store.dispatch('getNews')
  }
}
</script>

<style scoped></style>