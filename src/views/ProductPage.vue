<template>
    <div class='productPage'>
        <div class="productNav" @click="fenlei">
            <span>{{dayu}}</span>
            商品详情
        </div>
        <swiperCom :imgList='imgList' width='7.5rem' height='7.5rem' ></swiperCom>
        <h1 class="s666">{{product.name}}</h1>
        <hr>
        <div class="chooseProduct">
            <h3>选择商品</h3>
            <div class="choose">
                <button :class="{active:productIndex==index}" v-for="(item,index) in product.productList" :key="index" @click='toggleProduct(index)'>{{item.name}}</button>
            
            </div>
            
        </div>
        <hr>
        <div class="chooseZulin">
            <h3>租赁方式</h3>
            <div class="choose">
                <button :class="{active:zulinIndex==i}" v-for="(item,i) in product.zulin" :key="i" @click='toggleZulin(i)'>
                    <h4>月租金￥{{item.price}},租期{{item.time}}个月</h4>
                    <h4>{{item.moshi}}: <span v-if="item.moshi=='随租随还'">到期归还易点租，6个月后可随时退还</span><span v-else>到期归承租方，不可退还</span></h4>
                </button>
            
            </div>
            
        </div>
        <hr>
        <div class='result'>
            <p>
                <span>起租日期：</span><input type="date" v-model="time">
            </p>
            <p>
                <sb>数量：</sb>
                <liu>
                    <span @click="jianNum">-</span>
                    <span>{{num}}</span>
                    <span @click="addNum">+</span>
                </liu>
            </p>
            <p>
                <span>售后：</span>
                <span>{{this.product.shouhou}}</span>
                
            </p>
            <p>
                <span>押金：</span>
                <span>{{product.productList[this.productIndex].price*num}}</span>
                
            </p>
            <p>
                <span>租金：</span>
                <span>{{product.zulin[this.zulinIndex].price*num}}</span>
                
            </p>
        </div>
        <hr>
        <libsvm class="s777">
            <h1 @click="goBuyCar">购物车购买数量：
            <span v-if="$store.state.buyCar.num!==0">{{$store.state.buyCar.num}}</span> 
            </h1>
            <button @click="addBuyCar">加入购买</button>
        </libsvm>
        
        

    </div>
</template>


<script>
import swiperCom from '@/components/index/swiperCom.vue';
import data from '@/data/data.js'
export default {
    data:function(){
        return {
            product:data.productPage,
            imgList:data.productPage.productList[0].imgList,
            productIndex:0,
            zulinIndex:0,
            time:new Date(),
            num:1,
            dayu:'<'
        }
    },
    beforeMount:function () {
      //ajax将产品ID传出去，后端就根据产品ID返回相对应的产品数据（JSON文件）  
    },
    mounted() {
        // console.log(this)
    },
    components:{
        swiperCom
    },
    methods: {
        toggleProduct:function (index) {
            this.imgList=this.product.productList[index].imgList
            this.productIndex = index;
        },
        toggleZulin:function (index) {
           
            this.zulinIndex = index;
            //  console.log(this)
        },
        addNum:function () {
            this.num++
        },
        jianNum:function () {
            this.num--
            if(this.num<0){
                this.num=0
            }
        },
        addBuyCar:function(){
            var productBuyCar = {
                num:this.num,
                product:this.product,
                productIndex:this.productIndex,
                zulinIndex:this.zulinIndex,
            }

            this.$store.commit('addProducts',productBuyCar)
        },
        goBuyCar(){
            this.$router.push({path:'/buycar'})
        },
        fenlei(){
            this.$router.push({path:'/category'})
        }
    }

}
</script>

<style scoped>
.productNav{
    text-align: center;
    height: 0.8rem;
    width: 100%;
    line-height: 0.8rem;
    font-size: 0.4rem;
    font-weight: 500;
    font-family: 黑体;
    position: fixed;
    background:white;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    border-left: none;
    border-right: none;
    z-index: 2;

}
.productNav span{
    position: absolute;
    left: 0.2rem;
    color:  #666d71;
}
.swiper-container.swiper-container-horizontal.swiper-container-ios{
    margin-top: 0.8rem;
}
.s666{
    font-size: 0.25rem;
    color: #666d71;
}
.productPage{
    font-size: 0.2rem;
    width: 100%;
    height: 100%;
    overflow: scroll !important;
}
.choose button.active{
    border:1px solid red;
}
.chooseProduct h3{
    margin-bottom: 0.2rem;
    margin-top: 0.2rem;
    font-size: 0.25rem;
    color: #666d71;
    padding-left: 0.2rem;
}
.chooseProduct button{
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    width: auto;
    height: 0.5rem;
    margin-bottom: 0.2rem;
    font-size: 0.25rem;
    color: #666d71;
    text-align: left;
    background:white;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
}
.chooseZulin h3{
    margin-bottom: 0.2rem;
    margin-top: 0.2rem;
    font-size: 0.25rem;
    color: #666d71;
    padding-left: 0.2rem;
}
.chooseZulin button{
    padding-left: 0.2rem;
    width: 80%;
    height: 1.0rem;
    margin-bottom: 0.2rem;
    font-size: 0.25rem;
    color: #666d71;
    text-align: left;
    background:white;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
}
.result p{
    padding: .4rem;
    border-top: 1px solid #f2f2f2;
    height: 1rem;
    clear: both;
    color: #666d71;
    background: white;
    font-size: 0.25rem;
    
    
}
.result p{
    display: flex;
}
.result p input{
        height: 0.4rem;
}
.result p liu{
    display: block;
    display: flex;
    border-radius: 0.5rem;
}
.result p liu span{
    display: block;
    width: 0.8rem;
    height: 0.4rem;
    border: 1px solid #ccc;
    text-align: center;
}
.s777{
    display: block;
    position: relative;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    display: flex;
    font-size: 0.15rem;
    padding-left: 0.4rem;
}
.s777 button{
    width: 1.8rem;
    height: 0.8rem;
    line-height: 0.5rem;
    background: red;
    border:none;
    border-radius: 0.2rem;
    position: absolute;
    right: 0.1rem;
    bottom: 0.1rem;
}
</style>

// var saveFile = function(data, filename) {
//                 var link = document.createElement('a');
//                 link.href = data;
//                 link.download = filename;
//                 var event = document.createEvent('MouseEvents');
//                 event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
//                 link.dispatchEvent(event);
//             };