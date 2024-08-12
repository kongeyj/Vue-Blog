<template>
  <div id="app" class="h-auto min-h-screen bg-light-bg dark:bg-dark-bg">
    <div class=" mx-auto max-w-4xl h-full ">
      <router-view />
    </div>

  </div>

</template>

<script>
import Home from './views/Home.vue'
export default {
  name: 'App',
  components: {
    Home,
  }
}
</script>

<style></style>
