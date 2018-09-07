<template>
    <div>
      <div class="gundong1">
          <swiperCom :imgList='imgList'></swiperCom>
          <fristPage></fristPage>
          
      </div>
    </div>
</template>

<script>
import swiperCom from '@/components/index/swiperCom.vue'
import fristPage from '@/components/index/fristPage.vue'
import data from '@/data/data.js'


export default {
  name: 'home',
  data:function(){
    return {
        productList :data.products,
        imgList:[
                    'https://edzimg.edianzu.com/homepage/1d935ab08bbb8aa905484038efb52e55.jpg',
                    'https://edzimg.edianzu.com/homepage/1ce227496a97deeb624329cb48a3c433.jpg',
                    'https://edzimg.edianzu.com/homepage/80e6e5eda9a01468c7b449912bb12494.jpg'
                ]
    }  
  },
  components: {
    swiperCom,fristPage
  }
}
</script>


<style>
html body .gundong1{
   overflow: scroll;
   height: 100%;
  }
</style>

