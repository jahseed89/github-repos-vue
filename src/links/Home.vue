<template>
  <div class="home">
    <GitDashboard />
  </div>
</template>

<script>
  import GitDashboard from '@/components/GitDashboard.vue';
  export default {
    name: 'HomeView',
    components: {
      GitDashboard
    }
   
  }
</script>

<style>
  .home {
    height: 100vh;
  }
</style>
