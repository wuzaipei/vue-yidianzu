<template>
    <div>
        <div @click="sy" class="navLogin">
            <span>{{cyf}}</span>
            登录易点租
        </div>
        <div class="quehuang">
            <button @click="clickZhanghao">账号密码登录</button>
            |
            <button @click='clickMobild'>手机快捷登录</button>
        </div>
        <div class='com'>
            <!-- <transition name="slide" mode="in-out" >
                <component :is="com"></component>
            </transition> -->
            
            <Zhanghao :class="zhClass"></Zhanghao>
            <Mobile :class="mClass"></Mobile>
        </div>
        <div class="dl">
            <div @click="denglu" class="dl1">立即登录</div>
            <div class="dl2">
                <div class="dlz">立即注册</div>
                <div class="dlw">忘记密码</div>
            </div>
        </div>
        
    </div>
</template>


<script>

import Zhanghao from '@/components/login/zhanghao.vue'
import Mobile from '@/components/login/mobile.vue'

export default {
    data(){
        return {
            isZhanghao:true,
            com:'Zhanghao',
            zhClass:'',
            mClass:'',
            cyf:'<',
            childrenData:''
        }
    },
    methods:{
        clickZhanghao(){
            // this.com = 'Zhanghao';
            this.zhClass=['active','animated','bounceInLeft']
            this.mClass = ['animated','bounceOutLeft']

        },
        clickMobild(){
            this.mClass=['active','animated','bounceInRight']
            this.zhClass = ['animated','bounceOutRight']
        },
        sy(){
            this.$router.push({path:'/'})
        },
        denglu(){
            // console.log(Zhanghao.data().zh666)
            this.childrenData = this.$children[0]._data
            console.log(this.childrenData)
            if(this.childrenData.ma666 == '123456' && this.childrenData.zh666 == '123456' && this.childrenData.zm666 == 'admin'){
                this.$router.push('/')
            }
            
        }
    },
    components:{
        Zhanghao,Mobile
    }
}
</script>


<style>

    .form{
        font-size:0.2rem;
        width: 7.5rem;
        height: 3.5rem;
        /* background: skyblue; */
        /* transition: all 5s; */
        position: absolute;
        left: 0;
        top: 0;
    }

    .fade-enter-active, .fade-leave-active {
    transition: opacity 5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    }


    .slide-enter-active,.slide-leave-active{
        transition: all 0.5s;
    }
    .slide-enter, .slide-leave-to{
        transform: translate(7.5rem,0)
    }

    .active{
        z-index: 10;
    }
.navLogin{
    height: 0.8rem;
    font-size: 0.4rem;
    text-align: center;
    line-height: 0.8rem;
    font-weight: 700;
}
.navLogin span{
    position: absolute;
    top: -0.04rem;
    left: 0.2rem;
    font-size: 0.6rem;
    color: #ccc;
}
.quehuang{
    width: auto;
    height:1.5rem;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 0.4rem;
}
.quehuang button{
    width: 3rem;
    height: 1.4rem;
    display: block;
    border: none;
    background: white;
}
.com{
    position: relative;
    width: 100%;
    height: 3.5rem;
    color: #666d71;
    
}
#zhanghao{
    background: white;
    line-height: 2rem;
}
#zhanghao div{
    width: 90%;
    height: 1rem;
    margin: 0 auto;
    font-size: 0.35rem;
    line-height: 1rem;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
}
#zhanghao div input{
    border:none;
    padding-left: 1rem;
}
#mobile{
    background: white;
}
#mobile div{
    width: 90%;
    height: 1rem;
    margin: 0 auto;
    font-size: 0.35rem;
    line-height: 1rem;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
}
#mobile div input{
    border:none;
    
}
.dl{
    color: #666d71;
    font-size: 0.5rem;
    width: 78%;
    margin: 0 auto;
}
.dl .dl1{
    width: 94%;
    height: 0.8rem;
    font-size: 0.4rem;
    margin: 0 auto;
    background: rgb(55, 163, 255);
    color: white;
    text-align: center;
    line-height: 0.8rem;
    border-radius: 0.1rem;
}
.dl .dl2{
    width: 100%;
    height: 1.5rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.dl .dl2 div{
    width: 2rem;
    height: 0.7rem;
    font-size: 0.3rem;
    line-height: 0.7rem;
    text-align: center;

}
</style>
