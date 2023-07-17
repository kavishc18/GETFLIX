<?php

/*
The other files all have a common root. This involves:

- Loading CORS headers;
- Loading credential data;
- Loading utility functions;
- Initialising the database; and
- Establishing an SQLite connection handle.

This file aims to encapsulate all of that.
*/

require_once("cors_headers.php");
require_once("credentials.php");
require_once("general_utils.php");
require_once("dbinit.php");


//--------------------------------------------------------------

$conn = new mysqli($server, $username, $password);

if ($conn->connect_error) {
    die("Error: " . $conn->connect_error);
}

$query = "USE getflix;";
query_wrapper($query);

