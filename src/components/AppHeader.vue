<script>
export default {
    name: 'AppHeader',
}
</script>


<template>

    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent ">
            <div class="container-fluid">
                <!-- Logo  -->
                <a class="navbar-brand m-lg-auto " href="#">
                <img src="" alt="Logo" width="80" height="auto">
                </a>
                
                
                <!-- Links sulla sinistra -->
                <div class="navbar-nav mr-auto">
                <a class="nav-link" href="#">Home</a>
                <a class="nav-link" href="#">About us</a>
                <a class="nav-link" href="#">Link3</a>
                <a class="nav-link" href="#">Link4</a>
                <a class="nav-link" href="#">Link5</a>

                </div>
                
                <!-- Links sulla destra -->
                <div class="navbar-nav m-md-auto ">
                <a class="nav-link" href="#">Login</a>
                <a class="nav-link" href="#">Registration</a>
                </div>
            </div>

            
        </div>

    </header>

</template>

<style lang="scss">
nav {
    .container {
        border-bottom: 1px solid white;
    }
}

.btn-outline-primary {
  color: white;
  border-color: white;
}

.card{

    cursor: pointer;
    &:hover{
        background-color: rgba(238, 236, 236, 0.123);
    }

}
</style>