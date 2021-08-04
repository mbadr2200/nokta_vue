<template>
  <h1>إضافة مخزن</h1>
  <form action=""><label for="">اسم المخزن</label>
  <input type="text" v-model="inventoryName">
  <button class="form_btn" @click.prevent="addInventory">إضافة مخزن</button></form>
</template>

<script>
import Swal from "sweetalert2";
import { ref } from "vue";
import {useRouter , useRoute } from "vue-router"
import { useStore } from 'vuex'

export default {
   setup(){
      // intialize  router 
    const router = useRouter();

    //initalize store 
    const store = useStore();

    // get the form items 
    const inventoryName = ref();
   
      const addInventory = () => {
          new Swal({
        icon: "success",
        title: "تمت الإضافة",
        text: `تم إضافة الصنف ${inventoryName.value} بنجاح`,
        confirmButtonColor:"#F26627",
        confirmButtonText:"موافق"
      });
      //go to items page
      router.push({name:"inventories"})
      }

      return {addInventory  ,  inventoryName }
   }
}
</script>

<style>

</style>