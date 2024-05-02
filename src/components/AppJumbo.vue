<script>
export default {
    name: 'AppJumbo',
}
</script>


<template>

    <jumbo>
        
        <div class="container text-center">
            <div class="row">
                <div class="col-md-12 vh-100 d-flex flex-column justify-content-center align-content-center">
                    <h1 class="center-content">Hi! I'm <span>Geppetto</span></h1>
                    <p class="center-content">Welcome to my personal portfolio! I'm a professional web developer.</p>
                    <div>
                        <button class="btn btn-sm btn-outline-light">Useless Button</button>
                    </div>
                </div>
            </div>
        </div>
        
    </jumbo>

</template>

<style lang="scss">

    jumbo {
        color: white;
        
        span {
            color: #00203d;
        }

    }

</style>