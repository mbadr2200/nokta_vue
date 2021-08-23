<template>
  <!-- <h1 class="animate__animated animate__bounce">nokta home</h1> -->
  <div class="statisticsCardContainer">
    <statisticsCard>
      <template v-slot:title><p>عدد الأصناف</p></template>
      <template v-slot:count><p>50</p></template>
    </statisticsCard>
    <statisticsCard>
      <template v-slot:title><p>عدد المخازن</p></template>
      <template v-slot:count><p>20</p></template>
    </statisticsCard>
    <statisticsCard>
      <template v-slot:title><p>اصناف منتهية</p></template>
      <template v-slot:count><p>10</p></template>
    </statisticsCard>
  </div>
  <div class="expir_container">
    <h1 class="section_title"> :أصناف أقترب إنتهائها</h1>
   <ul class="list_container">
    <li class="list">
      <a class="list_item"> item</a>
      <a class="list_item"> quantity</a>
      <a class="list_item"> expiry date</a>
      <a class="list_item"> inventory</a>
    </li>
  </ul>
  </div>
</template>

<script>
import statisticsCard from "../components/statisticsCard.vue";

export default {
  name: "Home",
  components: { statisticsCard },
};
</script>

<style scoped>
.statisticsCardContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  flex-wrap: wrap;
}

/* .list_container
{
  margin-top: 20px;
} */
.section_title
{
  text-align: right;
  margin-right: 20px;
}
.expir_container
{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
}
  @media screen and (max-width :400px) {
    .statisticsCardContainer
    {
      width: 100%;
    }
.statisticsCard 
    {
      font-size: 1.3rem;
      padding: 10px;
      width: 43%;
      margin: 5px;
      flex-grow: 1;
    }
    .section_title
    {
      font-size: 1.2em;
    }
    .list
    {
      flex-wrap: wrap;
    }
    .list_container
    {
      width: 98%;
    }
    .list_item
    {
      flex: auto;
    }
  }
</style>
