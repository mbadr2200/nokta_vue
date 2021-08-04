<template>
    <h1>إضافة تصنيف</h1>
 <form action="">
    <label for="">اسم التصنيف</label>
  <input type="text" v-model="categoryName">
  <button class="form_btn"  @click.prevent="addCategory">إضافة تصنيف</button>
 </form>
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
    const categoryName = ref();
   
      const addCategory = () => {
         new Swal({
        icon: "success",
        title: "تمت الإضافة",
        text: `تم إضافة الصنف ${categoryName.value} بنجاح`,
        confirmButtonColor:"#F26627",
        confirmButtonText:"موافق"
      });
      //go to items page
      router.push({name:"categories"})
      }

      return {addCategory , categoryName}
   }
}
</script>

<style>

</style>