<?php

// This file just allows for automatic creation of the database for rapid testing.
// It checks if the database, and all it's constituent tables, exist.
// If not, create them.
//
// This saves a TON of time because I'm constantly dropping the database after incremental changes.
// In production, we would build the database ONCE and then keep it online 24/7.


require_once("credentials.php");
require_once("general_utils.php");

header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: *");
// header("Access-Control-Allow-Methods: POST");
// header("Content-Type: application/json; charset=UTF-8");


$conn = new mysqli($server, $username, $password);

if ($conn->connect_error) {
    die("Error: " . $conn->connect_error);
}


//--------------------------------------------------------------

$query = "CREATE DATABASE IF NOT EXISTS getflix;";

$result = query_wrapper($query);

//--------------------------------------------------------------

$query = "USE getflix;";
$result = query_wrapper($query);

//--------------------------------------------------------------

$query = <<<SQL
CREATE TABLE IF NOT EXISTS users (
user_id INT NOT NULL AUTO_INCREMENT,
username VARCHAR(50) NOT NULL,
password CHAR(60) NOT NULL,
PRIMARY KEY (user_id)
);
SQL;

$result = query_wrapper($query);

//--------------------------------------------------------------

$query = <<<SQL
CREATE TABLE IF NOT EXISTS favourites (
id INT NOT NULL AUTO_INCREMENT,
user_id INT NOT NULL,
film_id INT NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (user_id) REFERENCES users(user_id)
);
SQL;

$result = query_wrapper($query);

//--------------------------------------------------------------

$query = <<<SQL
CREATE TABLE IF NOT EXISTS login_sessions (
session_id VARCHAR(50) NOT NULL,
user_id INT NOT NULL,
login_time BIGINT NOT NULL,
PRIMARY KEY (session_id),
FOREIGN KEY (user_id) REFERENCES users(user_id)
);
SQL;

$result = query_wrapper($query);

//--------------------------------------------------------------


?>