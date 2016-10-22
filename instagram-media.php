<?php
/* PHP script to grab JSON file for instagram media
 * Checks if the request went through successfully and returns
 * the raw JSON if so.
 *
 * @author Matt Ruhlin
 * @since October 1, 2016
 */


	$username = $_POST['username'];

	$json = @file_get_contents('https://www.instagram.com/'. $username.'/media/');
 
	if ($json === FALSE) {
  		echo 'invalid';
	} // if

	else {
		echo $json;  	
	} // else


  ?>