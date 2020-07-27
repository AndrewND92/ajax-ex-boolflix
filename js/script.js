console.log("heyyy!!!!");


  function faiCose() {
    $.ajax(
      {
        url: "https://api.themoviedb.org/3/movie/550",
        method: "GET",
        success: function (data, stato) {
          $("#risultati").html(data);
        },
        error: function (richiesta, stato, errori) {
          alert("E' avvenuto un errore. " + errore);
        }
      }
    );
  }
  console.log(faiCose);















function init() {

}
