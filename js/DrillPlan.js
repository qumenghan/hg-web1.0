 
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
      ,{field:'username',  title: '计划编号'}
      ,{field:'sex',  title: '计划名称'}
      ,{field:'city', title: '计划类型'}
      ,{field:'sign', title: '计划时间'}
      ,{field:'score', title: '登记人'}
      ,{field:'score', title: '登记时间'}
      ,{field:'score', title: '计划状态'}
    ]]
  
  });
  
  
  });