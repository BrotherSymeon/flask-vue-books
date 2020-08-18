<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">Title</th>
        <th scope="col">Author</th>
        <th scope="col">Read?</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(book, index) in books" :key="index">
        <td>{{ book.title }}</td>
        <td>{{ book.author }}</td>
        <td>
          <span v-if="book.read">Yes</span>
          <span v-else>No</span>
        </td>
        <td>
          <div class="btn-group" role="group">
            <b-button
              class="mx-2"
              variant="outline-info"
              @click="onDeleteBook(book)" pill>
              Update
            </b-button>
            <b-button
              class="mx-2"
              variant="outline-danger"
              @click="onUpdateBook(book)" pill>
              Delete
            </b-button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>

export default {
  name: 'BookList',
  props: {
    onDeleteBook: Function,
    onUpdateBook: Function,
    books: {
      type: Array,
      required: true,
    },
  },
};

</script>
