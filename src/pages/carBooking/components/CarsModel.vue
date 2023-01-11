<template>
    <section>
        <div class="container p-0">
            <h3>車款介紹</h3>
            <div class="row row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3 mb-4">
                 <div class="col-6">
                    <div class="items active" @click="visibility='all'">
                        <font-awesome-icon icon="fa-solid fa-car" class="icon"/>
                        <h5>全部 / all</h5>
                    </div>
                </div>
                <div class="col-6">
                    <div class="items" @click="visibility='sedan'">
                        <font-awesome-icon icon="fa-solid fa-car-side" class="icon"/>
                        <h5>轎車 / sedan</h5>
                    </div>
                </div>
                <div class="col-6">
                    <div class="items" @click="visibility='suv'">
                        <font-awesome-icon icon="fa-solid fa-van-shuttle" class="icon"/>
                        <h5>休旅車 / suv</h5>
                    </div>
                </div>
                <div class="col-6">
                    <div class="items" @click="visibility='pickup'">
                        <font-awesome-icon icon="fa-solid fa-truck-pickup" class="icon"/>
                        <h5>皮卡 / pickup</h5>
                    </div>
                </div>
                <div class="col-6">
                    <div class="items" @click="visibility='truck'">
                        <font-awesome-icon icon="fa-solid fa-truck" class="icon"/>
                        <h5>貨車 / truck</h5>
                    </div>
                </div>
            </div>

            <div class="row row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-5">
                <div class="col-12" v-for="item in filterCars" :key="item.id">
                    <div class="card p-3">
                        <img :src="item.img" class="card-img-top p-5">
                        <div class="card-body">
                            <h4 class="card-title">{{ item.name }}</h4>
                            <div class="card-text">
                                <div class="row row-cols-sm-2 row-cols-lg-4 mb-3 text-secondary">
                                    <div class="col-3"><font-awesome-icon icon="fa-solid fa-car" class="icon"/>{{ item.cc }}cc</div>
                                    <div class="col-3"><font-awesome-icon icon="fa-solid fa-users" class="icon"/>{{ item.number }}</div>
                                    <div class="col-3"><font-awesome-icon icon="fa-solid fa-gear" class="icon"/>{{ item.system }}</div>
                                    <div class="col-3"><font-awesome-icon icon="fa-solid fa-gas-pump" class="icon"/>{{ item.gas }}</div>
                                </div>
                                <p>{{ item.content }}</p>
                            </div>
                            <div class="card-bottom d-flex align-items-center justify-content-between">
                                <h4>NT$ <span>{{ item.price }}</span>/日</h4>
                                <button @click="showRsv(item)">我要預約</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <teleport to='body'>
        <ConfirmForm @hideRsv="hideRsv" v-if="reserve" :sendData="sendData"></ConfirmForm>
    </teleport>
</template>

<script>
    import { computed, onMounted, reactive, ref } from 'vue'
    import { vehicle } from '../../../assets/js/vehicle'
    import ConfirmForm from './ConfirmForm'

    export default {
        name: 'CarsModel',
        components: {
            ConfirmForm,
        },
        setup() {
            let visibility = ref('all');
            let reserve = ref(false);
            let sendData = reactive([]);

            // 開、關以及傳送資料給ConfirmForm頁面
            function showRsv(item) {
                reserve.value = true;
                sendData.push(item);
            }
            function hideRsv(close) {
                reserve.value = close;
            }

            // 車款資料
            const allCars = reactive([
                vehicle
            ]);
            // 篩選車款
            const filterCars = computed(() => {
                switch(visibility.value) {
                    case 'sedan':
                        return allCars[0].filter(item => item.type === '轎車');
                    case 'suv':
                        return allCars[0].filter(item => item.type === '休旅車');
                    case 'pickup': 
                        return allCars[0].filter(item => item.type === '皮卡');
                    case 'truck':
                        return allCars[0].filter(item => item.type === '貨車');
                    default:
                        return allCars[0]
                }
            })
            
            // 新增active className
            function isAct() {
                let items = document.querySelectorAll('.items');
                items.forEach(item => {
                    item.addEventListener('click', function() {
                        items.forEach(btn => btn.classList.remove('active'));
                        this.classList.add('active');
                    });
                });
            }
            onMounted(() => {
                isAct()
            })
            
            return {
                visibility,
                allCars,
                filterCars,
                isAct,
                showRsv,
                reserve,
                hideRsv,
                sendData,
            }
        }   
    }
</script>

<style lang='scss' scoped>
    $blue: #003060;
    $yellow: #ffc107;

    h3 {
        text-align: center;
        font-size: 3rem;
        color: $blue;
        font-weight: bold;
        margin-bottom: 2rem;
    }
    .items {
        padding: 1rem 4rem;
        border: 1px solid $blue;
        border-radius: 1rem;
        text-align: center;
        cursor: pointer;
        &.active, &:hover {
            background: $blue;
            .icon {
                color: #fff;
            }
            h5 {
                color: #fff;
            }
        }
        .icon {
            color: $blue;
            font-size: 2.5rem;
            margin-bottom: .5rem;
        }
        h5 {
            color: $blue;
            font-size: 1.6rem;
            margin: 0;
        }
    }
    .card-title {
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
        font-size: 2rem;
        color: $blue;
    }
    .card-text  {
        font-size: 1.6rem;
        .icon {
            margin-right: .5rem;
        }
    }
    .card-bottom {
        span {
            color: red;
            font-size: 2rem;
        }
        button {
            font-size: 1.6rem;
            color: $blue;
            background: $yellow;
            padding: 1rem;
            text-decoration: none;
            border: none;
            border-radius: 5px;
            &:hover {
                background-color:#FFD306;
            }
        }
    }
   
</style>