<template>
  <div class="p-2">
    <!-- Create teacher -->
    <div class="w-full bg-slate-50 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-900 dark:border-gray-700">
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          O'qituvchi qo'shish
        </h1>

        <CreateTeacherForm></CreateTeacherForm>
        
      </div>
    </div>
  </div>
</template>

<script>
import CreateTeacherForm from '@/components/forms/CreateTeacherForm.vue'
  export default {
    components: {
      CreateTeacherForm
    }
  }
</script>

<style scoped>

</style>