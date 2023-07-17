<?php

/*
This file handles logout logic.
*/

require_once("prelims.php");

//--------------------------------------------------------------


$data = json_decode(file_get_contents("php://input"));
$delete_session_id = $data->session_id;

// To delete, we simply delete the session from the database.
// Next time the application checks the validity of the session token, they will get an `Invalid` and will not be able
// To do any operations

$query = "DELETE FROM login_sessions WHERE session_id='$delete_session_id'";
$result = query_wrapper($query);
