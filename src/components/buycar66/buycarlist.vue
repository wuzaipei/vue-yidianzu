<template>
    <div class="buyCar">
        <div class="kongkong" v-if="$store.state.buyCar.num==0">
            <p>购物车空空如也</p>
            <router-link to="/">去逛逛吧</router-link>
        </div>
        <div class="gg1" v-else>
            <div v-for="(item,index) in $store.state.buyCar.carList" :key="index">
                <!-- 根据我们的情况来显示我们的内容。 -->
                <h3 class="gg_img">
                    <img :src="imgdata" alt="">
                    {{item.product.productList[item.productIndex].name}}
                </h3>
                <h4>月租金：￥{{item.product.zulin[item.zulinIndex].price*item.num}}.00</h4>
                <h4>月押金：￥{{item.product.productList[item.productIndex].price*item.num}}.00</h4>

                <h4 class="gg_sl">
                    数--量：
                    <span @click="minusNum(index)">-</span>
                    <span>{{item.num}}</span>
                    <span @click="addNum(index)">+</span>
                </h4>
                <h4 @click="delProduct" class="gg_sc">删除</h4>
            </div>
        </div>

        <div class="zhezao" v-show="isShow">
            <div class="alert" >
                <h3>你是否真的要删除想订购?</h3>
                <button @click="leftt" class="left">取消</button>
                <button @click="delSure" class="right">确定</button>
            </div>
        </div>
    </div>
</template>

<script>
import imgdata from "../../assets/img/bijiben.jpg"
export default {
    data(){
        return{
            isShow:false,
            delIndex:"",
            imgdata:imgdata
        }
    },
    methods:{
        addNum(index){
            this.$store.commit('addCarNum',index)
        },
        minusNum(index){
            this.$store.commit('jianCarNum',index)
        },
        delProduct(index){
            this.isShow = true;
            this.delIndex = index
            
        },
        delSure(){
            this.$store.commit('delCarList',this.delIndex)
            this.$store.commit('sortNum')
            this.isShow = false
        },
        leftt(){
            this.isShow = false
        }
    }
}
</script>

<style>
.buyCar{
    overflow: scroll;
    height: 100%;
}
.kongkong{
    text-align: center;
    line-height: auto;
    font-size: 0.6rem;
    position: absolute;
    top: 40%;
    left: 20%;
}
.gg1{
    overflow: scroll;
    height: 100%;
    font-size: 0.27rem;
    color:  #666d71;
    margin-bottom: 2rem;
}
.gg_img img{
    width: 100%;
    height: auto;

}
.gg1 div h4{
    padding-left: 0.3rem;
    font-size: 0.4rem;
    margin: 0.2rem auto 0.2rem auto;
}
.gg1 div h4.gg_sl{
    display: flex;
}
.gg1 div h4.gg_sl span{
    display: block;
    width: 1.0rem;
    height: 0.5rem;
    border: 1px solid #cccccc;
    text-align: center;
    line-height: 0.5rem;
    border-radius: 0.1rem;
}
.gg1 div h4.gg_sc{
    width: 100%;
    height: 0.8rem;
    padding-top: 0.2rem;
    text-align: center;
    color: red;
    font-size: 0.5rem;
    border: 1px solid orangered;
    border-radius: 0.3rem;
    
    line-height: 0.35rem;
}
.zhezao{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
}
.alert{
    width: 5rem;
    height: 3rem;
    background: white;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -2.5rem;
    margin-top: -1.5rem;
    font-size: 0.4rem;
    position: relative

}
.alert button{
    width: 1.8rem;
    height: 0.7rem;
    font-size: 0.6rem;
    border: 1px solid red;
    border-radius: 0.3rem;
    text-align: center;
    line-height: 0.7rem;
    background: white;
}
.alert button.left{
    position:absolute;
    bottom: 0;
    left: 0;
}
.alert button.right{
    position:absolute;
    bottom: 0;
    right: 0;
}
</style>