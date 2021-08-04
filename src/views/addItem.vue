<template>
  <h1>إضافة صنف</h1>
  <form >
    <label for="">اسم الصنف</label>
    <input type="text" v-model="itemName" />
    <label for="">الوحدة</label>
    <input type="text" v-model="unit" />
    <label for="">التصنيف</label>
    <select v-model="categoryName">
      <option value="">اختر التصنيف</option>
    </select>
    <button class="form_btn" @click.prevent="addItem">إضافة صنف</button>
  </form>
</template>

<script>
import Swal from "sweetalert2";
import { ref } from "vue";
import {useRouter , useRoute } from "vue-router"
import { useStore } from 'vuex'


export default {
  setup() {

    // intialize  router 
    const router = useRouter();

    //initalize store 
    const store = useStore();

    // get the form items 
    const itemName = ref();
    const unit = ref();
    const categoryName = ref();
   


    const addItem = () => {

      const item = {
        item_name : itemName , 
        unit : unit,
        category_name : categoryName
      }


      new Swal({
        icon: "success",
        title: "تمت الإضافة",
        text: `تم إضافة الصنف ${itemName.value} بنجاح`,
        confirmButtonColor:"#F26627",
        confirmButtonText:"موافق"
      });

      //go to items page
      router.push({name:"items"})

    };

    return {addItem , itemName};
  },
};
</script>

<style></style>
