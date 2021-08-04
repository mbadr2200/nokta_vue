<template>
  <h1>{{this.$route.params.page}}</h1>
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
      let id = props.id
      console.log(id)

      const route = useRoute();

      console.log(route.query.id)

      return {id}
    }

}
</script>

<style>

</style>