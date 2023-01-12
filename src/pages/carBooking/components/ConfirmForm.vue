<template>
    <section>
        <div class="mask">
            <div class="container">
                <div class="closeBtn shadow" @click="closeRsv">
                    <font-awesome-icon icon="fa-solid fa-xmark" class="icon"/>
                </div>
                <div class="row" v-for="item in sendData" :key="item.id">
                    <div class="col-12 col-md-4">
                        <div class="items p-3">
                            <div class="card p-5">
                                <img :src="item.img" >
                                <div class="card-body">
                                    <h5 class="card-title">{{ item.name }}</h5>
                                    <div class="card-text">
                                        <p>類型: {{ item.type }}</p>
                                        <p>{{ item.content }}</p>
                                    </div>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">日期 : <span>{{ store.getBookingData.rentalDate }} > {{ store.getBookingData.returnDate }}</span></li>
                                    <li class="list-group-item">時間 : <span>{{ store.getBookingData.rentalTime }} > {{ store.getBookingData.returnTime }}</span></li>
                                    <li class="list-group-item">租車地點 : <span>{{ store.getBookingData.startLoc }}</span></li>
                                    <li class="list-group-item">還車地點 : <span>{{ store.getBookingData.endLoc }}</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-8">
                        <div class="items p-3">
                            <form class="mb-5 p-5">
                                <h5 class="text-center mb-5">會員註冊</h5>
                                <div class="row row-cols-sm-2">
                                    <div class="col-12 mb-3">
                                        <label for="name" class="form-label"><font-awesome-icon icon="fa-solid fa-user" class="icon"/>姓名<span>*</span></label>
                                        <input type="text" class="form-control form-control-lg" id="name" aria-describedby="emailHelp">
                                    </div>
                                    <div class="col-12 mb-3">
                                        <label for="phone" class="form-label"><font-awesome-icon icon="fa-solid fa-phone" class="icon"/>手機<span>*</span></label>
                                        <input type="number" class="form-control form-control-lg" id="phone">
                                    </div>
                                    <div class="col-12 mb-3">
                                        <label for="email" class="form-label"><font-awesome-icon icon="fa-solid fa-envelope" class="icon"/>信箱<span>*</span></label>
                                        <input type="email" class="form-control form-control-lg" id="email" aria-describedby="emailHelp">
                                    </div>
                                    <div class="co-12 mb-3">
                                        <label for="address" class="form-label"><font-awesome-icon icon="fa-solid fa-location-dot" class="icon"/>地址<span>*</span></label>
                                        <input type="text" class="form-control form-control-lg" id="address">
                                    </div>
                                </div>
                            </form>
                            <div class="checkout p-5">
                                <h5>價錢$</h5>
                                <h5>{{ item.name }}({{ item.price }}/1日)</h5>
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <h5>總價 ({{ dayCount }}日)</h5>
                                    <h3>NT$ <span>{{ total(item) }}</span></h3>
                                </div>
                                <p class="lh-base mb-4">點選按鈕後，代表您同意本公司所有<a href="#">條款</a>以及<a href="#">隱私權聲明</a>，CARent租車的短期租車服務、專車接送服務及停車場服務由CARent行動服務提供</p>
                                <div>
                                    <button type="submit" class="w-100">前往結帳</button>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { computed, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
    import { useBookingStore } from '@/store/booking'

    export default {
        name: 'ConfirmForm',
        props: ['sendData'],   
        setup(props, context) {
            //取得sendData給getData
            const getData = reactive([]);
            //store
            const store = useBookingStore();

            // 計算天數和金錢
            let dayCount = ref(1);
            function calculateDate() {
                let y1 = store.getBookingData.rentalDate.split('-')[0];
                let m1 = store.getBookingData.rentalDate.split('-')[1];
                let d1 = store.getBookingData.rentalDate.split('-')[2];
                let time1 = new Date(y1, m1, d1);

                let y2 = store.getBookingData.returnDate.split('-')[0];
                let m2 = store.getBookingData.returnDate.split('-')[1];
                let d2 = store.getBookingData.returnDate.split('-')[2];
                let time2 = new Date(y2, m2, d2);

                if(time2 >= time1) {
                    dayCount.value = Math.ceil((time2 - time1)/1000/60/60/24);
                    if(dayCount.value === 0) { //當日算一天
                        dayCount.value = 1; 
                    }
                }else {
                    alert('日期選擇不正確，請重新選擇日期');
                    context.emit('hideRsv', false);
                }
            }
            const total = computed(() => (item) => {
                return dayCount.value * item.price
            })

            //關閉Confirm頁面
            function closeRsv() {
                context.emit('hideRsv', false);
            }

            onMounted(() => {
                getData.push(props.sendData);
                calculateDate()
            })
            onBeforeUnmount(() => {
                getData[0].pop();
            })

            return {
                closeRsv,
                getData,
                calculateDate,
                dayCount,
                store,
                total,
            }
        }
    }
</script>

<style lang='scss' scoped>
    $blue: #003060;
    $yellow: #ffc107;

    .mask {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, .5);
        .container {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            .closeBtn {
                position: absolute;
                top: 0;
                right: 0;
                width: 50px;
                height: 50px;
                background: #fff;
                padding: 1rem;
                border-radius: 50%;
                cursor: pointer;
                &:hover {
                    background: $yellow;
                }
                .icon {
                    font-size: 2rem;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    color: $blue;
                }
            }
            .card {
                border-radius: 1rem;
                .card-body {
                    .card-title {
                        font-size: 2rem;
                        color: $blue;
                        font-weight: bold;
                    }
                    .card-text {
                        font-size: 1.6rem;
                    }
                }
                .list-group-item {
                    font-size: 1.6rem;
                    span {
                        color: gray;
                    }
                }
            }

            form {
                border-radius: 1rem;
                background: #fff;
                
                h5 {
                    font-size: 2rem;
                    color: $blue;
                    font-weight: bold;
                }
                .form-label {
                    font-size: 1.6rem;
                    color: $blue;
                    .icon {
                        color: $blue;
                        font-size: 1.6rem;
                        margin-right: .5rem;
                    }
                    span {
                        color: red;
                    }
                }
                input {
                    font-size: 1.8rem;
                }
            }

            .checkout {
                background: #fff;
                border-radius: 1rem;
                h5 {
                    color: $blue;
                    font-size: 2rem;
                    font-weight: bold;
                    text-align: center;
                }
                h3 {
                    color: $blue;
                    font-size: 2rem;
                    span {
                        color: red;
                        font-weight: bold;
                        font-size: 2.5rem;
                    }
                }
                p {
                    font-size: 1.6rem;
                }
                button {
                    padding: 1rem 2rem;
                    color: $blue;
                    font-size: 1.6rem;
                    border: 1px solid $yellow;
                    background: $yellow;
                    border-radius: 1rem;
                    &:hover {
                        border: 1px solid $yellow;
                        background: none;
                        transition: .5s;
                    }
                }
            } 
        }
    }
    
    
</style>