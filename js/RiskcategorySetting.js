
layui.use(['tree', 'util'], function(){
  var tree = layui.tree
  ,layer = layui.layer
  ,util = layui.util
  
  //模拟数据
  ,data1 = [{
    title: '风险类别'
    ,id: 1
    ,children: [{
      title: '火灾风险'
      ,id: 1000
    },{
      title: '爆炸风险'
      ,id: 1001
    },{
      title: '高温风险'
      ,id: 1003
    },{
      title: '中毒风险'
      ,id: 1004
    },{
      title: '高空坠落'
      ,id: 1005
    },{
      title: '机械伤害'
      ,id: 1006
    },{
      title: '触电风险'
      ,id: 1007
    }]
  }]
 
 
  //常规用法
  tree.render({
    elem: '#test1' //默认是点击节点可进行收缩
    ,data: data1
  });
});
