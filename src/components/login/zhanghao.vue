<template>
    <div class='form' id="zhanghao" >
                <div>
                    <span>账号：</span>
                    <input type="text" placeholder="请输入账号" v-model="zh666" >
                    <hr>
                    
                </div>
                <div>
                    <span>密 码：</span>
                    <input type="password" placeholder="请输入密码" v-model="ma666">
                </div>
                <div>
                    <span>验证码：</span>
                    <input type="text" placeholder="请输入验证码" v-model="zm666">
                </div>
                
            </div>
</template>

<script>

export default {

    data:function(){
        return{
            zh666:'123456',
            ma666:'123456',
            zm666:'admin'
        }
    },
    methods:{
        // 把对象实例化出去。
        // input(){
        //     this.$emit('input',$event.target.value)
        // }
    }
};

</script>
