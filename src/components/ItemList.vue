<template>
  <ul>
    <li v-for="item in items" :key="item.id">{{ item.title }} - {{ item.description }}</li>
  </ul>
</template>

<script>
export default {
  props: ['items'],
};
</script>
