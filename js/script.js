function addSearchClick() {

var button = $("#button-text");
button.click(getMovies);

}


function getMovies() {

  var target = $("#input-text");
  var query = target.val();
  target.val("");

  $.ajax ({

    url:"https://api.themoviedb.org/3/search/movie",
    method:"GET",
    data: {
      "api_key" : "6f82cb1652a4158cd02147297fe88ff0",
      "query" : query
    },

    success: function(data) {
      console.log(data);

      var movies = data["results"];
      var target = $("#results ul");
      target.text("");

      var template = $("#movie-template").html();
      var compiled = Handlebars.compile(template);


      for (var i = 0; i < movies.length; i++) {

        var movie = movies[i];
        var movieHTML = compiled(movie);
        target.append(movieHTML);
      }









    },

    error: function(error){
      console.log("ops,che succede?",error);
    }

  });

}

function init() {

  addSearchClick();

}

$(document).ready(init);
