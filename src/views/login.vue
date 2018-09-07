<template>
    <div>
        <login></login>
        <tabBtn></tabBtn>
    </div>
</template>

<script>
import login from '@/components/login/log_in.vue'
import tabBtn from '@/components/index/tabCom.vue'
export default {
    data:function () {
        return {}
    },
    components:{
        login,tabBtn,
    }
}
</script>



