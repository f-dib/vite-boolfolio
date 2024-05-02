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



            console.log(res);



            // salvo i post

            this.projects = res.data.results.data;



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

    <h1>I nostri progetti</h1>

    <div v-if="!isLoading">

      <ul>

        <li v-for="project in projects" class="mb-2">

          {{ project.name }} 
          
          <router-link :to="{name: 'single-project', params: {slug: project.slug}}" class="btn btn-outline-info btn-outline">
            Mostra
          </router-link>

        </li>

      </ul>




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


    <main>
        
        <!-- Prima sezione -->
        <div class="container pt-5 text-center ">
          <div class="row">
          <div class="col-md-12">
              <h1 class="center-content">Titolo Principale</h1>
              <p class="center-content">Testo del paragrafo</p>
              <button class="btn btn-sm btn-outline-light">Button</button>
          </div>
          </div>
      </div>

      <!-- Seconda sezione -->
      <div class="container mt-5 pt-5 text-center">
          <div class="row">
          <div class="col-md-12">
              <h2 class="center-content">Titolo Secondario</h2>
              <p class="center-content">Testo del paragrafo</p>
          </div>
          </div>
          <div class="row mt-3">

          <!-- Card 1 -->
          <div class="card col-md-4">
              <div class="card">
              <div class="card-body">
                  
                  <h5 class="card-title">Card 1</h5>
                  <p class="card-text">Contenuto della card 1.</p>
              </div>
              </div>
          </div>
          <!-- Card 2 -->
          <div class="card col-md-4">
              <div class="card">
              <div class="card-body">
                  <h5 class="card-title">Card 2</h5>
                  <p class="card-text">Contenuto della card 2.</p>
              </div>
              </div>
          </div>
          <!-- Card 3 -->
          <div class="card col-md-4">
              <div class="card">
              <div class="card-body">
                  <h5 class="card-title">Card 3</h5>
                  <p class="card-text">Contenuto della card 3.</p>
              </div>
              </div>
          </div>
          </div>

          
      </div>


  </main>

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


.card{

cursor: pointer;
&:hover{
    background-color: rgba(238, 236, 236, 0.123);
}

}


</style>