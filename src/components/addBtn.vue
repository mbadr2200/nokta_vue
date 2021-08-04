<template>
  <div class = "add_buttons_container" >
  <router-link :to="{name:'linkItem'}"   class="add_btn"><i class="fas fa-link"></i> ربط بمخزن </router-link>
  <router-link :to="{name:'addItem'}"   class="add_btn"><i class="fas fa-plus"></i> إضافة صنف </router-link>
  <router-link :to="{name:'addCategory'}"   class="add_btn"><i class="fas fa-plus"></i> إضافة تصنيف </router-link>
  <router-link :to="{name:'addInventory'}"   class="add_btn"><i class="fas fa-plus"></i> إضافة مخزن </router-link>
</div>
</template>

<script>
export default {

}
</script>

<style>
 .add_buttons_container
 {
   display:flex;
   background:rgba(230,230,230,.2);
   border-radius:5px;
   justify-content:center;
   align-items:center;
   padding:5px;
   width : 95%;
   margin: 0 auto ;
 }
 .add_btn
 {
   background : #DFE6E9;
   color:#294b93;
   padding : 10px;
   margin: 0 10px;
   border-radius:10px;
   flex:1;
   text-align:center;
   transition: all .3s ease ;
 }
 .add_btn:hover
  {
   color:#DFE6E9;
   background:#294b93;
  }
  @media screen and (max-width: 500px) {
     .add_buttons_container
     {
       flex-wrap: wrap;
     }
     .add_btn
{
  width: 40%;
  flex: auto;
  margin: 10px;
}
    
  }
</style>