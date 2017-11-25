$(".random-button-search").hide();

$("document").ready(function() {
  $(".search-bar").keyup(function(event) {
   // $(".articles").append("")
    //Uses the enter key to update the search word(s)//
    if (event.keyCode === 13 || $(".search").on("click")) {
      $(".search-bar").click();
      //serach word(s)//
      var search = $(".search-bar")
        .val()
        .replace(/\s+/g, "%20");


      //Moves the random quote button up and to the side
      $(".random-button").hide();
      $(".random-button-search").show();


      var url =
        "https://www.wikipedia.org//w/api.php?action=query&format=json&list=search&srsearch=" +
        search +
        "&srnamespace=0&srlimit=10&callback=?";

      $.getJSON(url, function(data) {
        console.log(url);

        for (var i = 0; i < data.query.search.length; i++) {
          //Shows article snippets and titles and makes them into clickable links to Wikipedia
          $(".articles").append(
            "<a href=https://en.wikipedia.org/?curid=" +
              data.query.search[i].pageid + '</a>'+
              '<p class="article-title">' +
              data.query.search[i].title +
              "</p>" +
              '<p class="content">' +
              data.query.search[i].snippet +
              "</p>"
          );
        }

      });
      //Empties the results so the new search can be displayed
     $(".articles").empty();
    }
  });

});
