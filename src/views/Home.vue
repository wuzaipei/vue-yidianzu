<template>
  <div class="home">
    <navCom></navCom>
    <mainCom></mainCom>
    <tabBtn></tabBtn>
    
  </div>
</template>

<script>
// @ is an alias to /src
import navCom from '@/components/index/navCom.vue'
import mainCom from '@/components/index/mainCom.vue'
import tabBtn from '@/components/index/tabCom.vue'


export default {
  name: 'home',
  components: {
    navCom,mainCom,tabBtn
  }
}
</script>
