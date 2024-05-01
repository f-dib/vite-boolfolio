<script>
import axios from 'axios';
export default {
    name: 'SingleProject',
    data() {
        return {
            project: null,
            projectId: null,
            apiBaseUrl: 'http://127.0.0.1:8000/api',
        }
    },
    mounted() {
        // come recuperiamo il parametro dell'id del project dall'url?
        // console.log('parametro id della rotta: ', this.$route.params.id);
        
        // lo assegnamo alla variabile projectId per comodità
        this.projectId = this.$route.params.id;
        
        axios.get(this.apiBaseUrl + '/projects/' + this.projectId).then(res => {

            if(res.data.success) {
                
                // se troviamo il progetto lo salviamo
                this.project = res.data.project

            } else {
                // altrimenti torniamo alla home
                this.$router.push({name: 'home'})
            }


        })
    },
}
</script>

<template>

    <div v-if="project">
        <h2>
            {{ project.name }}
        </h2>
    </div>
    <div v-else>
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>

</template>


<style lang="scss" scoped>
</style>