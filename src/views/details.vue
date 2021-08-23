<template>
  <h1>{{pageType}}</h1>


  {{this.$route.query.id}}
  <itemDetails/>
</template>

<script>
import itemDetails from "@/components/itemDetails.vue"
import {useRoute} from "vue-router"
export default {
    components:{itemDetails},
    props:["id"],
  
    setup(props)
    {
            const route = useRoute();

      let id = props.id
      let pageType = route.params.page;
      console.log(id)


      console.log(route.query.id)

      return {id , pageType}
    }

}
</script>

<style>

</style>