<template>
  <div>
    <add-item />
    <item-list :items="items" />
  </div>
</template>

<script>
import AddItem from './components/AddItem.vue';
import ItemList from './components/ItemList.vue';

export default {
  components: {
    AddItem,
    ItemList,
  },
  data() {
    return {
      items: [], // Fetch items from the backend and update this array
    };
  },
};
</script>
