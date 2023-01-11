<template>
    <section id="news">
        <div class="container">
            <h3>最新消息/News</h3>
            <div class="row row-cols-sm-1 row-cols-md-2 g-3 mb-3">
                <div class="col-12">
                    <div class="items">
                        <img src="../assets/img/news/pexels-jagmeet-singh-1134857.jpg" class="rounded">
                        <div class="layer">
                            <h5>團家出遊，暢遊去</h5>
                            <p>家庭方案優惠更多，平日7折/假日65折+免費延後1小時還車</p>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="items">
                        <img src="../assets/img/news/pexels-jeshootscom-13861.jpg" class="rounded">
                        <div class="layer">
                            <h5>滿油出還車服務</h5>
                            <p>輕鬆出遊不設限</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row row-cols-sm-1 row-cols-md-3  g-3">
                <div class="col-12">
                    <div class="items">
                        <img src="../assets/img/news/pexels-martinus-89693.jpg" class="rounded">
                        <div class="layer">
                            <h5>租車配件收費</h5>
                            <p>多樣化配件，出車輕鬆方便!</p>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="items">
                        <img src="../assets/img/news/pexels-mihis-alex-21014.jpg" class="rounded">
                        <div class="layer">
                            <h5>CARent租車 x 地方旅遊</h5>
                            <p>跟著CARent一起瀏覽各縣市風貌</p>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="items">
                        <img src="../assets/img/news/pexels-torsten-dettlaff-70912.jpg" class="rounded">
                        <div class="layer">
                            <h5>租車券預約頁面</h5>
                            <p>填寫相關資料將由專員立即與您聯繫</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'CARentNews'
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
    .items {
        position: relative;
        cursor: pointer;
        img {
            width: 100%;
        }
        .layer {
            background-image: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5));
            width: 100%;
            height: 0;
            position: absolute;
            left: 0;
            top: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            text-align: center;
            h5 {
                color: #fff;
                font-size: 2rem;
            }
            p {
                color: #ccc;
                font-size: 1.6rem;
            }
        }
        &:hover .layer {
            height: 100%;
            transition: .5s;
        }
    }
</style>