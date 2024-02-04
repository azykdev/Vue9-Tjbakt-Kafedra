<template>
  <div>
    <v-form>
      <!-- Firstname -->
      <v-text-field
        label="Ism"
        required
        prepend-icon="mdi-account"
        v-model="firstname"
      ></v-text-field>

      <!-- Lastname -->
      <v-text-field
        label="Familiya"
        required
        prepend-icon="mdi-account"
        v-model="lastname"
      ></v-text-field>

      <!-- Image -->
      <v-file-input
        label="Rasm"
        prepend-icon="mdi-camera"
        v-model="image"
      ></v-file-input>

    </v-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        teacher: {
          firstname: '',
          lastname: '',
          image: ''
        }
      }
    }
  }
</script>

<style scoped>

</style>