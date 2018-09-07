var data = {
    productTypes: [
        { 
            name: '笔记本', 
            className: 'bijiben', 
            filter:[{
                name:'品牌',
                key:'brand',
                list:['易点租','ThinkPad']
            }, {
                    name: '销量',
                    key: 'priceTypes',
                    list: ['0-80', '80-100']
                }, {
                    name: '成色',
                    key: 'isNew',
                    list: ['全新设备', '非全新设备']
                }]
        }, 
        { 
            name: '台式机', 
            className: 'pc',
            filter: [{
                name: '品牌',
                key: 'brand',
                list: ['易点租', 'ThinkPad']
            }, {
                name: '成色',
                key: 'isNew',
                list: ['全新设备', '非全新设备']
            }]
        }, 
        { 
            name: '一体机', 
            className: 'yitiji',
            filter: [{
                name: '品牌',
                key: 'brand',
                list: ['易点租', 'ThinkPad']
            }, {
                name: '销量',
                key: 'saleCount',
                list: ['0-80', '80-100']
            }]
        },
        { 
            name: '服务器', 
            className: 'yitiji',
            filter: [{
                name: '品牌',
                key: 'brand',
                list: ['易点租', 'ThinkPad']
            }, {
                name: '销量',
                key: 'saleCount',
                list: ['0-80', '80-100']
            }]
        },
        { 
            name: '电风扇', 
            className: 'yitiji',
            filter: [{
                name: '品牌',
                key: 'brand',
                list: ['易点租', 'ThinkPad']
            }, {
                name: '销量',
                key: 'saleCount',
                list: ['0-80', '80-100']
            }]
        },
        { 
            name: '手机', 
            className: 'yitiji',
            filter: [{
                name: '品牌',
                key: 'brand',
                list: ['易点租', 'ThinkPad']
            }, {
                name: '销量',
                key: 'saleCount',
                list: ['0-80', '80-100']
            }]
        },
        { 
            name: '电脑', 
            className: 'yitiji',
            filter: [{
                name: '品牌',
                key: 'brand',
                list: ['易点租', 'ThinkPad']
            }, {
                name: '销量',
                key: 'saleCount',
                list: ['0-80', '80-100']
            }]
        },
        { 
            name: '篮球', 
            className: 'yitiji',
            filter: [{
                name: '品牌',
                key: 'brand',
                list: ['易点租', 'ThinkPad']
            }, {
                name: '销量',
                key: 'saleCount',
                list: ['0-80', '80-100']
            }]
        },
        { 
            name: '机箱', 
            className: 'yitiji',
            filter: [{
                name: '品牌',
                key: 'brand',
                list: ['易点租', 'ThinkPad']
            }, {
                name: '销量',
                key: 'saleCount',
                list: ['0-80', '80-100']
            }]
        },
        { 
            name: '按摩椅', 
            className: 'yitiji',
            filter: [{
                name: '品牌',
                key: 'brand',
                list: ['易点租', 'ThinkPad']
            }, {
                name: '销量',
                key: 'saleCount',
                list: ['0-80', '80-100']
            }]
        },
        { 
            name: '餐厅', 
            className: 'yitiji',
            filter: [{
                name: '品牌',
                key: 'brand',
                list: ['易点租', 'ThinkPad']
            }, {
                name: '销量',
                key: 'saleCount',
                list: ['0-80', '80-100']
            }]
        },
        { 
            name: '菜刀', 
            className: 'yitiji',
            filter: [{
                name: '品牌',
                key: 'brand',
                list: ['易点租', 'ThinkPad']
            }, {
                name: '销量',
                key: 'saleCount',
                list: ['0-80', '80-100']
            }]
        },
        { 
            name: '摩托车', 
            className: 'yitiji',
            filter: [{
                name: '品牌',
                key: 'brand',
                list: ['易点租', 'ThinkPad']
            }, {
                name: '销量',
                key: 'saleCount',
                list: ['0-80', '80-100']
            }]
        },
        { 
            name: '道具', 
            className: 'yitiji',
            filter: [{
                name: '品牌',
                key: 'brand',
                list: ['易点租', 'ThinkPad']
            }, {
                name: '销量',
                key: 'saleCount',
                list: ['0-80', '80-100']
            }]
        }
    ],
    products:{
            bijiben:[
                {
                    id:'134884091',
                    name: '全新 易点租 QuickPC E22 Pro 笔记本 (G3930 2.9Ghz/4G/120G SSD/核显/E2016H 19.5英寸/USB无线网卡/USB键鼠/8L机箱/易点租保修)',
                    price: 85,
                    tag:'随租随还',
                    isNew: '全新设备',
                    saleCount:550,
                    imgUrl:require('../assets/img/pc.jpg'),
                    brand: '易点租',
                    priceTypes: '0-80'
                    
                    
                },
                {
                    id: '1348804091',
                    name: 'ThinkPad X220 12.5英寸便携笔记本电脑(i5/4GB/500GB/集显)',
                    price: 80,
                    tag: '随租随还',
                    isNew: '非全新设备',
                    saleCount: 500,
                    imgUrl: require('../assets/img/pc.jpg'),
                    brand: 'ThinkPad',
                    priceTypes: '0-80'



                },
                {
                    id: '1348984091',
                    name: 'ThinkPad X220  极速版  12.5英寸便携笔记本电脑(i5/4GB/120GB SSD/集显)',
                    price: 80,
                    tag: '随租随还',
                    isNew: '非全新设备',
                    saleCount: 530,
                    imgUrl: require('../assets/img/pc.jpg'),
                    brand: 'ThinkPad',
                    priceTypes: '80-100'



                },
            ],
            pc:[
                {
                    id: '1340884091',
                    name: '全新 易点租 QuickPC E22 Pro 台式机 (G3930 2.9Ghz/4G/120G SSD/核显/E2016H 19.5英寸/USB无线网卡/USB键鼠/8L机箱/易点租保修)',
                    price: 75,
                    tag: '随租随还',
                    isNew: true,
                    saleCount: 500,
                    imgUrl: require('../assets/img/pc.jpg'),
                    brand: 'ThinkPad',
                },
                {
                    id: '1348840912',
                    name: '全新 易点租/Edianzu 易办公QuickPC E21 台式机 (G3930/4G/1T/集显/飞利浦19.5英寸显示器/Linux/含键盘鼠标)	',
                    price: 80,
                    tag: '随租随还',
                    isNew: true,
                    saleCount: 500,
                    imgUrl: require('../assets/img/pc.jpg'),
                    brand: 'ThinkPad',
                },
                {
                    id: '1348840941',
                    name: '全新 易点租 QuickPC E33A Pro 台式机(i3-8100 3.6GHz/8G/1T HDD/核显/E2216H 21.5寸/USB无线网卡/USB键鼠/Linux/8L机箱/易点租保修)',
                    price: 79,
                    tag: '随租随还',
                    isNew: true,
                    saleCount: 500,
                    imgUrl: require('../assets/img/pc.jpg'),
                    brand: 'ThinkPad',
                }
            ],
            yitiji:[
                {
                    id: '134884091ss',
                    name: '全新 苹果(Apple) iMac MNDY2CH/A 21.5英寸一体电脑(i5 3.0G四核/8G/1T/Radeon Pro 555 2G独显/Retina 4K)',
                    price: 75,
                    tag: '随租随还',
                    isNew: true,
                    saleCount: 500,
                    imgUrl: require('../assets/img/pc.jpg'),
                    brand: 'ThinkPad',
                }, {
                    id: '134884091s',
                    name: '全新 苹果(Apple) iMac MNE92CH/A 27英寸一体电脑(i5 3.4G四核/8G/1T Fusion/Radeon Pro 570 4G独显/Retina 5K)',
                    price: 80,
                    tag: '随租随还',
                    isNew: true,
                    saleCount: 500,
                    imgUrl: require('../assets/img/pc.jpg'),
                    brand: 'ThinkPad',
                }, {
                    id: '134884091s',
                    name: '全新 联想(Lenovo) AIO 520s 23英寸一体电脑 (i3-6006U/4GB/256G SSD/2G独显/FHD显示器/1年保修)',
                    price: 79,
                    tag: '随租随还',
                    isNew: true,
                    saleCount: 500,
                    imgUrl: require('../assets/img/pc.jpg'),
                    brand: 'ThinkPad',
                }
            ]
        },
        productPage:{
            id:'xxxxdsjdfsofjsi',
            name: '全新 易点租 QuickPC E22 Pro 台式机 (G3930 2.9Ghz/4G/120G SSD/核显/戴尔 E2016H 19.5英寸/USB无线网卡/USB键鼠/8L机箱/易点租保修)',
            productList:[
                {
                    name: 'G3930 2.9 Ghz / 4 G / 1 T / 核显 / E2016H 19.5 英寸 ',
                    price:2500,
                    imgList: [
                        require('../assets/img/img1.jpg'),
                        require('../assets/img/img2.jpg'),
                        require('../assets/img/img3.jpg'),
                    ],
                },
                {
                    name: ' G3930 2.9 Ghz / 4 G / 120 G SSD / 核显 / E2016H 19.5 英寸 ',
                    price: 2000,
                    imgList: [
                        require('../assets/img/bijiben.jpg'),
                        require('../assets/img/img2.jpg'),
                        require('../assets/img/img3.jpg'),
                    ],
                }
            ],
            zulin:[
                {
                    price:85,
                    time:24,
                    moshi: '随租随还'
                },
                {
                    price: 230,
                    time: 14,
                    moshi: '租完即送'
                }, {
                    price: 140,
                    time: 24,
                    moshi: '租完即送'
                }
            ],
            shouhou: '易点租提供整机快换服务'
        },
    titleName:[
        '热销机型',
        '行政办公',
        '技术开发',
        '商务便携',
        '图像处理',
        '外设配置',
        '热销机型',
        '行政办公',
        '技术开发',
        '商务便携',
        '图像处理',
        '外设配置',
        '热销机型',
        '行政办公',
        '技术开发',
        '商务便携',
        '图像处理',
        '外设配置',
        '热销机型',
        '行政办公',
        '技术开发',
        '商务便携',
        '图像处理',
        '外设配置',
    ]
    
}

export default  data;