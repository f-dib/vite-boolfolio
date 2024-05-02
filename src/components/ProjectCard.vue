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

      <img :src="'http://localhost:8000/storage/' + project.src" alt="foto">

      {{ project.name }}

    </div>

  </div>


</template>

<style lang="scss">


</style>
