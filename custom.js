var array = ['一只狗','两只老虎','三只松鼠','四只猫','五只猴子','六只天鹅','七只乌鸦'];
var html ='';
jQuery.each( array, function( i, val ) {
  $( "#" + val ).text( "Mine is " + val + "." );
  html += '<div class="card"><div class="card-header" role="tab" id="a'+i+'"><h5 class="mb-0"><a data-toggle="collapse" href="#'+i+'" aria-expanded="true" aria-controls="collapseOne">Collapsible Group Item #1</a></h5></div><div id="'+i+'" class="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion"><div class="card-body">'+val+'</div></div>';
  // Will stop running after "three"
  
});
$('#accordion'),html = html;

