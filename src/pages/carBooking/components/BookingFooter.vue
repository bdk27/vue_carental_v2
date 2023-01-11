<template>
    <section id="aboutus">
        <div class="container">
            <h1 class="text-center"><span class="text-warning">CAR</span>ent</h1>
            <div class="row row-cols-sm-3 row-cols-md-5 text-center">
                <div class="col-6">
                    <dl>
                        <dt>關於我們</dt>
                        <dd>服務項目</dd>
                    </dl>
                </div>
                <div class="col-6">
                    <dl>
                        <dt>汽車租車</dt>
                        <dd>轎車出租</dd>
                        <dd>休旅車出租</dd>
                        <dd>皮卡出租</dd>
                        <dd>貨車出租</dd>
                    </dl>
                </div>
                <div class="col-6">
                    <dl>
                        <dt>開始租車</dt>
                        <dd>租車須知</dd>
                        <dd>車款價目</dd>
                        <dd>租車據點</dd>
                        <dd>租車券預約</dd>
                    </dl>
                </div>
                <div class="col-6">
                    <dl>
                        <dt>關於CARent</dt>
                        <dd>加入CARent會員</dd>
                        <dd>會員條款</dd>
                        <dd>點數兌換</dd>
                        <dd>認識我們</dd>
                        <dd>隱私權聲明</dd>
                    </dl>
                </div>
                <div class="col-6">
                    <dl >
                        <dt>聯絡我們</dt>
                        <dd>電話: 0800-123-456</dd>
                        <dd>信箱: abc123@gmail.com</dd>
                        <div class="d-flex align-items-center justify-content-center">
                            <dd><font-awesome-icon icon="fa-brands fa-facebook" class="icon"/></dd>
                            <dd><font-awesome-icon icon="fa-brands fa-line" class="icon"/></dd>
                            <dd><font-awesome-icon icon="fa-brands fa-instagram" class="icon"/></dd>
                        </div>
                    </dl>
                </div>
            </div>
            <div class="copyright text-center text-light">
                <p>COPYRIGHT © 2022 Yang-Cheng ALL RIGHTS RESERVED.</p>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'BookingFooter'
    }
</script>

<style lang="scss" scoped>
    $blue: #003060;
    $yellow: #ffc107;

    section {
        background: $blue;
        margin-top: 5rem;
        .container {
            h1 {
                color: #fff;
                font-family: 'Poppins', sans-serif;
                font-weight: bold;
                margin-bottom: 2rem;
                span {
                    font-family: 'Poppins', sans-serif;
                }
            }
            dl {
                dt {
                    color: $yellow;
                    font-size: 1.6rem;
                    margin-bottom: 2rem;
                    font-weight: normal;
                }
                dd {
                    color: #fff;
                    font-size: 1.4rem;
                    padding: .5rem;
                    cursor: pointer;
                    .icon {
                        font-size: 2.5rem;
                        padding: 0 1rem;
                        &:hover {
                            color: $yellow;
                        }
                    }
                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
            p {
                padding-top: 2rem;
                margin-top: 1rem;
                border-top: 1px solid #ccc;
                color: #ccc;
            }
        }
    }
    
</style>