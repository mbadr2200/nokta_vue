<template>
  <ul class="list_container">
    <li class="list" v-for="category in categories" :key="category.id">
      <router-link :to="{name:'details', params : {page : 'category'}, query:{id:category.id}}" class="list_item">{{category.category_name}}</router-link>
      <router-link :to="{name:'details', params : {page : 'category'}, query:{id:category.id}}" class="list_item">{{category.items_count}}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
      props: ["categories" ]

}
</script>

<style>

</style>