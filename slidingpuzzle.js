$(document).ready(function() {
	$('#board').hide();
	$('#board').offset($('#original').offset());

	$('a[name=btnStart]').click(function() {
		$('#original').fadeOut().next().fadeIn();
	})
});