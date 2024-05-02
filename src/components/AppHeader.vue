<script>
export default {
    name: 'AppHeader',
}
</script>


<template>

    <header>

        <nav class="navbar navbar-expand-lg navbar-light bg-transparent ">
            
            <div class="container d-flex justify-content-between align-items-center py-3">

                <!-- Links sulla sinistra -->
                <div class="d-flex gap-3">

                    <!-- Logo  -->
                    <router-link :to="'/home'" class="text-decoration-none text-white pe-4">
                        <img src="" alt="Logo" width="80" height="auto">
                    </router-link>

                    <!-- Link home & about  -->
                    <router-link :to="'/home'" class="text-decoration-none text-white">
                        Home
                    </router-link>

                    <router-link :to="'/home'" class="text-decoration-none text-white">
                        About
                    </router-link>

                </div>

                <!-- Links sulla destra -->
                <div>
                    <button class="btn btn-sm btn-outline-light">
                        <span class="pe-3">Scarica CV</span>
                        <i class="fa-sharp fa-solid fa-file-arrow-down"></i>
                    </button>
                </div>
            </div>
       
        </nav>

    </header>


</template>

<style lang="scss">


</style>