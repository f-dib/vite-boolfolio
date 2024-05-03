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

  <section class="bg-gradient position-relative">
    
    <AppHeader class="my_nav"></AppHeader>
  
    <div class="container">
  
      <router-view></router-view>
  
    </div>
  
    <AppFooter></AppFooter>

  </section>

  
</template>

<style lang="scss" scoped>

.bg-gradient{

  background-image: linear-gradient(to right top, #00203d, #13306d, #583593, #a51fa7)!important;
  background-size: 400% 400%;     
  animation: gradient 15s ease infinite;

  @keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

  .my_nav{
    position: fixed;
    left: 0;
    right: 0;

    z-index: 10;
  }
}

</style>