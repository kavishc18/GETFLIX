<?php

/*
This file handles all the login logic.
*/

require_once("prelims.php");

//--------------------------------------------------------------

$data = json_decode(file_get_contents("php://input"));

$login_username = $data->username;
$login_password = $data->password;


$query = "SELECT * FROM users WHERE username='$login_username'";
$result = query_wrapper($query);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();

    if (password_verify($login_password, $row['password'])) {

        /*
        For security and privacy purposes, we do not use UIDs directly. Instead, we use session tokens
        Session tokens are random keys that expire once the user logs out or a specified amount of time has passed.
        They are hexadecimal strings of length 16.
        */

        $session_id = bin2hex(random_bytes(16));
        $session_user = $row['user_id'];

        // We insert this session token, along with the UID and timestamp.
        $query = "INSERT INTO login_sessions (session_id, user_id, login_time) VALUES('$session_id', '$session_user', " . time() . ")";
        $result = query_wrapper($query);

        $response = array(
            'status' => 'valid',
            'id' => $row['user_id'],
            'username' => $row['username'],
            'session_id' => $session_id
        );
    } else {
        $response = array('status' => 'invalid', 'message' => 'Password is incorrect');
    };
} else {
    $response = array('status' => 'invalid', 'message' => 'Account does not exist');
}
echo json_encode($response);
?>