const form = document.querySelector("form");
const inp = document.querySelector("input");






form.onsubmit = (e) => {
    e.preventDefault()
    fetch("https://api.themoviedb.org/3/search/movie?api_key=e012cefd41b2d94ec074ccd2a8bfe075&language=en-US&query="+inp.value+"&page=1&include_adult=false")

        .then((response) => {
            return response.json()
        })

        .then((result) => {
            console.log(result);
            showmovies(result.results)
        })
}

function showmovies(data){
    for (let i =0; i<data.length ;i++){
    const moviediv = document.createElement('div');
    moviediv.setAttribute('class', ' col-md-4 mb-4 border shadow');
    const poster = document.createElement('img')
    poster.setAttribute("class", "img-fluid")
    const title = document.createElement('h3')

  title.innerHTML = data[i].title

 poster.src ='https://image.tmdb.org/t/p/original' + data[i].poster_path;
      
  document.querySelector("#results").append(moviediv);
  document.querySelector("#results").lastElementChild.append(poster);
  
  document.querySelector('#results').lastElementChild.append(title);

    }}
