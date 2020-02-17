layui.use('table', function(){
  var table = layui.table;
  
  table.render({
    elem: '#test'
    ,url:'../api/Risk.json',
	cellMinWidth: 80
    ,cols: [[
      {type:'checkbox'}
      ,{field:'id',  title: '风险等级编码'}
      ,{field:'username',  title: '风险等级名称'}
      ,{field:'sex',  title: '描述'}
      ,{field:'city', title: '停用'}
      ,{field:'sign', title: '编辑人'}
      ,{field:'experience',  title: '编辑时间'}
      ,{field:'score', title: '公司名称'}
      
    ]]

  });
});