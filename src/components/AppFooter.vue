<script>
export default {
    name: 'AppFooter',
}
</script>


<template>

    <footer>
        <div class="container my_footer_height d-flex align-items-center justify-content-between">

            <!-- Per ora come info mail e tel  -->

                <div class="contacts-footer d-flex flex-column">
                    <div>CONTACTS</div>
                    <div>
                        <a class="text-decoration-none" href="mailto:mario@gmail.com">mario@gmail.com</a>
                    </div>
                    <div>
                        <a class="text-decoration-none" href="tel:+39166123456">166-123456</a>
                    </div>
                </div>

                <!-- Per ora di messe icone di prova -->

                <div class="socials-footer d-flex gap-3">
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-github"></i>
                    <i class="fa-brands fa-behance"></i>
                </div>

        </div>

        
    </footer>

</template>

<style lang="scss">

.my_footer_height{
    height: 15vh;
}

</style>