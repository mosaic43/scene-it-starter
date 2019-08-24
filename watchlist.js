
var movieData = []
var htmlCollec = localStorage.getItem('watchlist')
movieData = JSON.parse(htmlCollec)

document.addEventListener('DOMContentLoaded', function(){


function renderMovies (movieArray) {
    var eachHtml = movieArray.map(function(movie){
        return `
            <div class="movie col-md-2">
                <div class="card" style="width: 15vw; height:45vh;">
                    <img class="moviePoster" src="${movie.Poster}" alt="${movie.Title}" style="height:25vh";>
                    <div class="card-body">
                        <h5 class="card-title">${movie.Title}</h5>
                        <p class="card-year"> ${movie.Year} </p>
                        <button class="btn btn-primary" onclick=saveToWatchList("${movie.imdbID}")> Add Movie </button>
                    </div>
                </div>
            </div>
            `
    }) 
    return eachHtml
}


    var moviesContainer = document.getElementById('movies-container');
    moviesContainer.innerHTML = renderMovies (movieData)


});
