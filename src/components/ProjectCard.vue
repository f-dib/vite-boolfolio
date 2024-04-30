<script>
import axios from 'axios';

export default {
    name: 'ProjectCard',
    
    data() {
      //
    },

    props: {
        project: Object,
    }
}

</script>

<template>

  <div class="container py-5">

    <div class="card">

      {{ project.name }}

    </div>

  </div>


</template>

<style lang="scsss">

.card {
  /* width: 100px;
  background-color: grey;
  border: 1px solid red; */
}


</style>
