<template>
    <div class="hero d-flex align-items-center justify-content-start flex-column animate__animated animate__fadeIn animate__slow" id="home">
        <h1 class="pt-5 animate__animated animate__fadeInLeft"><span class="text-warning">CARent</span> 優質租車服務</h1>
        <h2 class="animate__animated animate__fadeInRight">多樣車種隨您選擇</h2>
        <div class="hero-btn d-flex align-items-center justify-content-center" id="hero-btn">
            <h3>即刻點選，獲得更多優惠</h3>
            <a href="carBooking.html" class="animate__animated animate__pulse animate__infinite">立即租車</a>
        </div>
    </div> 

</template>

<script>
    export default {
        name: 'CARentHome',
    }
</script>

<style lang="scss" scoped>
    $blue: #003060;
    $yellow: #ffc107;

    .hero {
        width: 100%;
        height: 80vh;
        position: relative;
        background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .3)), url('../assets/img/banner/car2-5.png');
        background-position: center;
        background-repeat: no-repeat;
        margin-bottom: 5rem;
        h1 {
            font-size: 5rem;
            font-weight: bold;
            letter-spacing: .2rem;
            color: $blue;
            overflow-y: hidden;
            span {
                font-family: 'Poppins', sans-serif;
                letter-spacing: 0;
            }
        }
        h2 {
            font-size: 4rem;
            font-weight: bold;
            letter-spacing: .2rem;
            color: $blue;
        }
        .hero-btn {
            width: 100%;
            position: absolute;
            bottom: 0rem;
            background:  linear-gradient(90deg, rgba( 0, 48, 96, 0) 0%,  rgb( 0, 48, 96) 50%, rgba( 0, 48, 96, 0) 100%);
            padding: 2rem 5rem;
            h3 {
                font-size: 3rem;
                color: #fff;
                padding: 2rem;
            }
            a {
                font-size: 2rem;
                border: 1px solid $yellow;
                padding: 1rem 2rem;
                border-radius: 1rem;
                text-decoration: none;
                color: $yellow;
                &:hover {
                    color: #000;
                    background-color: $yellow;
                    transition: .5s;
                }
            }
        }
    }
    @media(max-width: 576px) {
        .hero {
            h1 {
                font-size: 3rem;
            }
            h2 {
                font-size: 2rem;
            }
            .hero-btn {
                padding: 1rem;
                h3 {
                    font-size: 1.8rem;
                }
                a {
                    font-size: 1.6rem;
                }
            }
        }
        
    }
</style>