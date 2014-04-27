$(document).ready(function() {

$('button').on('click', function() {
	
	value = $("#box").val();

	$('ul#list2>li:last-child').after('<li>'+value+'</li>');
	
});


$('#list2').on('dblclick','li', function() {
	var classHighlight = 'highlight' 
	$(this).toggle(classHighlight);

});

$(document).on('keydown', function( event ) {
if ( event.which == 13) {
	value = $("#box").val();
	$('ul#list2>li:last-child').after('<li>'+value+'</li>');
	event.preventDefault();﻿
}

});


});
