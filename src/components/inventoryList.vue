<template>
  <ul class="list_container">
    <li class="list" v-for="inventory in inventories" :key="inventory.id">
      <router-link :to="{name:'details', params : {page : 'inventory'}, query:{id:inventory.id}}" class="list_item">{{inventory.inventory_name}}</router-link>
      <router-link :to="{name:'details', params : {page : 'inventory'}, query:{id:inventory.id}}" class="list_item">{{inventory.items_count}}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
      props: ["inventories" ]

}
</script>

<style>

</style>