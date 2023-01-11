<template>
    <section id="serve">
        <div class="container">
            <h3>服務特色/Serve</h3>
            <div class="row row-cols-sm-1 row-cols-md-2 g-5">
                <div class="col-12">
                    <div class="card shadow">
                        <div class="card-body text-center">
                            <font-awesome-icon icon="fa-solid fa-infinity" class="icon"/>
                            <h5 class="card-title">首日里程無上限</h5>
                            <p class="card-text">租車首日不限里程數，讓您盡情安排行程不受限制</p>
                            <a href="#" class="card-link">了解更多</a>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="card shadow">
                        <div class="card-body text-center">
                            <font-awesome-icon icon="fa-solid fa-clock" class="icon"/>
                            <h5 class="card-title">超過晚上10點以1日租金計算</h5>
                            <p class="card-text">超過晚上10點才以1日租金計算，優於同業，讓您還車不趕時，平安回家</p>
                            <a href="#" class="card-link">了解更多</a>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="card shadow">
                         <div class="card-body text-center">
                            <font-awesome-icon icon="fa-solid fa-lock" class="icon"/>
                            <h5 class="card-title">行車額外加購</h5>
                            <p class="card-text">加購即免負擔車損自負額、營業損失及竊盜自負額</p>
                            <a href="#" class="card-link">了解更多</a>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="card shadow">
                        <div class="card-body text-center">
                            <font-awesome-icon icon="fa-solid fa-shield" class="icon"/>
                            <h5 class="card-title">安全有保障</h5>
                            <p class="card-text">車體險、竊盜險、乘客險、強制險...，各種保險降低您的風險</p>
                            <a href="#" class="card-link">了解更多</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
</template>

<script>
    export default {
        name: 'CARentServe'
    }
</script>

<style lang="scss" scoped>
    $blue: #003060;
    $yellow: #ffc107;

    h3 {
        text-align: center;
        margin-bottom: 3rem;
        font-size: 3rem;
        color: $blue;
        font-weight: bold;
    }
    .card {
        padding: 1.5rem;
        .card-body {
            .icon {
                font-size: 4rem;
                color: $blue;
                margin-bottom: 1rem;
            }
            .card-title {
                font-size: 2rem;
                color: $blue;
            }
            .card-text {
                font-size: 1.6rem;
            }
            .card-link {
                font-size: 1.6rem;
            }
        }  
    }
    
   
</style>