<?php

/*
This file accepts GET requests of the form :

{
     user_id: <The id of the user to delete>
}

TODO: Add password authentication to make sure it is not a malicious delete.
*/

require_once("prelims.php");

//--------------------------------------------------------------

$data = json_decode(file_get_contents("php://input"));
$user_id = $data->user_id;

// Delete the favourites associated with that user.
$query = "DELETE * FROM favourites WHERE user_id='$user_id'";
$result = query_wrapper($query);

// Delete any session tokens associated with that user.
$query = "DELETE * FROM login_sessions WHERE user_id='$user_id'";
$result = query_wrapper($query);

// Finally, delete the user credentials themselves.
$query = "DELETE * FROM users WHERE user_id='$user_id'";
$result = query_wrapper($query);