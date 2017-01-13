//主菜单数据
module.exports.menuData = {
    'active':[1,11],
    'dataList':[
                {
                  'id':1,
                  'title':'门店管理',
                  'icon':'fa fa-home',
                  'url':'../store/store_manage.html',
                  'list':[]
                  },
                  {
                  'id':2,
                  'title':'餐品管理',
                  'icon':'fa fa-cutlery',
                  'url':'',
                  'list':[{
                              'id':21,
                              'title':'餐品库',
                              'url':'../food/food_list.html'
                          },{
                              'id':22,
                              'title':'餐品分类',
                              'url':'../food/food_sort.html'
                          }]
                  },
                  {
                  'id':3,
                  'title':'订单管理',
                  'icon':'fa fa-table',
                  'url':'',
                  'list':[{
                              'id':11,
                              'title':'订单概述',
                              'url':'../order/order_summary.html'
                          },{
                              'id':12,
                              'title':'所有订单',
                              'url':'../order/order_list_jm.html'
                          }]
                  },
                  {
                    'id':4,
                    'title':'发货管理',
                    'icon':'fa fa-cogs',
                    'url':'',
                    'list':[{
                            'id':31,
                            'title':'已发货',
                            'url':''
                          },{
                              'id':32,
                              'title':'餐品分类',
                              'url':''
                            }]
                  },
                  {
                  'id':5,
                  'title':'模块配置',
                  'icon':'fa fa-cogs',
                  'url':'../configure/configure_time.html',
                  'list':[]
                  }
                  ]
        }

var getdata = "getdata/";//区分服务器接口
//var getdata = "http://cdcdemo.woaap.com/";//区分服务器接口
var getdata = "../../";//区分服务器接口   

//后端接口路径
module.exports.url = {
    //业务结构    
    "structAll":getdata+"/struct/all",//业务结构整体全部
    "structView":getdata+"/struct/view",//业务结构查看
    "structDel":getdata+"/struct/del",//业务结构删除
    "structAdd":getdata+"/struct/add",//业务结构添加
    "structEdit":getdata+"/struct/edit",//业务结构编辑
}
module.exports.devUrl = "http://translite.woaap.com";