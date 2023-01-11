<template>
    <section>
        <div class="banner">
            <h2><span>CARent</span> 汽車租車，伴您一路同行</h2>
            <h3><font-awesome-icon icon="fa-solid fa-gauge" class="icon"/>新.駕馭，心.享受</h3>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'CARentBanner'
    }
</script>

<style lang="scss" scoped>
    $yellow: #ffc107;

    .banner {
        background-image: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url('../assets/img/banner/gallery07.jpg');
        width: 100%;
        height: 30vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        flex-wrap: nowrap;
        h2 {
            color: #fff;
            font-size: 4rem;
            padding: 1rem;
            span {
                color: $yellow;
                font-family: 'Poppins', sans-serif;
                font-weight: bold;
            }
        }
        h3 {
            color: #ccc;
            font-size: 3rem;
            .icon {
                color: $yellow;
                margin-right: 1rem;
            }
        }
    }
    @media(max-width: 576px) {
        .banner {
            h2 {
                font-size: 2rem;
            }
            h3 {
                font-size: 1.8rem;
            }
        }   
    }
</style>