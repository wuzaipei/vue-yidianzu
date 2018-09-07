<template>
    <div class='category'>
        <div class="categoryTab">
            <div>默认排行</div>
            <div @click="toggleSale">销量 <span class='topSjx' :class="{asc:saleSort=='asc'}"></span> <span class='bottomSjx' :class="{desc:saleSort=='desc'}"></span>  </div>
            <div @click="toggleSale666">租金 <span class='topSjx' :class="{asc:saleSort=='asc'}"></span> <span class='bottomSjx' :class="{desc:saleSort=='desc'}"></span>  </div>
            <div @click="showMask">筛选</div>
        </div>
        <div class="types">
            <div class="typesList">
                <div @click="allProducts">全部分类</div>
                <div v-for='(item,index) in types' :key="index" @click="changeTypes(index)" >{{item.name}}</div>
            </div>
            <div class="productList">
                <div class='productItem'  v-for="(item,index) in productList" :key="index" @click="goProduct(item)">
                    <div class="left">
                        <img :src="item.imgUrl" alt="">
                    </div>
                    <div class="right">
                        <div class="title">{{item.name}}</div>
                        <div class="price">￥{{item.price}}.00</div>
                        <div class="price">{{item.saleCount}}台/月</div>
                        <div class="tagname">
                            <div class="itemtag" v-if='item.isNew'>全新设备</div>
                            <div class="itemtag" v-if='item.tag=="随租随还"'>随租随还</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class='mask' v-show='isMask'>
            <div class="rightMask">
                <div class="maskTop">
                    <span @click="hideMask">返回</span>
                    <span>筛选</span>
                </div>
                <div class="maskContent">
                    <div class="maskItem" v-for='(item,i) in filters' :key='i'>
                        <h3>{{item.name}}</h3>
                        <span :class="{active:filterConfig[i]==''}">不限</span>
                        <span :class="{active:filterConfig[i]== x }" v-for="(x,index) in item.list" :key="index" @click="filterBtn(x,i)">{{x}}</span>
                    </div>
                </div>
                <div class='maskBottom'>
                    <button class="buleft">重置</button>
                    <button class="buright" @click="submitMask">确定</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import data from '../../data/data.js'
export default {
    data:function(){
        return {
            types:[],
            productList:[],
            currentCategory:'bijiben',
            saleSort:'',//asc,从小到大，desc,从大到小
            filters:[],
            isMask:false,
            filterConfig:[]


        }
    },
    beforeMount:function () {
        this.types = data.productTypes;
        this.productList = data.products[this.currentCategory]
        var that = this
        data.productTypes.forEach(function (item) {
            if(item.className == that.currentCategory){
                that.filters = item.filter
            }
        })
        this.filters.forEach(function (item) {
            that.filterConfig.push('')
        })
    },
    methods:{
        allProducts:function(){
            this.productList = []
            for (const key in data.products) {
               
               data.products[key].forEach(item => {
                   this.productList.push(item)
               });
               
            }
            console.log(this.productList)
        },
        changeTypes:function (index) {
            var key = this.types[index].className
            this.currentCategory = key
            this.productList = data.products[this.currentCategory]
        },
        toggleSale:function () {
            if(this.saleSort == ''){
                this.saleSort = 'asc'
                this.ascSort('saleCount')
            }else if(this.saleSort == 'asc'){
                this.saleSort = 'desc'
                 this.descSort('saleCount')
            }else if(this.saleSort == 'desc'){
                this.saleSort = 'asc'
                this.ascSort('saleCount')
            }
        },
        toggleSale666(){
            if(this.saleSort == ''){
                this.saleSort = 'asc'
                this.ascSort('saleCount')
            }else if(this.saleSort == 'asc'){
                this.saleSort = 'desc'
                 this.descSort('saleCount')
            }else if(this.saleSort == 'desc'){
                this.saleSort = 'asc'
                this.ascSort('saleCount')
            }
        },
        ascSort:function (key) {
            this.productList.sort(function(a,b) {
                if(a[key]<b[key]){
                    return -1
                }else if(a[key]==b[key]){
                    return 0
                }else{
                    return 1
                }
            })
        },
        descSort:function(key) {
            this.productList.sort(function(a,b) {
                if(a[key]<b[key]){
                    return 1
                }else if(a[key]==b[key]){
                    return 0
                }else{
                    return -1
                }
            })
        },
        showMask:function () {
            this.isMask = true;
        },
        hideMask:function () {
            this.isMask = false;
        },
        filterBtn:function (x,i) {
            // console.log(this.filterConfig)
            // console.log(x)
            // console.log(i)

            // this.filterConfig[i] = x
            this.$set(this.filterConfig,i,x)
            console.log(this.filterConfig)
        },
        submitMask:function () {
            var that = this
            this.productList = data.products[this.currentCategory]
            this.filterConfig.forEach(function (item,i) {
                console.log(item, i)
                if(item!==''){
                    that.productList = that.productList.filter(function (item) {
                        return  item[that.filters[i].key] == that.filterConfig[i]
                    })
                }

            })
            this.isMask = false;
        },
        goProduct(product){
            // console.log(product)
            this.$router.push({name:'productPage',params:product.id})
        }

    }
}
</script>


<style scoped>
.categoryTab{
    display: flex;
    justify-content: space-around;
    font-size: 0.3rem;
    position: fixed;
    width: 100%;
    border: 1px solid #ccc;
    background: white;
}
.types{
    display: flex;
    font-size: 0.5rem;

}
.typesList{
    width: 2rem;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    position: fixed;
    height: 100%;
    margin-top: 1rem;
}
.productList{
    width: 5.5rem;
    display: flex;
    flex-direction: column;
    padding-left: 4rem;
    margin-top: 1rem;
}
.right{
    margin: 0.2rem 0.2rem 0.2rem 0.2rem;
}

.productItem{
    display: flex;
    font-size: 0.2rem;
    line-height: 0.4rem;
    justify-content: space-around;
    align-items: center
    
}

.productItem img{
    width: 2rem;

}

.typesList div{
    width: auto;
    height: 1rem;
    font-size: 0.3rem;
    text-align: center;
    line-height: 1rem;
    border: 1px solid #ccc;
}
.productItem .price{
    color: red;
    font-size: 0.3rem;
    /* padding-left: 0.2rem; */
}

.tagname{
    display: flex;
    justify-content: space-around;
}
.tagname div{
    width: 1.5rem;
    height: 0.6rem;
    font-size: 0.2rem;
    line-height: 0.6rem;
    text-align: center;
    border:1px solid #ccc;
    border-radius: 0.3rem;
}

.categoryTab div{
    position: relative;
    width: 1.5rem;
    height: 1rem;
    line-height: 1rem;
    text-align: center;

}

.topSjx{
    display: block;
    position: absolute;
    right: 0px;
    top: 0rem;
    width: 0;
    height: 0;
    border-top: 0.2rem solid transparent;
    border-left: 0.2rem solid transparent;
    border-right: 0.2rem solid transparent;
    border-bottom: 0.2rem solid #aaa;
}

.bottomSjx{
    display: block;
    position: absolute;
    right: 0px;
    top: 0.5rem;
    width: 0;
    height: 0;
    border-top: 0.2rem solid #aaa;
    border-left: 0.2rem solid transparent;
    border-right: 0.2rem solid transparent;
    border-bottom: 0.2rem solid transparent;
}

.asc.topSjx{
    border-bottom: 0.2rem solid skyblue;
}
.desc.bottomSjx{
    border-top: 0.2rem solid skyblue;
}

.mask{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    background:rgba(0, 0,0, 0.6);
    font-size:0.4rem;
}
.rightMask{
    position:absolute;
    right: 0;
    width: 5.5rem;
    background: #ffffff;
    height: 100%;
}


.maskItem span{
    display: inline-block;
    width: 2rem;
    height: 0.8rem;
    background:  #ccc;
    border-radius: 0.4rem;
    text-align: center;
    line-height: 0.8rem;
    font-size: 0.25rem;
}
.maskItem span.active{
    background: skyblue;
}
.maskBottom button{
    width: 2.8rem;
    height: 0.8rem;
    font-size: 0.4rem;
    line-height: 0.8rem;
    text-align: center;
    background-color: #ffffff;
    border-top: 1px solid #ccc;
}
.maskBottom .buright{
    position: absolute;
    bottom: 0rem;
    right: 0rem;
    border-right: none;
    border-bottom: 1px solid #ccc;
    
}
.maskBottom .buleft{
    position: absolute;
    bottom: 0rem;
    left: 0rem;
    border-left: none;
    border-bottom: 1px solid #ccc;
}

</style>


