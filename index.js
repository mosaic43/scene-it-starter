

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

var movieData = [
	{
		Title: "The Dark Knight",
		Year: "2008",
		imdbID: "tt0468569",
		Type: "movie",
		Poster:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg"
	},
	{
		Title: "The Dark Knight Rises",
		Year: "2012",
		imdbID: "tt1345836",
		Type: "movie",
		Poster:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg"
	},
	{
		Title: "Thor: The Dark World",
		Year: "2013",
		imdbID: "tt1981115",
		Type: "movie",
		Poster:
			"https://ia.media-imdb.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_SX300.jpg"
	},
	{
		Title: "Transformers: Dark of the Moon",
		Year: "2011",
		imdbID: "tt1399103",
		Type: "movie",
		Poster:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTkwOTY0MTc1NV5BMl5BanBnXkFtZTcwMDQwNjA2NQ@@._V1_SX300.jpg"
	},
	{
		Title: "Zero Dark Thirty",
		Year: "2012",
		imdbID: "tt1790885",
		Type: "movie",
		Poster:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4OTUyNzcwN15BMl5BanBnXkFtZTcwMTQ1NDE3OA@@._V1_SX300.jpg"
	},
	{
		Title: "Dark Shadows",
		Year: "2012",
		imdbID: "tt1077368",
		Type: "movie",
		Poster:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMjc0NzAyMzI1MF5BMl5BanBnXkFtZTcwMTE0NDQ1Nw@@._V1_SX300.jpg"
	},
	{
		Title: "Dark City",
		Year: "1998",
		imdbID: "tt0118929",
		Type: "movie",
		Poster:
			"https://ia.media-imdb.com/images/M/MV5BMGExOGExM2UtNWM5ZS00OWEzLTllNzYtM2NlMTJlYjBlZTJkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
	},
	{
		Title: "Dancer in the Dark",
		Year: "2000",
		imdbID: "tt0168629",
		Type: "movie",
		Poster:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BNDVkYWMxNWEtNjc2MC00OGI5LWI3NmUtYWUwNDQyOTc3YmY5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
	},
	{
		Title: "The Dark Tower",
		Year: "2017",
		imdbID: "tt1648190",
		Type: "movie",
		Poster:
			"https://ia.media-imdb.com/images/M/MV5BMTU3MjUwMzQ3MF5BMl5BanBnXkFtZTgwMjcwNjkxMjI@._V1_SX300.jpg"
	},
	{
		Title: "Dark Skies",
		Year: "2013",
		imdbID: "tt2387433",
		Type: "movie",
		Poster:
			"https://ia.media-imdb.com/images/M/MV5BMTcxNDE1OTgyOF5BMl5BanBnXkFtZTcwMTEyMzMxOQ@@._V1_SX300.jpg"
	}
];
console.log("before render")
card.innerHTML = renderMovies (movieData)

function searchButton (){
    document.getElementById('search-form').addEventListener('submit', function(e){
        e.preventDefault();
    })
}

}
sceneitMovies()
// End of test data this will need to go in data.js.



// function searchButton (){
//     document.getElementById('search-form').addEventListener('submit', function(e){
//         e.preventDefault();
//     })
// }

    
});