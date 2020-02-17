
layui.use(['tree', 'util','table'], function(){
  var tree = layui.tree
  ,layer = layui.layer
  ,util = layui.util
  
  //模拟数据
  ,data1 = [{
    title: '风险区域'
    ,id: 1
    ,children: [{
      title: '生产一区'
      ,id: 1000
    },{
      title: '生产二区'
      ,id: 1001
    },{
      title: '生产三区'
      ,id: 1003
    },{
      title: '生产四区'
      ,id: 1004
    },{
      title: '生产五区'
      ,id: 1005
    },{
      title: '1号罐区'
      ,id: 1006
    },{
      title: '2号罐区'
      ,id: 1007
    }]
  }]
 
 
  //常规用法
  tree.render({
    elem: '#test1' //默认是点击节点可进行收缩
    ,data: data1
  });
  
  var table = layui.table;
  
  table.render({
    elem: '#test'
    ,url:'../api/Risk.json'
    ,cols: [[
		{field:'id',  title: '序号'}
      ,{field:'username',  title: '风险编号'}
      ,{field:'sex',  title: '风险名称'}
      ,{field:'city', title: '所属类别'}
      ,{field:'sign', title: '风险区域'}
      ,{field:'experience',  title: '风险描述'}
      ,{field:'score', title: '责任人'}
	  ,{field:'wealth',  title: '责任部门'}


    ]]

  });
  
});
