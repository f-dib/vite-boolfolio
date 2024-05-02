<script>

// // importiamo axios
// import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';


export default {
  data() {
    return {
    }
  },
  components: {
    AppHeader,
    AppFooter,
  },
};

</script>

<template>

  <section class="bg-gradient">
    
    <AppHeader></AppHeader>
  
    <div class="container py-5">
  
      <router-view></router-view>
  
    </div>
  
    <AppFooter></AppFooter>

  </section>

  
</template>

<style lang="scss" scoped>

.bg-gradient{

  background-image: linear-gradient(to right top, #02080d, #00203d, #13306d, #583593, #a51fa7)!important;
                
}

</style>