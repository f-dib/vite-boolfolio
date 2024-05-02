<script>
export default {
    name: 'AppJumbo',
}
</script>


<template>

    <jumbo>
        
        <div class="container pt-5 text-center ">
          <div class="row">
          <div class="col-md-12">
              <h1 class="center-content">Hi! I'm <span>Geppetto</span></h1>
              <p class="center-content">Welcome to my personal portfolio! I'm a professional web developer.</p>
              <button class="btn btn-sm btn-outline-light">Useless Button</button>
          </div>
          </div>
      </div>
        
    </jumbo>

</template>

<style lang="scss">

    jumbo {
        color: white;
        
        span {
            color: #00203d;
        }

    }

</style>