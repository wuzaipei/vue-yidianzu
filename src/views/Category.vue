<template>
    <div>
        <navCom></navCom>
        <mainCom></mainCom>
        <tabBtn></tabBtn>
    </div>
</template>

<script>
import navCom from '@/components/index/navCom.vue'
import mainCom from '@/components/catagory/list.vue'
import tabBtn from '@/components/index/tabCom.vue'
export default {
    data:function () {
        return {}
    },
    components:{
        navCom,mainCom,tabBtn,
    }
}
</script>



