<template>
    <section id="introduce">
        <div class="container">
            <div class="row row-cols-sm-1 row-cols-md-1 row-cols-lg-2 g-5 align-items-center">
                <div class="col-12">
                    <div class="items">
                        <img src="../assets/img/banner/intro-img.png" class="w-100 animatImg">
                    </div>
                </div>
                <div class="col-12">
                    <div class="items text-center">
                        <h3>與我們租車，讓您擁有最佳體驗！</h3>
                        <p>CARent 秉持提供顧客安全舒適的車輛！全台各縣市均有分店，方便、快速滿足您的需求！全車系均為全新款式！定期保養，期滿汰舊更換新車！</p>
                        <p>服務內容：轎車出租 / 貨車出租 / 休旅車出租 / 九人座出租 / 商務接送 / 機場接送 / 企業租車 / 旅遊包車 / 結婚禮車</p>
                        <div class="items-icons d-flex align-items-start justify-content-center mt-5">
                            <div class="items-icons-content">
                                <font-awesome-icon icon="fa-solid fa-map-location-dot" class="icon" />
                                <h5>選擇地點</h5>
                                <small>全台多個據點供你選擇</small>
                            </div>
                            <div class="items-icons-content">
                                <font-awesome-icon icon="fa-solid fa-calendar-days" class="icon" />
                                <h5>選擇日期</h5>
                                <small>選擇最合適的日子租車</small>
                            </div>
                            <div class="items-icons-content">
                                <font-awesome-icon icon="fa-solid fa-car" class="icon" />
                                <h5>預約租車</h5>
                                <small>簡單快速選擇車型馬上出發</small>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'CARentIntro',
    }
</script>

<style lang="scss" scoped>
    $blue: #003060;

    h3 {
        font-size: 3rem;
        font-weight: bold;
        margin-bottom: 2rem;
        color: $blue;
    }
    p {
        font-size: 1.8rem;
        line-height: 1.6em;
    }
   .items-icons-content {
        padding: 1rem;
        margin: 0 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .icon {
            font-size: 2rem;
            padding: 2rem;
            margin-bottom: 1rem;
            color: $blue;
            border-radius: 50%;
            box-shadow: 0 0 .5rem;
        }
        h5 {
            font-size: 1.6rem;
            color: $blue;
            font-weight: bold;
        }
        small {
            text-align: center;
            letter-spacing: 1px;
        }
    }
    @media(max-width: 576px) {
        h3 {
            font-size: 1.8rem;
            text-align: center;
        }
        p {
            font-size: 1.6rem;
        }
        .items-icons-content {
            h5 {
                font-size: 1.4rem;
            }
        }
    }
</style>