<script>

// importiamo axios
import axios from 'axios';
import AppJumbo from '../components/AppJumbo.vue';

export default {

    name: 'HomePage',

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

        AppJumbo,

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

            // salvo i post
            this.projects = res.data.results.data;

            // salvo il totale dei progetti
            this.totalProject = res.data.results.total;
            this.itemPage = res.data.results.per_page;
            this.lastPage = res.data.results.last_page

            // salvo i link
            this.apiLinks = res.data.results.links;

        })

        },

        changeApiPage(pageNumber) {

            // console.log(projectNumber)
            this.apiPageNumber = pageNumber;

            // rifaccio la chiamata api così riottengo i post relativi alla nuova pagina selezionata
            this.apiCall();

        },

    },

}

</script>

<template>

  <div class="">

    <AppJumbo></AppJumbo>
<br>
<br>
<hr>

    <!-- Seconda sezione -->
    <div class="container mt-5 pt-5 text-center">
      <div class="row">
        <div class="col-md-12">
            <h2 class="center-content">Titolo Secondario</h2>
            <p class="center-content">Testo del paragrafo</p>
        </div>
      </div>
    </div>

    <div v-if="!isLoading">

      <div class="row">
          <div v-for="project in projects"  class="col-4 mt-3">      
            <div class="p-2">
                <div class="card">
                  <!-- controlla immagine -->
                  <div class="p-4 "><img :src="'http://localhost:8000/storage/' + project.src" class="card-img-top img-fluid rounded-4 " alt="..."></div>
                  <div class="card-body text-center ">
                      <h5 class="card-title">{{ project.name }}</h5>
                      <p class="card-text">Contenuto della card 1.</p>
                  </div>
                  <router-link :to="{name: 'single-project', params: {slug: project.slug}}" class="btn  ">
                  Mostra
                  </router-link>
                </div>
            </div>
          </div>
      </div>

      <nav class="button-nav d-flex justify-content-center">

          <vue-awesome-paginate
          :total-items="totalProject"
          :items-per-page="itemPage"
          :max-pages-shown="lastPage"
          v-model="apiPageNumber" 
          :on-click="changeApiPage"
          active-page-class="active-page"
          paginate-buttons-class="paginate-buttons"/>
    
      </nav>

    </div>

    <div v-else>

      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>

    </div>

  </div>

</template>

<style lang="scss">

.button-nav {

    margin-top: 100px;
    padding-top: 20px;
    border-top: solid 1px gray;

    .pagination-container {
    display: flex;
    column-gap: 10px;
    }
    .paginate-buttons {
      height: 40px;
      width: 40px;
      border-radius: 20px;
      cursor: pointer;
      background-color: rgba($color: #d6d6d6d6, $alpha: 0.3);
      border: 1px solid rgb(255, 255, 255);
      color: rgb(255, 255, 255);
    }
    .paginate-buttons:hover {
      background-color: #d8d8d8;
    }
    .active-page {
      background-color: #3498db;
      border: 1px solid #3498db;
      color: white;
    }
    .active-page:hover {
      background-color: #2988c8;
    }

}

.card{

    cursor: pointer;
    &:hover{
        background-color: rgba(238, 236, 236, 0.123);
    }

}


</style>