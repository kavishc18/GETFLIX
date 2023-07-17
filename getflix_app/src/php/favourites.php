<?php
require_once('prelims.php');
require_once('functions.php');

// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: *");
// header("Access-Control-Allow-Methods: POST");
// header("Content-Type: application/json; charset=UTF-8");


$data = json_decode(file_get_contents("php://input"));

$user_id = $data->user_id;
$title_id = $data->title_id;
$title = $data->$title;
$genres = $data->$genre;
$plotOutline = $data->$plotOutline;
$plotSummary = $data->$plotSummary;
$ratings = $data->$ratings;
$releaseDate = $data->$releaseDate;


if ($user_id && $film_id) {
    $query = "INSERT INTO `favourites` (`user_id`, `film_id`) VALUES('$user_id','$film_id')";

    $result = query_wrapper($query);

    if ($result) {
        $response = array('status' => 'valid');
    } else {
        $response = array('status' => 'invalid');
    }
} else {
    $response = array('status' => 'invalid');
}

echo json_encode($response);
?>