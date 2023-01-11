<template>
    <div class="dot-links d-flex align-items-center justify-content-center flex-column position-fixed">
        <a href="carBooking.html">
            <div class="reserve-btn">
                <div class="circle">
                    <font-awesome-icon icon="fa-solid fa-car" class="icon"/>
                </div>
            </div>
        </a>
        <div class="arrow-btn">
            <div class="circle" id="topBtn">
                <font-awesome-icon icon="fa-solid fa-arrow-up" class="icon"/>
            </div>
        </div>
    </div>
    
</template>

<script>
    import { onMounted } from 'vue';
    import topBtn from '../assets/js/dotLink';

    export default {
        name: 'dotLink',
        setup() {

           
            onMounted(() => {
                topBtn()
            });
            
            return {

            }
        }     
    }
</script>

<style lang='scss' scoped>
    $blue: #003060;
    $yellow: #ffc107;
    %dots {
       .circle {
            width: 5rem;
            height: 5rem;
            background: $yellow;
            border-radius: 50%;
            position: relative;
            cursor: pointer;
            z-index: 1;
            &:hover {
                background-color:#FFD306;
            }
            .icon {
                position: absolute;
                top: 50%;
                left: 50%;
                font-size: 2rem;
                transform: translate(-50%, -50%);
                color: $blue;
            }  
        } 
    }

    .dot-links {
        right: 2.5rem;
        bottom: 2.5rem;
        .reserve-btn {
            margin-bottom: 2rem;
            @extend %dots;
            .circle {
                border-radius: 5px;
                .text {
                    color: $blue;
                }
            }
        }
        .arrow-btn { 
            @extend %dots;
        }
    }
    
</style>