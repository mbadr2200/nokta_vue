<template>
  <form class="loginForm">
      <input type="text" v-model="username" placeholder="اسم المستخدم">
      <input type="password" v-model="password" placeholder="كلمة السر">
      <button class="loginBtn" @click.prevent="login">دخول</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {

    setup() {
        const username = ref();
        const password = ref();


        const login = async () => {
            console.log("logged in" , username.value , password.value)
            password.value  = "" ;
        }

        return {login , username , password} 
    }

}
</script>

<style>

.loginForm
{
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    width: min(50%, 400px);
}
.loginBtn
 {
   background : var(--main_orange_color);
   color:#DFE6E9;
   padding : 10px;
   margin: 0 auto;
   margin-top: 15px;
   border-radius:10px;
   text-align:center;
   transition: all .3s ease ;
   outline: none;
   border: none;
   width: 50%;
 }
 .loginBtn:hover
  {
   color:white;
   background:var(--deep_blue_color);
  }

</style>