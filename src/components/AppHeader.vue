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
                <div class="d-flex align-items-center gap-3">

                    <!-- Logo  -->
                    <router-link :to="'/'" class="text-decoration-none text-white pe-4">
                        <img src="https://clipart-library.com/image_gallery2/Nike-Logo-PNG.png" alt="Logo" width="80" height="auto">
                    </router-link>

                    <!-- Link home & about  -->
                    <router-link :to="'/'" class="text-decoration-none text-white">
                        Home
                    </router-link>

                    <router-link :to="'/'" class="text-decoration-none text-white">
                        About
                    </router-link>

                </div>

                <!-- Links sulla destra -->
                <div>
                    <button class="my_btn">
                        <i class="fa-sharp fa-solid fa-file-arrow-down pe-3"></i>
                        <span>Scarica CV</span>
                    </button>
                </div>
            </div>
       
        </nav>

    </header>


</template>

<style lang="scss">

    @use '../style/mixin.scss' as *;
    @use '../style/variables.scss' as *;

</style>