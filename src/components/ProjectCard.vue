<script>
import axios from 'axios';

export default {
    name: 'ProjectCard',

    props: {
        project: Object,
    }
}

</script>

<template>

  <div class="container py-5">

    <div class="card">
      
      <img src="" alt="">
      <h1>
        {{ project.name }}
      </h1>
      <h4>
        {{ project.description }}
      </h4>
      <h6>
        {{ project.date }}
      </h6>



    </div>

  </div>


</template>

<style lang="scss">

.container {
    padding: 20px;
  }

  .card {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .card img {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
  }

  h1, h4, h6 {
    margin: 5px 0;
  }

</style>
