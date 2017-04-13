# Instagram-Media
This is a short script that will get the JSON for any user's Instagram page without using the API.

The file instagram_media.js has some general functions for getting the JSON, and script.js is an example implementation of the data.


##instagram_media.php
This is a trivial php file that just calls the file_get_contents function on the URL that returns the JSON. 

##instagram_media.js

###getPics(username)
The function getPics makes an ajax call to the php file instagram_media.php, and upon success runs the parseJSON function, and returns the value returned by parseJSON

###parseJSON
This function just checks if the php file returned 'invalid' or if there is no available data in the JSON, which just means the user is private. 

###cleanTrio
This function returns a pretty array with the url, like count and caption for any photo. I figured these three would be used more than the other data, so now you don't have to iterate through severl layers of relationships to get what you want.

##script.js
This is an example implementation of the general functions in instagram_media.js. In my index file, I have options for several pieces of data. Based on which options are selected, a div with children for said options is added to the media div in index.html.
