

document.addEventListener('DOMContentLoaded', function(){
//console.log("Loaded")

function movieList (movie) {

    var eachHtml =  `

    

	<div class="movie col-md-2">
            <div class="card" style="width: 15vw; height:45vh;">
            <img class="moviePoster" src="${movie.Poster}" alt="${movie.Title}" style="height:25vh";>
            <div class="card-body">
    <h5 class="card-title">
        ${movie.Title}
    </h5>
    <p class="card-year"> ${movie.Year} </p>
    <a href="#" class="btn btn-primary"> Add Movie </a>
    <button> </button>
    </div>
    </div>
    </div>
    <br />
    
    `

    return eachHtml
   
}



function renderMovies (movieArray){
    var movies = movieArray.map(movieList)
return '<div class="row">' + movies.join('') + '</div>'

}

// This code needs to go on data.js, this is just to test the data pull.


function sceneitMovies () {

var card = document.getElementById('card');


function clickBtn2 () {
    // $("#generateDoggoBtn").text("Generating Doggo ...");
    // $("#generateDoggoBtn").prop("disabled", true);


    $.getJSON('/data.js', function(myresponse) {
    })
  }


    document.getElementById('search-form').addEventListener('submit', function(e){
        e.preventDefault();
        card.innerHTML = renderMovies (movieData)
    })


}
sceneitMovies()
// End of test data this will need to go in data.js.


function saveToWatchlist (){

document.getElementsByClassName('#btn').click(clickBtn2)

}



// function searchButton (){
//     document.getElementById('search-form').addEventListener('submit', function(e){
//         e.preventDefault();
//     })
// }

    
});