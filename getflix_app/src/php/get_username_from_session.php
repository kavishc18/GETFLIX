<?php

require_once("prelims.php");

//--------------------------------------------------------------

$data = json_decode(file_get_contents("php://input"));

$session_id = $data->session_id;


// First, we query the session to get the UID of the logged in user attached to it.
$query = "SELECT * FROM login_sessions WHERE session_id='$session_id'";
$id_from_session_result = query_wrapper($query);

if ($id_from_session_result->num_rows > 0) {
    $session_id_row = $id_from_session_result->fetch_assoc();
    $user_id = $session_id_row['user_id'];

    // Should the SID-UID record exist, use it to find the username connected to that UID.
    $query = "SELECT * FROM users WHERE user_id='$user_id'";
    $username_from_id_result = query_wrapper($query);

    $username_row = $username_from_id_result->fetch_assoc();

    $response = array(
        'status' => 'valid',
        'session_id' => $session_id_row['session_id'],
        'username' => $username_row['username']
    );
} else {
    $response = array('status' => 'invalid');
}

echo json_encode($response);