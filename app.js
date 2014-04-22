
$(document).ready(function() {

$('button').on('click', function() {
	//alert('click button');
	value = $("#box").val();
	//alert(value);
	//$('#list').append(value);
	$('li').first().next().append(value);
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

});

//$('li').click(function() {
//	$(this).effect('highlight', {color:"#669966"}, 3000);