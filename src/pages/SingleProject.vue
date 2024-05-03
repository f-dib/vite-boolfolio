<script>
import axios from 'axios';

import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'SingleProject',
    data() {
        return {
            project: null,
            projectSlug: null,
            apiBaseUrl: 'http://127.0.0.1:8000/api',
        }
    },

    components: {
        ProjectCard,
    },

    mounted() {
        // come recuperiamo il parametro dell'id del project dall'url?
        console.log('parametro id della rotta: ', this.$route.params.slug);
        
        // lo assegnamo alla variabile projectId per comodità
        this.projectSlug = this.$route.params.slug;
        
        axios.get(this.apiBaseUrl + '/projects/' + this.projectSlug).then(res => {

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

    <div v-if="project" class="pt-5">
        <ProjectCard :project="project"></ProjectCard>
    </div>
    <div v-else>
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>

</template>


<style lang="scss" scoped>

    @use '../style/mixin.scss' as *;
    @use '../style/variables.scss' as *;
    
</style>