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
       
        </nav>

    </header>

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