<template>
    <div class='tabnav'>
       
        <div :class="{active:$route.name=='home'}" @click="goIndex">首页</div>
        <div :class="{active:$route.name=='category'}" @click="goCategory">分类</div>
        <div :class="{active:$route.name=='buyCar'}" @click="goBuyCar">购物车</div>
        <div :class="{active:$route.name=='login'}" @click="login">我的</div>
    </div>
</template>


<script>
export default {
    data:function () {
        return {}
    },
    methods:{
        goIndex:function() {
            this.$router.push({path:'/'})
        },
        goCategory:function() {
            this.$router.push('category')
        },
        goBuyCar(){
            this.$router.push('buyCar')
        },
        login(){
            this.$router.push('login')
        }
    },
    mounted() {
        // console.log(this)
    },
}
</script>

<style>
    .tabnav{
        height: 1rem;
        width: 7.5rem;
        display: flex;
        font-size:0.5rem;
        line-height: 1rem;
        justify-content: space-around;
        position: fixed;
        bottom: 0px;
        left: 0px;
        background: #fff;
    }
    .active{
        background: pink;
    }
</style>
