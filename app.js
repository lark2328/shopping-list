
$(document).ready(function() {

$('button').on('click', function() {
	
	value = $("#box").val();

	$('ul#list2>li:last-child').after('<li>'+value+'</li>');
	
});

$('ul#list2>li').dblclick(function() {
	$(this).remove();
});

$('ul#list2>li').on('click', function() {
$(this).toggle('highlight');
//var classHighlight = 'highlight';
//var $lis = $('ul#list2>li').click(function(e) {
	//e.preventDefault();
	//$lis.removeClass(classHighlight);
	//$(this).addClass(classHighlight);

});

$(document).on('keydown', function( event ) {
if ( event.which == 13) {
	value = $("#box").val();
	$('ul#list2>li:last-child').after('<li>'+value+'</li>');
	event.preventDefault();﻿
}

})


});
