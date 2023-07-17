import axios from "axios";

const queryLimit = 5;

export function submitHandler(enteredQuery) {
    composeTitleIDArr("" + enteredQuery.toLowerCase() + "");
    console.log(enteredQuery);
}

export function composeTitleIDArr(enteredQuery) {
    localStorage.setItem("titleIDArr", JSON.stringify([]));
    //Creating titleIDArr with promises, only after it has been returned then the program can continue
    queryHandler(enteredQuery).then(titleIDArr => 
        {composeTitleDetailsArr(titleIDArr)}).catch(error => {
        console.error(error);
    });
}

export function composeTitleDetailsArr(titleIDArr) {
    let titleDetailsArr = [];
    localStorage.setItem("titleDetailsArr", JSON.stringify([]));
    
    setTimeout(() => {
        // localStorage.setItem("titleDetailsArr", JSON.stringify([]));
        // let titleDetailsArr = [];
        
        // for (let i=0; i<5; i++) {
        //     getTitleDetails1(titleIDArr[i]).then(response => 
        //         {titleDetailsArr.push((response))}).catch(error => {
        //         console.error(error);
        //     });
        // }
        // console.log(titleDetailsArr);
    }, 1500);

    for (let i=0; i<5; i++) {
        getTitleDetails1(titleIDArr[i]).then(response => 
            {titleDetailsArr.push((response))}).catch(error => {
            console.error(error);
        });
    }
    console.log(titleDetailsArr);
        
    for (let i=5; i<10; i++) {
        getTitleDetails2(titleIDArr[i]).then(response => 
            {titleDetailsArr.push((response))}).catch(error => {
            console.error(error);
        });
    }
    
    for (let i=10; i<15; i++) {
        getTitleDetails3(titleIDArr[i]).then(response => 
            {titleDetailsArr.push((response))}).catch(error => {
            console.error(error);
        });
    }    
    
    for (let i=15; i<20; i++) {
        getTitleDetails4(titleIDArr[i]).then(response => 
            {titleDetailsArr.push((response))}).catch(error => {
            console.error(error);
        });
    }
    

    setTimeout(() => {
        let arr = JSON.parse(localStorage.getItem("titleDetailsArr"));    
        composeSortedMovieData(arr);
    }, 5000);

}

export function composeSortedMovieData(titleDetailsArr) {
    localStorage.setItem("sortedMovieData", JSON.stringify([]));
    let sortedMovieData = [];
    
    for (let i=0; i<20; i++) {
        let sortedMovie = sortData(titleDetailsArr[i]);
        sortedMovieData.push(sortedMovie);
    }
    localStorage.setItem("sortedMovieData", JSON.stringify(sortedMovieData));

    refresh();
}

export function refresh() {
    window.location.reload();
}

export function queryHandler(enteredQuery) {      
    return new Promise((resolve, reject) => {
      const options = {
        method: 'GET',
        url: 'https://online-movie-database.p.rapidapi.com/title/v2/get-popular-movies-by-genre',
        params: {genre: (''+enteredQuery+''), limit: 20},
        headers: {
          'X-RapidAPI-Key': 'e50177de4bmsh492f3e66c06fe80p1f1e73jsn5d382f725755',       //cri@hotmail.com
          'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
      };
  
      axios.request(options).then(function (response) {
        //Cleaning response data and saving titleIDs in array titleIDArr
        let titleIDArr = []
        for (let i = 0; i < 20; i++) {
          let element = response.data[i];
          element = element.substring(7, element.length-1).replace("/", "");
          titleIDArr.push(element);
        }
        localStorage.setItem("titleIDArr", JSON.stringify(titleIDArr));
        resolve(titleIDArr); // resolve the promise with titleIDArr
  
      }).catch(function (error) {
        console.error(error);
        reject(error); // reject the promise with error
      });
    });    
  }

export function getTitleDetails1(titleID) {
    return new Promise((resolve, reject) => {
    axios.request({
        method: 'GET',
        url: 'https://online-movie-database.p.rapidapi.com/title/get-overview-details',
        params: {tconst: (''+titleID+''), currentCountry: 'US'},
        headers: {
            'X-RapidAPI-Key': 'e50177de4bmsh492f3e66c06fe80p1f1e73jsn5d382f725755',     //becc@icloud.com
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    }).then(function (response) {
        resolve(pushToArr(response));
    }).catch(function (error) {
        console.error(error);
        reject(error);
    });       

    function pushToArr(response) {
        let titleDetailsArr = [];
        titleDetailsArr = JSON.parse(localStorage.getItem("titleDetailsArr"));
        titleDetailsArr.push(response);
        localStorage.setItem("titleDetailsArr", JSON.stringify(titleDetailsArr));
        return response;        
    }
});
}

export function getTitleDetails2(titleID) {
    return new Promise((resolve, reject) => {
    axios.request({
        method: 'GET',
        url: 'https://online-movie-database.p.rapidapi.com/title/get-overview-details',
        params: {tconst: (''+titleID+''), currentCountry: 'US'},
        headers: {
            'X-RapidAPI-Key': 'dbcb8e5427msh568e096fc9b3e4cp147b0fjsn737d4790f1ea',     //and@hotmail.co.uk
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    }).then(function (response) {
        resolve(pushToArr(response));
    }).catch(function (error) {
        console.error(error);
        reject(error);
    });       

    function pushToArr(response) {
        let titleDetailsArr = [];
        titleDetailsArr = JSON.parse(localStorage.getItem("titleDetailsArr"));
        titleDetailsArr.push(response);
        localStorage.setItem("titleDetailsArr", JSON.stringify(titleDetailsArr));
        return response;        
    }
});
}

export function getTitleDetails3(titleID) {
    return new Promise((resolve, reject) => {
    axios.request({
        method: 'GET',
        url: 'https://online-movie-database.p.rapidapi.com/title/get-overview-details',
        params: {tconst: (''+titleID+''), currentCountry: 'US'},
        headers: {
            'X-RapidAPI-Key': 'b39abfe12amshe1dc38b3e95ef95p1d4065jsncceca34b024e',         //ps2@leeds.ac.uk
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    }).then(function (response) {
        resolve(pushToArr(response));
    }).catch(function (error) {
        console.error(error);
        reject(error);
    });       

    function pushToArr(response) {
        let titleDetailsArr = [];
        titleDetailsArr = JSON.parse(localStorage.getItem("titleDetailsArr"));
        titleDetailsArr.push(response);
        localStorage.setItem("titleDetailsArr", JSON.stringify(titleDetailsArr));
        return response;        
    }
});
}

export function getTitleDetails4(titleID) {
    return new Promise((resolve, reject) => {
    axios.request({
        method: 'GET',
        url: 'https://online-movie-database.p.rapidapi.com/title/get-overview-details',
        params: {tconst: (''+titleID+''), currentCountry: 'US'},
        headers: {
            'X-RapidAPI-Key': '47f89af881msh11e0d7891d8d024p13c70ajsneed5e19c9779',     //cri@hotmail.com
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    }).then(function (response) {
        resolve(pushToArr(response));
    }).catch(function (error) {
        console.error(error);
        reject(error);
    });       

    function pushToArr(response) {
        let titleDetailsArr = [];
        titleDetailsArr = JSON.parse(localStorage.getItem("titleDetailsArr"));
        titleDetailsArr.push(response);
        localStorage.setItem("titleDetailsArr", JSON.stringify(titleDetailsArr));
        return response;        
    }
});
}

export function sortData(responseIn) {
    console.log("Hi, sortData");
    let regex = /\/title\/(\w+)\//;
    let movieDataObj = {
        "titleID": regex.exec(responseIn['data']['id'])[1],
        "image_url": responseIn['data']['title']['image']['url'],
        "running_time_in_minutes": responseIn['data']['title']['runningTimeInMinutes'],
        "title": responseIn['data']['title']['title'],
        "year": responseIn['data']['title']['year'],
        "rating": responseIn['data']['ratings']['rating'],
        "genres": responseIn['data']['genres'],
        "plot_outline": responseIn['data']['plotOutline']['text']
    };
    let sortedMovieDataArr = JSON.parse(localStorage.getItem("sortedMovieData"));

    if (!(sortedMovieDataArr.some(movie => movie.titleID === movieDataObj.titleID))) {      //If movie not in sortedMovieData then append, else don't.
        sortedMovieDataArr.push(movieDataObj);
        // localStorage.setItem("sortedMovieData", JSON.stringify(sortedMovieDataArr));
        return movieDataObj;
    }
    else{
        let err = "Error";
        console.log(err);
    } 
    //   window.location.reload();
}
