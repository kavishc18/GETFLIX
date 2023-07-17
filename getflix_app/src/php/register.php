<?php

/*
This file handles all the registration logic.
*/

require_once("prelims.php");

//--------------------------------------------------------------

function register_user($username, $password) {
    $hash = password_hash($password, PASSWORD_DEFAULT);
    $query = "INSERT INTO users (username, password) VALUES('$username','$hash')";

    $result = query_wrapper($query);
}
//--------------------------------------------------------------

$data = json_decode(file_get_contents("php://input"));

$register_username = $data->username;
$register_password = $data->password;

// We need to check if this username is already being used.
$query = "SELECT * FROM users WHERE username='$register_username'";
$result = query_wrapper($query);

if ($result->num_rows == 0) {
    if ($register_username) {
        register_user($register_username, $register_password);
        $response = array('status' => 'valid','message' => 'Account was created');
    } else {
        $response = array('status' => 'invalid', 'message' => 'Username was not valid');
    }
} else {
    $response = array('status' => 'invalid', 'message' => 'This username is already taken.');
}

echo json_encode($response);
?>