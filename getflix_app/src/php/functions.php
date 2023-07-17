<?php
$server = 'localhost';
$database = 'getflix';
$username = 'root';
$password = '';

$conn = new mysqli($server, $username, $password, $database);
if ($conn->connect_error)
    die($conn->connect_error);

function createTable($name, $query)
{
    queryMysql("CREATE TABLE IF NOT EXISTS $name($query)");
}
function queryMysql($query)
{
    global $conn;
    $result = $conn->query($query);
    if (!$result)
        die($conn->error);
    return $result;
}

function sanitiseString($var)
{
    global $conn;
    $var = strip_tags($var);
    $var = htmlentities($var);
    $var = stripslashes($var);
    return $conn->real_escape_string($var);
}

function getFilm($title_id) {
    $film = array();
    $query = "SELECT `id`,`title`,`image`, `rating` FROM films WHERE  `title_id`=$title_id";
    $result = queryMysql($query);
    if ($result->num_rows == 0) {
        array_push($film, 'invalid');
    } else {
       $row = $result->fetch_assoc();
       array_push($film, 'valid');
       array_push($film, $row['id']);
       array_push($film, $row['title']);
       array_push($film, $row['image']);
       array_push($film, $row['rating']);
    }
    return $film;
}

function getFavourites($user_id) {
    $query = "SELECT `film_id` FROM usersfav WHERE  `user_id`=$user_id";
    $result = queryMysql($query);
    if ($result->num_rows == 0) {
        $response['data'] =
            array(
                'invalid'
            );
        echo json_encode($response);
    } else {
        while($row = $result->fetch_assoc) {
            $response['data'] = array();
            array_push($response['data'], getFilm($row['film_id']));
        }
    }
    echo json_encode($response);
}
?>