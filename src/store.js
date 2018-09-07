import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    buyCar:{
      num:0,
      carList:[],

    }
  },
  mutations: {
    addProducts:function(state,content){
      state.buyCar.carList.push(content)
      var count = 0
      state.buyCar.carList.forEach(function (item){
        count = count + item.num
      })
      state.buyCar.num = count
    },
    addCarNum(state,index){
      state.buyCar.carList[index].num ++
    },
    jianCarNum(state,index){
      state.buyCar.carList[index].num --
      if(state.buyCar.carList[index].num < 0){
        state.buyCar.carList[index].num=0
      }
    },
    delCarList(state,index){
      state.buyCar.carList.splice(index,1)
    },
    sortNum(state){
      var count = 0
      state.buyCar.carList.forEach(function(item){
        count = count + item.num
      })
      state.buyCar.num = count
    }
  },
  actions: {

  }
})
