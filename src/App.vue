<template>
  <div class="content">
    <!-- <router-view v-slot="{ Component }">
      <transition
        name="router"
        enter-active-class="animate__animated animate__tada"
        leave-active-class="animate__animated animate__bounceOutRight"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view> -->
    <router-view />
  </div>
  <navBar />
</template>

<script>
import navBar from "./components/navBar.vue";

export default {
  components: { navBar },
  setup() {},
};
</script>

<style>
.router-enter-from,
.router-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}
.router-enter-active,
.router-leave-active {
  transition: all 1s ease;
}
.content
{
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
