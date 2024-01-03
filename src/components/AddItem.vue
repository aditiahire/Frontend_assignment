<template>
  <form @submit.prevent="addItem">
    <label>Title: <input v-model="title" /></label>
    <label>Description: <input v-model="description" /></label>
    <button type="submit">Add Item</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: '',
    };
  },
  methods: {
    addItem() {
      // Use Axios to submit data to the backend API
      // Example: axios.post('/api/items', { title: this.title, description: this.description })
    },
  },
};
</script>
