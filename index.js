var movieData
document.addEventListener('DOMContentLoaded', function(){
//console.log("Loaded")

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

    document.getElementById('myForm').addEventListener("submit", function(e){
        e.preventDefault();

        //part 3-2-1

       var searchString = document.getElementById("searchIt").value

       var urlEncodedSearchString = encodeURIComponent(searchString);

        axios.get("http://www.omdbapi.com/?apikey=3430a78&s=" + urlEncodedSearchString)
            .then(function(response){
                console.log(response.data)
                movieData = response.data.Search;
                var moviesContainer = document.getElementById('movies-container');
                moviesContainer.innerHTML = renderMovies(response.data.Search);
            })

        //


        // var moviesContainer = document.getElementById('movies-container');
        // moviesContainer.innerHTML = renderMovies (movieData)
    })

});

function saveToWatchList (imdbID) {
    console.log(imdbID)
    var movie = movieData.find(function(currentMovie) {
        return currentMovie.imdbID == imdbID;
    });

    var watchlistJSON = localStorage.getItem('watchlist');
    var watchlist = JSON.parse(watchlistJSON);
    if ( watchlist == null) {
            watchlist = []
     }
    
     watchlist.push(movie);

     watchlistJSON = JSON.stringify(watchlist);
     localStorage.setItem('watchlist', watchlistJSON);

}