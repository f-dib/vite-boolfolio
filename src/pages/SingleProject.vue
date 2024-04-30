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
        // console.log(this.apiBaseUrl + '/posts/2')
        
        axios.get(this.apiBaseUrl + '/projects/' + this.projectId).then(res => {
            console.log(res)
            this.project = res.data.project
        })
    },
}
</script>

<template>

    <div v-if="project">
        <h2>
            {{ project.name }}
        </h2>

        <p>
            {{ project.content }}
        </p>
    </div>
    <div v-else>
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>

</template>


<style lang="scss" scoped>
</style>