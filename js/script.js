function addSearchClick() {

var button = $("#button-text");
button.click(getMovies);

}


function getMovies() {

  var target = $("#input-text");
  var query = target.val();

  $.ajax ({

    url:"https://api.themoviedb.org/3/search/movie",
    method:"GET",
    data: {
      "api_key" : "6f82cb1652a4158cd02147297fe88ff0",
      "query" : query
    },

    succes: function(data) {
      console.log(data);
    },

    error: function(error){
      console.log(error);
    }

  });

}

function init() {

  addSearchClick();

}

$(document).ready(init);
