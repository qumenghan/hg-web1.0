 
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
      ,{field:'sex',  title: '版本'}
      ,{field:'city', title: '预案名称'}
      ,{field:'sign', title: '预案分类'}
      ,{field:'experience',  title: '签发日期'}
      ,{field:'score', title: '维护周期'}
      ,{field:'score', title: '下次维护日期'}
      ,{field:'score', title: '状态'}
      
    ]]
  
  });
  
  
  });