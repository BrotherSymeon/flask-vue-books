<template>
   <div class="container">
     <div class="row">
      <div class="col-sm-10">
        <h1>Books</h1>
        <hr>
        <alert :show="showalert" :message="message"></alert>
        <b-button
          variant="outline-secondary"
          v-b-modal.book-modal pill>Add Book</b-button>
        <br><br>
        <bookList :books="books"></bookList>
      </div>
    </div>
    <b-modal ref="addBookModal"
           id="book-modal"
           title="Add a new book"
           hide-footer>
    <b-form @submit="onSubmit" @reset="onReset" class="w-100">
    <b-form-group id="form-title-group"
                  label="Title:"
                  label-for="form-title-input">
        <b-form-input id="form-title-input"
                      type="text"
                      v-model="addBookForm.title"
                      required
                      placeholder="Enter title">
        </b-form-input>
      </b-form-group>
      <b-form-group id="form-author-group"
                    label="Author:"
                    label-for="form-author-input">
          <b-form-input id="form-author-input"
                        type="text"
                        v-model="addBookForm.author"
                        required
                        placeholder="Enter author">
          </b-form-input>
        </b-form-group>
      <b-form-group id="form-read-group">
        <b-form-checkbox-group v-model="addBookForm.read" id="form-checks">
          <b-form-checkbox value="true">Read?</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
      <b-button type="submit" variant="primary" pill >Submit</b-button>
      <b-button type="reset" variant="danger" pill>Reset</b-button>
    </b-form>
  </b-modal>
   </div>
</template>

<script>
import axios from 'axios';
import Alert from './Alert.vue';
import BookList from './BookList.vue';

const BASE_URL = 'http://localhost:5000';

export default {
  components: {
    alert: Alert,
    bookList: BookList,
  },
  data() {
    return {
      showalert: false,
      message: 'Done',
      books: [],
      addBookForm: {
        title: '',
        author: '',
        read: [],
      },
    };
  },
  methods: {
    getBooks() {
      const path = `${BASE_URL}/books`;
      axios.get(path)
        .then((res) => {
          this.books = res.data.books;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    addBook(payload) {
      const path = `${BASE_URL}/books`;
      axios.post(path, payload)
        .then(() => {
          this.getBooks();
          this.message = `${payload.title} has been added!`;
          this.showalert = true;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    initForm() {
      this.addBookForm.title = '';
      this.addBookForm.author = '';
      this.addBookForm.read = [];
    },
    onSubmit(evt) {
      evt.preventDefault();
      this.$refs.addBookModal.hide();
      let read = false;
      if (this.addBookForm.read[0]) read = true;
      const payload = {
        title: this.addBookForm.title,
        author: this.addBookForm.author,
        read,
      };
      this.addBook(payload);
      this.initForm();
    },
    onReset(evt) {
      evt.preventDefault();
      this.$refs.addBookModal.hide();
      this.initForm();
    },
  },
  created() {
    this.getBooks();
  },
};
</script>
