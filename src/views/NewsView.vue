<template>
  <div class="p-2 max-w-screen-lg mx-auto">
    <div class="flex justify-between items-center">
      <h1 class="my-5 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Yangiliklar
      </h1>

      <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ props }">
          <v-btn class="mb-2 " color="primary" variant="outlined" v-bind="props">
            Yangilik qo'shish
          </v-btn>
        </template>
        <v-card class="dark:bg-slate-900 dark:text-slate-100">
          <v-card-title>
            <span class="text-h5">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container>

              <form class="max-w-md mx-auto">
                <!-- Sarlavha -->
                <div class="mb-4">
                  <label for="title" class="block text-sm font-medium text-gray-600">Sarlavha</label>
                  <input v-model="editedItem.title" type="text" id="title" name="title"
                    class="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-red-400 dark:bg-slate-700 dark:text-slate-100">
                </div>

                <!-- Tavsifi -->
                <div class="mb-4">
                  <label for="description" class="block text-sm font-medium text-gray-600">Tavsifi</label>
                  <textarea v-model="editedItem.description" type="text" id="description" name="description"
                    class="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-red-400 dark:bg-slate-700 dark:text-slate-100"></textarea>
                </div>

                <!-- File -->
                <div class="mb-4">
                  <label for="file" class="block text-sm font-medium text-gray-600">Fayl</label>
                  <input type="file" id="file" name="file" @input="changeFile"
                    class="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-red-400 dark:bg-slate-700 dark:text-slate-100">
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

    <!-- News Cards -->
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="news in news" :key="news">
        <v-card>
          <video v-if="news.fileType === 'video'" width="100%" height="200px" controls>
            <source :src="news.file" type="video/mp4" />
          </video>

          <v-img v-if="news.fileType === 'image'" :src="news.file" cover height="180px"></v-img>

          <v-card-title>{{ news.title.length > 40 ? news.title.slice(0, 40) + '...' : news.title }}</v-card-title>

          <v-card-text>{{ news.description.length > 80 ? news.description.slice(0, 80) + '...' : news.description
          }}</v-card-text>

          <v-card-text>{{ news.date }}</v-card-text>

          <v-card-actions>
            <V-spacer></V-spacer>
            <v-btn color="blue-darken-1" variant="text" @click="editItem(news)">Edit</v-btn>
            <v-btn color="red-darken-1" variant="text" @click="deleteItem(news)">Delete</v-btn>
          </v-card-actions>

        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      dialogDelete: false,
      editedIndex: -1,
      editedItem: {
        title: '',
        description: '',
        file: '',
        fileType: '',
        date: new Date().toISOString().slice(0, 10)
      },
      defaultItem: {
        title: '',
        description: '',
        file: '',
        fileType: '',
        date: new Date().toISOString().slice(0, 10)
      }
    }
  },
  computed: {
    news() {
      return this.$store.state.admin.news
    },
    formTitle() {
      return this.editedIndex === -1 ? 'Yangilik qo\'shish' : 'Tahrirlash'
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
    changeFile(file) {
      const fileReader = new FileReader();
      const { files } = file.target;

      if (files && files.length) {
        fileReader.readAsDataURL(files[0])
        fileReader.onload = () => {
          if (typeof fileReader.result === 'string') this.editedItem.file = fileReader.result
        }
      }

      // Change File Type
      if (files[0].type.match('image.*')) this.editedItem.fileType = 'image';

      // Change File Type
      if (files[0].type.match('video.*')) this.editedItem.fileType = 'video';

    },

    editItem(item) {
      this.editedIndex = this.news.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      this.editedIndex = this.news.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm() {
      this.news.splice(this.editedIndex, 1)
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
        Object.assign(this.news[this.editedIndex], this.editedItem)
      } else {
        this.news.push(this.editedItem)
      }
      this.close()
    }
  }
}
</script>

<style scoped></style>