<?php
/*
This query wrapper is important. It streamlines the process of properly handling a query,
as well as allowing us to free the result properly in a simpler fashion. Not freeing the result
leads to many issues.
*/

function query_wrapper($query) {
    global $conn;
    $result = $conn->query($query);

    if (!$result) {
        die("Error: " . $conn->error);
    } else {
        return $result;
    }
}