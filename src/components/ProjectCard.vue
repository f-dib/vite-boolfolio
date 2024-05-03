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
      <div class="card-body">
        <h5 class="card-title">{{ project.name }}</h5>
        <p class="card-text">{{ project.description }}</p>
        <div class="d-flex justify-content-between align-items-center">
          <a :href="'project.github_link'" class="btn btn-sm btn-outline-light">Github Link</a>
          <small class="text-muted">{{ project.date }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

  @use '../style/mixin.scss' as *;
  @use '../style/variables.scss' as *; 
  
  .container {
    padding: 0 2rem;
  }

  .card {
    border: none;
    border-radius: 1rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.7);
  }

  .card-body {
    padding: 1rem;
  }

  .card-title {
    font-weight: bold;
  }
</style>
