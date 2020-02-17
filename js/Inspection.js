 
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
      ,{field:'username',  title: '单据编号'}
      ,{field:'sex',  title: '检查说明'}
      ,{field:'city', title: '检查人'}
      ,{field:'sign', title: '检查时间'}
      ,{field:'score', title: '状态'}
      
    ]]
  
  });
  
  
  });