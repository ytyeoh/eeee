var array = ['一只狗','两只老虎','三只松鼠','四只猫','五只猴子','六只天鹅','七只乌鸦'];
var html ='';
jQuery.each( array, function( i, val ) {

  ii = i+1;
  html += '<div class="card"><div class="card-header" role="tab" id="a'+ii+'"><a data-toggle="collapse" href="#'+ii+'" class="" aria-expanded="true" aria-controls="collapseOne"><h5 class="mb-0">'+ii+'</h5></a></div><div id="'+ii+'" class="collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion"><div class="card-body">'+val+'</div></div></div>';
  // Will stop running after "three"
  
});
// debugger;
$('#accordion').append(html);

$( "h5" ).click(function() {
    $( this ).parent().addClass('btn btn-info  btn-lg btn-block ');
    // $( this ).parent().removeClass('btn-success');
});