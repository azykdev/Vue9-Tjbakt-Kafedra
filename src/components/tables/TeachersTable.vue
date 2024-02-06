<template>
  <v-data-table :headers="headers" :items="teachers" :sort-by="[{ key: 'fio', order: 'asc' }]"
    class="dark:bg-slate-700 dark:text-slate-100 shadow-lg rounded-lg">
    <template v-slot:top>
      <v-toolbar flat class="dark:bg-slate-900 dark:text-slate-100">
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ props }">
            <v-btn color="primary" dark class="mb-2" v-bind="props">
              Yangi O'qituvchi
            </v-btn>
          </template>
          <v-card class="dark:bg-slate-900 dark:text-slate-100">
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>

                <form class="max-w-md mx-auto">
                  <!-- FIO -->
                  <div class="mb-4">
                    <label for="fio" class="block text-sm font-medium text-gray-600">Ism</label>
                    <input v-model="editedItem.fio" type="text" id="fio" name="fio"
                      class="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-red-400 dark:bg-slate-700 dark:text-slate-100">
                  </div>

                  <!-- Rasm -->
                  <div class="mb-4">
                    <label for="image" class="block text-sm font-medium text-gray-600">Rasm</label>
                    <div class=" flex items-center">
                      <input type="file" id="image" name="image" accept=".jpeg,.png,.jpg,GIF" @input="changeAvatar"
                        class="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-red-400 dark:bg-slate-700 dark:text-slate-100 file:px-2 file:bg-slate-600 file:text-slate-100 file:rounded-md file:outline-none file:border-none file:hover:bg-slate-800">
                      <VAvatar rounded="rounded-full" size="60" class="ms-6 " :image="editedItem.image"></VAvatar>
                    </div>
                  </div>

                  <!-- Age -->
                  <div class="mb-4">
                    <label for="age" class="block text-sm font-medium text-gray-600">Yosh</label>
                    <input v-model="editedItem.age" type="number" min="0" id="age" name="age"
                      class="mt-1 p-2 w-1/2 border rounded-md focus:outline-none focus:ring focus:border-red-400 dark:bg-slate-700 dark:text-slate-100">
                  </div>

                  <!-- Experience -->
                  <div class="mb-4">
                    <label for="experience" class="block text-sm font-medium text-gray-600">Tajriba</label>
                    <input v-model="editedItem.experience" placeholder="Masalan: (5 yil)" type="text" id="experience"
                      name="experience"
                      class="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-red-400 dark:bg-slate-700 dark:text-slate-100">
                  </div>

                </form>

              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="close">
                Cancel
              </v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="save">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
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
      </v-toolbar>
    </template>

    <template v-slot:item.fio="{ item }" v-slot:item.image="{ image }" class="p-2">
      <VAvatar rounded="rounded-full" size="40" :image="item.image"></VAvatar>
      <span class="ms-2">{{ item.fio }}</span>
    </template>

    <template v-slot:item.actions="{ item }">
      <v-icon size="small" class="me-2" @click="editItem(item)">
        mdi-pencil
      </v-icon>
      <v-icon size="small" @click="deleteItem(item)">
        mdi-delete
      </v-icon>
    </template>

    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>
<script>
export default {

  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      { title: 'F.I.O', key: 'fio', sortable: false, },
      { title: 'Yosh', key: 'age', sortable: false, },
      { title: 'Tajriba', key: 'experience', sortable: false, },
      { title: '', key: 'actions', sortable: false, },
    ],
    editedIndex: -1,
    editedItem: {
      fio: '',
      image: '',
      age: '',
      experience: ''
    },
    defaultItem: {
      fio: '',
      image: '',
      age: '',
      experience: ''
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Yangi o\'qituvchi' : 'Tahrirlash'
    },
    teachers() {
      return this.$store.state.admin.teachers
    }
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
      this.editedIndex = this.teachers.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      this.editedIndex = this.teachers.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm() {
      this.teachers.splice(this.editedIndex, 1)
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
        Object.assign(this.teachers[this.editedIndex], this.editedItem)
      } else {
        this.teachers.push(this.editedItem)
      }
      this.close()
    },

    // Change Avatar
    changeAvatar(file) {
      const fileReader = new FileReader();
      const { files } = file.target;

      if (files && files.length) {
        fileReader.readAsDataURL(files[0])
        fileReader.onload = () => {
          if (typeof fileReader.result === 'string') this.editedItem.image = fileReader.result
        }
      }
    }
  },
}
</script>
