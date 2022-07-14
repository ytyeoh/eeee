var array = ['一只狗','两只老虎','三只松鼠','四只猫','五只猴子','六只天鹅','七只乌鸦'];
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


