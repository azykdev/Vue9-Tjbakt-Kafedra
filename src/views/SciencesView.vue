<template>
  <div class="p-2 max-w-screen-lg mx-auto">
    <div class="flex justify-between items-center">
      <h1 class="my-5 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Fanlar
      </h1>
      <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ props }">
          <v-btn class="mb-2 " color="primary" variant="outlined" v-bind="props">
            Yangi Fan
          </v-btn>
        </template>
        <v-card class="dark:bg-slate-900 dark:text-slate-100">
          <v-card-title>
            <span class="text-h5">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container>

              <form class="max-w-md mx-auto">
                <!-- Fan nomi -->
                <div class="mb-4">
                  <label for="name" class="block text-sm font-medium text-gray-600">Fan nomi</label>
                  <input v-model="editedItem.name" type="text" id="name" name="name"
                    class="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-red-400 dark:bg-slate-700 dark:text-slate-100">
                </div>

                <!-- Tavsifi -->
                <div class="mb-4">
                  <label for="description" class="block text-sm font-medium text-gray-600">Tavsifi</label>
                  <textarea v-model="editedItem.description" type="text" id="description" name="description"
                    class="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-red-400 dark:bg-slate-700 dark:text-slate-100"></textarea>
                </div>

              </form>

            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue-darken-1" variant="text" @click="close">
              Bekor qilish
            </v-btn>
            <v-btn color="blue-darken-1" variant="text" @click="save">
              Saqlash
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- Delete dialog -->
      <v-dialog v-model="dialogDelete" max-width="600px">
        <v-card>
          <v-card-title class="text-h5">Haqiqatan ham bu elementni oʻchirib tashlamoqchimisiz?</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
            <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

    <!-- Scienses Card -->

    <v-row>
      <v-col cols="12" sm="6" v-for="science in sciences" :key="science">
        <v-card id="card" max-width="" elevation="20" class="dark:bg-slate-900 dark:text-slate-100 ">
          <!-- header bg image -->
          <v-img :src="'https://source.unsplash.com/random/?Pattern&' + Math.ceil(Math.random() * 100)" height="200px"
            cover></v-img>
          <v-card-item>
            <v-card-title>
              {{ science.name }}
            </v-card-title>
          </v-card-item>

          <v-card-text>
            {{ science.description }}
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="editItem(science)">
              Edit
            </v-btn>
            <v-btn color="red" variant="tonal" @click="deleteItem(science)">Delete</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

    </v-row>

  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    editedIndex: -1,
    editedItem: {
      name: '',
      description: '',
    },
    defaultItem: {
      name: '',
      description: '',
    },
  }),
  computed: {
    sciences() {
      return this.$store.state.admin.sciences
    },
    formTitle() {
      return this.editedIndex === -1 ? 'Yangi o\'qituvchi' : 'Tahrirlash'
    },
  },
  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },
  methods: {
    editItem(item) {
      this.editedIndex = this.sciences.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    deleteItem(item) {
      this.editedIndex = this.sciences.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },
    deleteItemConfirm() {
      this.sciences.splice(this.editedIndex, 1)
      this.closeDelete()
    },
    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.sciences[this.editedIndex], this.editedItem)
      } else {
        this.sciences.push(this.editedItem)
      }
      this.close()
    }
  }
}
</script>

<style scoped>
#card {
  transition: all 0.3s ease-in-out;
}

#card:hover {
  transform: scale(1.05) rotate(2deg);
}
</style>