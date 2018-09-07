<template>
    <div id="child">
        <div class="socre">
            <div class="laoda">
                <div class="son">
                    <div class="son1"></div>
                    <div>免押金</div>
                </div>
                <div class="son">
                    <div class="son1"></div>
                    <div>随租随借</div>
                </div>
                <div class="son">
                    <div class="son1"></div>
                    <div>按月付</div>
                </div>
                <div class="son">
                    <div class="son1"></div>
                    <div>全程保障</div>
                </div>
            </div>

            <!-- mian -->
            <div class="main" v-for="(item,index) in dataName" :key="index">
                <div class="fu1">{{item}}</div>
                <div class="fu2">
                    <div class="son">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div class="son">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div> 

            <div class="after"></div>
        </div>
    </div>
</template>


<script>
import data from '../../data/data.js'
export default {
    data:function(){
        return{
            dataName:[]
        }
    },
    beforeMount:function () {
        this.dataName = data.titleName;
    }
}
</script>



<style >
.socre{
    /* overflow: scroll; */
    width: 100%;
    /* 溢出滚动的时候需要设置子组件的高，才有作用。 */
    height: 20rem; 
    /* background-color: aqua; */
    text-align: center;
}
.socre span{
    display: block;
    
}
.laoda{
    width: 100%;
    height: 2.0rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;
}
.laoda .son{
    width: 1rem;
    height: 1.5rem;
    border: 1px solid red;
    line-height: 0.6rem;
}
.laoda .son .son1{
    width: 100%;
    height: 1.0rem;
    background: palevioletred;
    border-radius: 0.5rem;
}
.laoda .son div{
    font-size: 0.2rem;
    
}

.main{
    width: 100%;
    height: 5rem;

}
.main .fu1{
    width: 100%;
    height: 0.8rem;
    background: #f2f2f2;
    text-align: center;
    line-height: 0.8rem;
    font-size: 0.4rem;
}
.main .fu2 .son{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.main .fu2 .son div{
    flex: 1;
    height: 2.1rem;
    border: 1px solid red;
}
.after{
    width: 100%;
    height: 2rem;
}
</style>

