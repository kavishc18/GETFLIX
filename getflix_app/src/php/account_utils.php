<?php
require_once("credentials.php");
require_once("general_utils.php");

function register_user($username, $password) {
    $hash = password_hash($password, PASSWORD_DEFAULT);
    $query = "INSERT INTO users (username, password) VALUES('$username','$hash')";

    $result = query_wrapper($query);
}

$conn = new mysqli($server, $username, $password);

//--------------------------------------------------------------

$query = "USE getflix;";
$result = query_wrapper($query);

//--------------------------------------------------------------
