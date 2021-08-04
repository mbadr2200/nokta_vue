<template>
     <h1>التصنيفات</h1>
   <addBtn/>
   <categoryList :categories="categories"/>
</template>

<script>
import categoryList from "@/components/categoryList.vue"
import addBtn from "@/components/addBtn.vue"

import {ref , computed } from "vue"
import { useStore } from 'vuex'

export default {
  components:{categoryList,addBtn},
  setup(){

    // intialize the store 
    const store = useStore();
    // get the items from the state 
    const categories = computed(() => store.state.categories );

    return {categories}
  }

}
</script>

<style>

</style>