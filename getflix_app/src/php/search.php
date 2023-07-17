<?php
//     header("Access-Control-Allow-Origin: *");
//     header("Access-Control-Allow-Headers: *");
//     header("Access-Control-Allow-Methods: POST");
//     header("Content-Type: application/json; charset=UTF-8");

    $data = json_decode(file_get_contents("php://input"));

    $query = $data->query;
   
	function getTitleID($query) {
		$curl = curl_init();

		curl_setopt_array($curl, [
			CURLOPT_URL => "https://online-movie-database.p.rapidapi.com/auto-complete?q=$query",
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_FOLLOWLOCATION => true,
			CURLOPT_ENCODING => "",
			CURLOPT_MAXREDIRS => 10,
			CURLOPT_TIMEOUT => 30,
			CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
			CURLOPT_CUSTOMREQUEST => "GET",
			CURLOPT_HTTPHEADER => [
				"X-RapidAPI-Host: online-movie-database.p.rapidapi.com",
				"X-RapidAPI-Key: ADD API KEY HERE"
			],
		]);

		$responseTitleID = curl_exec($curl);
		$errTitleID = curl_error($curl);

		curl_close($curl);

		return $responseTitleID;
	}

	function getPoster($id) {
		$curl = curl_init();

		curl_setopt_array($curl, [
			CURLOPT_URL => "https://online-movie-database.p.rapidapi.com/title/get-videos?tconst=$id&limit=5&region=US",
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_FOLLOWLOCATION => true,
			CURLOPT_ENCODING => "",
			CURLOPT_MAXREDIRS => 10,
			CURLOPT_TIMEOUT => 30,
			CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
			CURLOPT_CUSTOMREQUEST => "GET",
			CURLOPT_HTTPHEADER => [
				"X-RapidAPI-Host: online-movie-database.p.rapidapi.com",
				"X-RapidAPI-Key: ADD API KEY HERE"
			],
		]);

		$responseImage = curl_exec($curl);
		$errImage = curl_error($curl);

		curl_close($curl);

		return $responseImage;
	}

  function getRating($id) {
    $curl = curl_init();

    curl_setopt_array($curl, [
      CURLOPT_URL => "https://online-movie-database.p.rapidapi.com/title/get-ratings?tconst=$id",
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_FOLLOWLOCATION => true,
      CURLOPT_ENCODING => "",
      CURLOPT_MAXREDIRS => 10,
      CURLOPT_TIMEOUT => 30,
      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
      CURLOPT_CUSTOMREQUEST => "GET",
      CURLOPT_HTTPHEADER => [
        "X-RapidAPI-Host: online-movie-database.p.rapidapi.com",
        "X-RapidAPI-Key: ADD API KEY HERE"
      ],
    ]);
    
    $responseRating = curl_exec($curl);
    $errRating = curl_error($curl);
    
    curl_close($curl);

    return $responseRating;
  }

  function getActorID($id) {
    $curl = curl_init();

    curl_setopt_array($curl, [
      CURLOPT_URL => "https://online-movie-database.p.rapidapi.com/title/get-top-cast?tconst=$id",
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_FOLLOWLOCATION => true,
      CURLOPT_ENCODING => "",
      CURLOPT_MAXREDIRS => 10,
      CURLOPT_TIMEOUT => 30,
      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
      CURLOPT_CUSTOMREQUEST => "GET",
      CURLOPT_HTTPHEADER => [
        "X-RapidAPI-Host: online-movie-database.p.rapidapi.com",
        "X-RapidAPI-Key: ADD API KEY HERE"
      ],
    ]);
    
    $responseActorID = curl_exec($curl);
    $errActorID = curl_error($curl);
    
    curl_close($curl);

    return $responseActorID;
  }

  function getActorName($actorID) {
    $curl = curl_init();

    curl_setopt_array($curl, [
      CURLOPT_URL => "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=$actorID",
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_FOLLOWLOCATION => true,
      CURLOPT_ENCODING => "",
      CURLOPT_MAXREDIRS => 10,
      CURLOPT_TIMEOUT => 30,
      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
      CURLOPT_CUSTOMREQUEST => "GET",
      CURLOPT_HTTPHEADER => [
        "X-RapidAPI-Host: online-movie-database.p.rapidapi.com",
        "X-RapidAPI-Key: ADD API KEY HERE"
      ],
    ]);
    
    $responseActorName = curl_exec($curl);
    $errActorName = curl_error($curl);
    
    curl_close($curl);

    return $responseActorName;
  }

	// $query = $_POST['query'];   // Query from search bar
	$responseTitleID = getTitleID($query);
	$responseTitleID = json_decode($responseTitleID, true);
	// $id = ($responseTitleID['d'][0]['id']);

  // Array to store movie IDs
  $idArr = array($responseTitleID['d'][0]['id'], $responseTitleID['d'][1]['id']);


  // Array to store movie titles
  $nameArr = array($responseTitleID['d'][0]['l'], $responseTitleID['d'][1]['l']);


  $imageArr = array();
  $ratingArr = array();
  for ($i=0; $i<2; $i++) {    //Populating arrays
	  $responseImage = getPoster($idArr[$i]);
	  $responseImage = json_decode($responseImage, true);
	  $image = ($responseImage['resource']['image']['url']);
    $imageArr.array_push($imageArr, $image);
    
    $responseRating = getRating($idArr[$i]);
    $responseRating = json_decode($responseRating, true);
    $rating = ($responseRating['rating']);
    $ratingArr.array_push($ratingArr, $rating);
  }  

  //TODO: Fetching and displaying the actors names does not work yet.
  //TODO: An array to store an array of all the names of actors for each of the movies.
  $actorID = getActorID($id);
  $actorName = getActorName($actorID);

  $actorIDArr = array();
  $actorNameArr = array();
  for ($i=0; $i<2; $i++) {     //Populating arrays      
	  $responseActorID = getActorID($id[$i]);
	  $responseActorID = json_decode($responseActorID, true);
	  $actorID = ($responseActorID[$i]);
    $actorIDArr.array_push($actorIDArr, $actorID);

    $responseActorName = getActorName($actorIDArr[$i]);
	  $responseActorName = json_decode($responseActorName, true);
	  $actorName = ($responseActorName['name']);
    $actorNameArr.array_push($actorNameArr, $actorName);
  }  

    $responseTitleID = json_encode($responseTitleID);
    $idArr = json_encode($idArr);


    $response['data'] =
        array(
            'query' => $query,
            // 'responseTitleID' => $responseTitleID,
            // 'idArr' => $idArr,
            // // 'nameArr' => $nameArr,
            // // 'imageArr' => $imageArr,
            // // 'ratingArr' => $ratingArr,
            // // 'actorIDArr' => $actorIDArr,
            // // 'actorNameArr' => $actorNameArr,
            // $idArr
        );
    echo json_encode($response);
?>
