 
 layui.use(['form', 'layedit', 'laydate','table'], function(){
    var form = layui.form
     ,layer = layui.layer
     ,layedit = layui.layedit
     ,laydate = layui.laydate
	 ,table = layui.table;
 
  lay('.test-item').each(function(){
    laydate.render({
      elem: this
      ,trigger: 'click'
    });
  });
  
  table.render({
    elem: '#test'
    ,url:'../api/Risk.json',
  	cellMinWidth: 80
    ,cols: [[
  		{field:'id',  title: '序号'}
      ,{field:'username',  title: '预案编号'}
      ,{field:'sex',  title: '计划类型'}
      ,{field:'city', title: '计划名称'}
      ,{field:'sign', title: '检查类型'}
      ,{field:'experience',  title: '检查要求'}
      ,{field:'score', title: '负责人'}
      ,{field:'score', title: '起止时间'}
      ,{field:'score', title: '状态'}
      
    ]]
  
  });
  
  
  });