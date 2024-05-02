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
                  <img :src="'http://localhost:8000/storage/' + project.src" class="card-img-top img-fluid" alt="...">
                  <div class="card-body">
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


.card{
  
transition: transform 0.4s ease, box-shadow 0.3s ease;
cursor: pointer;

&:hover{
    transform: scale(1.05);
    background-color: rgba(238, 236, 236, 0.123);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); 
}
a{
  border-radius: 14px;

}
}


</style>