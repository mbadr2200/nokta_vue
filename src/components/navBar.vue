<template>
  <div class="tabs" id="tabs">
    <router-link class="tab" :to="{ name: 'Home' }">
      <i class="fas fa-home"></i>
      <p>الرئيسية</p>
    </router-link>
    <router-link class="tab" :to="{ name: 'items' }">
      <i class="fas fa-prescription-bottle"></i>
      <p>أصناف</p>
    </router-link>
    <router-link class="tab" :to="{ name: 'categories' }">
      <i class="fas fa-sitemap"></i>
      <p>تصنيفات</p>
    </router-link>
    <router-link class="tab" :to="{ name: 'inventories' }">
      <i class="fas fa-boxes"></i>
      <p>مخازن</p>
    </router-link>
    <!-- <router-link class="tab" :to="{ name: 'linkItem' }">
      <i class="fas fa-link"></i>
      <p>ربط</p>
    </router-link> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#tabs {
  background-color: var(--main_orange_color);
  display: flex;
  width: 100vw;
  max-width: 100%;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  position: fixed;
  bottom: 0;
  z-index: 1;
  -webkit-box-shadow: 0px -5px 1px -3px rgba(0, 0, 0, 0.13);
  box-shadow: 0px -5px 1px -3px rgba(0, 0, 0, 0.13);
}
.tab {
  display: flex;
  flex-grow: 1;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  align-items: center;
  cursor: pointer;
  border-radius: 25px;
  padding: 0px 20px;
  margin: 0 5px;
  transition: cubic-bezier(0.17, 0.67, 0.83, 0.67) 200ms all;
}
.tab i {
  font-size: 1.2em;
}
.tab p {
  overflow: hidden;
  max-width: 0;
  transition: cubic-bezier(0.17, 0.67, 0.83, 0.67) 200ms all;
}
.tab.active ,.router-link-active {
  background-color: rgba(255, 255, 255, 0.2);
}
.tab.router-link-active p {
  margin-left: 10px;
  transition: cubic-bezier(0.17, 0.67, 0.83, 0.67) 200ms all;
  max-width: 80vw;
}
.tab:hover p {
  margin-left: 10px;
  max-width: 80vw;
}
.tab:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
