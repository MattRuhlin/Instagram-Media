$(document).ready(function() {
	var form = $('#infoForm');
	var media = $('#media');



	form.submit(function(e) {
		e.preventDefault();

		var likes = $('#likes').is(':checked');
		var caption = $('#caption').is(':checked');
		var whoLiked = $('#whoLiked').is(':checked');
		var profilePic = $('#profilePic').is(':checked');
		var comments = $('#comments').is(':checked');

		media.html ('');

		var username = $('#username').val();
		var mediaArray = getPics(username);
		console.log(mediaArray);

		if (mediaArray == "invalid") {
			media.html("Sorry, that user doesn't exist");
		}

		else if (mediaArray == "private") {
			media.html("<strong>Sorry, that user is private and only approved followers may see their photos</strong>");
		}

		else {

			if (profilePic) {
				media.append('<div class="cell"><img src="' + mediaArray.items[0].user.profile_picture + '"><br />Profile Picture of ' + mediaArray.items[0].user.full_name + '(' + mediaArray.items[0].user.username + ')</div>');
			}
			$.each(mediaArray.items, function() {
				var cell = '<div class="cell"><img src="' + this.images.standard_resolution.url + '">';
	
				if (likes) {
					cell += '<br /><p>' + this.likes.count + ' likes</p>';
				}
	
				if (whoLiked) {
					cell += '<br /><p>';
					$.each(this.likes.data, function() {
						cell += this.full_name + '(' + this.username + ')&nbsp&nbsp';
					});
					cell += '</p>';
				}
	
				if (caption) {
					if (this.caption) {
						cell += '<br /><p><strong>' + this.caption.text + '</strong></p>';
					}
				}
	
				if (comments) {
					cell += '<br />'
					$.each(this.comments.data, function() {
						cell += '&nbsp' + this.text + ' -- ' + this.from.full_name + '(' + this.from.username + ')<br />';
					});
				}
	
				cell += '</div>';
	
				media.append(cell);
			});
		}

		

		return false;
	});


});
