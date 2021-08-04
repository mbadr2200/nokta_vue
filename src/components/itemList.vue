<template>
  <ul class="list_container">
    <li class="list" v-for="item in items" :key="item.id">
      <router-link :to="{name:'details', params : {page : 'item'} , query:{id:item.id}}" class="list_item">{{item.item_name}}</router-link>
      <router-link :to="{name:'details', params : {page : 'category'} , query:{id:item.category_id}}" class="list_item">{{item.category_name}}</router-link>
    </li>
  </ul>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  props: ["items"],
  setup(props) {

  },
};
</script>

<style>

</style>
