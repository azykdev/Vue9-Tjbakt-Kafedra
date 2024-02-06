<template >
  <div class="p-3 max-w-screen-lg mx-auto">
    <h1 class="my-5 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
      O'qituvchilar
    </h1>
    <TeachersTable></TeachersTable>
  </div>
</template>

<script>
import TeachersTable from '@/components/tables/TeachersTable.vue'
export default {
  components: {
    TeachersTable
  }
}
</script>

<style scoped></style>