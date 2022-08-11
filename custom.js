var array = ['你若盛开 蝴蝶自来','努力成为自己喜欢的人','生活像面镜子','没有伞的孩子，必须努力奔跑', '一鸣惊人', '一见钟情'];
var html ='';
jQuery.each( array, function( i, val ) {

  ii = i+1;
  html += '<div class="panel panel-default"><div class="panel-heading"><a data-toggle="collapse" data-parent="#accordion" href="#'+ii+'"><h4 class="panel-title">'+ii+'</h4></a></div><div id="'+ii+'" class="panel-collapse collapse in"><div class="panel-body">'+val+'</div></div></div>';
  // Will stop running after "three"
  
});
// debugger;
$('#accordion').append(html);

$( "h4" ).click(function() {
  
    $( this ).parent().parent().parent().addClass('panel-success');
    $( this ).parent().parent().parent().removeClass('panel-default');
});


