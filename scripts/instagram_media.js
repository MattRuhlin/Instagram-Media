
// ajax call to php that returns json for that user in a string, calls parseJSON
// async: false is important --> otherwise the success function will execute after getPics returns 
// an undefined list variable
function getPics(username) {
	var list;
	$.ajax({
		url: "scripts/instagram-media.php",
		type: "POST",
		async: false,
		data: {
			username: username
		},
		success: function(data) {
			list = parseJSON(data);
		}
	});
	return list;
} // getPics




// simple error handling, returns string form of json
function parseJSON(data) {
	var pics = [];

	if (data === "invalid") {
		return data;
	}

	else {
		var json = JSON.parse(data);
		if (json.items.length === 0) {
			return "private";
		}

		else {
			return json;
		}
	}
} // parseJSON



// returns a pretty array with urls, like counts and captions of each picture
function cleanTrio(json) {
	var pics = [];
	jQuery.each(json.items, function() {
		if (this.caption === null) {
			pics.push({ url: '' + this.images.standard_resolution.url + '', likes: this.likes.count}); 
		}

		else {
			pics.push({ url: '' + this.images.standard_resolution.url + '', likes: this.likes.count, caption: '' + this.caption.text + ''}); 
		}
	});

	return pics;
}


