<template>
     <h1>المخازن</h1>
   <addBtn/>
   <inventoryList :inventories="inventories"/>
</template>

<script>
import inventoryList from "@/components/inventoryList.vue"
import addBtn from "@/components/addBtn.vue"
import {ref , computed } from "vue"
import { useStore } from 'vuex'

export default {
  components:{inventoryList,addBtn},
   setup(){

    // intialize the store 
    const store = useStore();
    // get the items from the state 
    const inventories = computed(() => store.state.inventories );

    return {inventories}
  }

}
</script>

<style>

</style>