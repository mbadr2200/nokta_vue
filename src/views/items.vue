<template>
   <h1>الأصناف</h1>
   <addBtn/>
   <input type="text" v-model="searchName" placeholder="إبحث بإسم الصنف">
   <itemList :items="searchItems" />
</template>

<script>
import itemList from "@/components/itemList.vue"
import addBtn from "@/components/addBtn.vue"
import {ref , computed } from "vue"
import { useStore } from 'vuex'


export default {
  components:{itemList,addBtn},
  setup(){

    // intialize the store 
    const store = useStore();
    // get the items from the state 
    const items = computed(() => store.state.items );
    
    // name live search
    
    const searchName = ref();
       
    let searchItems = computed(() => {
      return items.value.filter(item => {
        return item.item_name.match(searchName.value)
    })})

    return {items , searchName  , searchItems}
  }

}
</script>

<style scoped >
input
{
  width: 80%;
}
</style>