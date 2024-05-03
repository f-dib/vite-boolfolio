<script>
export default {
    name: 'AppJumbo',
}
</script>


<template>

    <section class="jumbo">
        
        <div class="container text-center">
            <div class="row">
                <div class="col-md-12 my_jumbo_height d-flex flex-column justify-content-center align-content-center">
                    <h1>Hi! I'm <span>Geppetto</span></h1>
                    <p>Welcome to my personal portfolio! I'm a professional web developer.</p>
                    <div>
                        <a href="http://localhost:5174/projects"><button class="my_btn text-uppercase fw-bold">show more</button></a>
                    </div>
                </div>
            </div>
        </div>
        
    </section>

</template>

<style lang="scss">

    @use '../style/mixin.scss' as *;
    @use '../style/variables.scss' as *;

    .jumbo{
        color: white;

        .my_jumbo_height{
            height: 85vh;
        }
        
        span {
            color: #00203d;
        }

    }

</style>