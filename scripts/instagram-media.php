<?php
/* PHP script to grab JSON file for instagram media
 * Checks if the request went through successfully and returns
 * the raw JSON if so.
 *
 * @author Matt Ruhlin
 * @since October 1, 2016
 */

	// set username to posted variable
	$username = $_POST['username'];

	// set url
	$url = 'https://www.instagram.com/' . $username . '/media/';

	// store the text returned by the url into a string called json
	$json = @file_get_contents($url);
 
	if ($json === FALSE) {
  		echo 'invalid';
	} // if

	else {
		echo $json;  	
	} // else


  ?>