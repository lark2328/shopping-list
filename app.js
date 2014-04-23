
$(document).ready(function() {

$('button').on('click', function() {
	
	value = $("#box").val();

	$('li').first().next().append(value+"<br/>");
	
});

$('li').dblclick(function() {
	$(this).remove();
});

var classHighlight = 'highlight';
var $lis = $('li').click(function(e) {
	e.preventDefault();
	$lis.removeClass(classHighlight);
	$(this).addClass(classHighlight);

});

$(document).on('keydown', function( event ) {
if ( event.which == 13) {
	value = $("#box").val();
	$('li').first().next().append(value+"<br/>");
}

})

//.on('keyup', function( event ) {
	//if ( event.which == 13) {
	//value = $("#box").val();
	//$('li').first().next().append(value+"<br/>");
//}

//});


});
