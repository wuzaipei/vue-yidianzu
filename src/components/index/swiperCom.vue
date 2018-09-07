<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"  v-for='(item,index) in imgList' :style='{background:"url("+ item +")"}' :key='index' ></div>
            
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        
        <!-- 如果需要滚动条 -->
        <div class="swiper-scrollbar"></div>
    </div>
</template>


<script>
import factory from '@/assets/js/swiper.js'
import test from '@/assets/js/test.js'
import '@/assets/css/swiper.css'
    export default {
        data:function(){
            return {
                imgList:[
                    'https://edzimg.edianzu.com/homepage/1d935ab08bbb8aa905484038efb52e55.jpg',
                    'https://edzimg.edianzu.com/homepage/1ce227496a97deeb624329cb48a3c433.jpg',
                    'https://edzimg.edianzu.com/homepage/80e6e5eda9a01468c7b449912bb12494.jpg'
                ]
            }
        },
        mounted() {
            
            var Swiper = factory()
            var mySwiper = new Swiper ('.swiper-container', {
                loop: true,
                autoplay:true,  //注释：自动播放
                // 如果需要分页器
                pagination: {
                el: '.swiper-pagination',
                },
                
                // 如果需要前进后退按钮
                navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                },
            })        
        },  
    }


</script>


<style>
    .swiper-container {
        width: 7.5rem;
        height: 3.5rem;
        /* overflow: scroll; */
        
    } 
    .swiper-container .swiper-slide{
        background-size:100% 100% !important;
        background-position:50% !important;
    }
</style>