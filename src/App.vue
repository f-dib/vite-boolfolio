<script>

// // importiamo axios
// import axios from 'axios';
import AppHeader from './components/AppHeader.vue'


export default {
  data() {
    return {
    }
  },
  components: {
    AppHeader
  },
};

</script>


<!-- // importiamo components ProjectCard
import ProjectCard from './components/ProjectCard.vue'

export default {
  data() {
    return {

      projects: [],

      // link ai vari endpoint dell'api per vedere le varie pagine dei post
      apiLinks: [],
      apiPageNumber: 1,

      isLoading: true,

      baseApiUrl: 'http://127.0.0.1:8000/api',

    }
  },

  components: {
    ProjectCard,
  },


  mounted() {
    
    this.apiCall();

  },

  methods: {

    apiCall() {
      // impostiamo la variabile isLoading a true
      this.isLoading = true

      axios.get(this.baseApiUrl + '/projects', {
        params: {
          page: this.apiPageNumber
        }
      }).then(res => {

        // solo quando riceviamo una risposta di successo
        if(res.data.success) {
          // impostiamo isLoading a false
          this.isLoading = false
        }

        console.log(res);

        // salvo i post
        this.projects = res.data.results.data;

        // salvo i link
        this.apiLinks = res.data.results.links;

      })
    },

    changeApiPage(pageNumber) {
      // console.log(pageNumber)
      this.apiPageNumber = pageNumber;

      // rifaccio la chiamata api così riottengo i post relativi alla nuova pagina selezionata
      this.apiCall();
    },

  },
}
 -->


<template>

  <AppHeader></AppHeader>

  <div class="container py-5">

  <router-view></router-view>
  
  </div>
</template>

<style lang="scss" scoped>


</style>

<!-- <router-view></router-view>

  <div class="container py-5">

    <h1>I nostri Progetti</h1>

    <div v-if="!isLoading">
  
      <ProjectCard v-for="currentProject in projects" :project="currentProject"></ProjectCard>

      <nav >
        <ul class="d-flex gap-2">
  
          <li v-for="link in apiLinks" v-html="link.label" @click="changeApiPage(link.label)" :class="link.label == apiPageNumber ? 'active' : ''">
            
          </li>
  
        </ul>      
      </nav>
    </div>
    <div v-else>
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

  </div>

</template>

<style lang="scss" scoped>

nav {
  margin-top: 100px;
  padding-top: 20px;
  border-top: solid 1px gray;

  ul {

    list-style-type: none;
    
    li {
      
      padding: 8px;

      text-decoration: none;
      color: white;

      transition: all .3s ease;

      cursor: pointer;

      &:hover, &.active {
        background-color: rgba(255,255,255,0.4);
        color: black;
      }

    }
  }
}


</style> -->