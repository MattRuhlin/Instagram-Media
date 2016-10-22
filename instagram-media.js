$(document).ready( function() {
	$('#infoForm').submit(function () {
	var media;

	$.ajax({
		url: "instagram-media.php",
		type: "POST",
		data: {
			username: $('#username').val()
		},
		success: function(data) {
			doStuff(data);
		}
	});
	return false;
});


$('#username').click(function() {
	this.value = "";
})

function doStuff(json){
	var captions = ($('#captions').is(':checked'));
	$('#media').html('');


	if (json === "invalid") {
		$('#media').html('Please enter a valid Instagram username!');
	} // if


	else {
		media = JSON.parse(json);
		console.log(media);
		if (media.items.length === 0) {
			$('#media').html('Sorry, that user is private and only approved followers can view their photos');
		} // if

		else {
			jQuery.each(media.items, function() {
				var caption = "";
				var likes = "";

				if (this.caption != null && $('#captions').is(':checked')) {
					caption = "<div class='caption'><label>" + this.caption.text + "</div>";
				} // if
				
				if ($('#likes').is(':checked')) {
					var likes = "<div class='likes'>" + this.likes.count + " likes</div>";
				} // if

				$('#media').append('<div class = "cell"><img src = "' + this.images.standard_resolution.url + '" class = "photo"><br />' + likes + '<br />' + caption + '</div>');

		}); // each
		} // else
	}	
}});