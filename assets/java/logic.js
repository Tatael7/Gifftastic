//hello world

var test = "ufc";

// var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + test + "&api_key=lrBVvkogHvFM0M7SIt1N7bIGmqZMJ5ts&limit=10";



$(document).ready(function() {

    //creating the starting topic buttons 

    var topics = ["connor mcgregor" , "jon jones" , "yoel romero" , "tj dillashaw" , "amanda nunes" , "ufc"];

    for(var i = 0; i < topics.length; i++) {
        var strt = topics[i];
        console.log(strt);

        var strtBtn = $("<button>");

        strtBtn.addClass("personBtn");
        strtBtn.attr("data-person" , strt);
        strtBtn.text(strt);
        $("#buttons").append(strtBtn);
    };

    // on click that results in the ajax pull  of the data-person aka topic of the button

    $(".personBtn").on("click", function() {
        var cosa = $(this).attr("data-person");
        console.log(cosa);
        
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + cosa + "&api_key=lrBVvkogHvFM0M7SIt1N7bIGmqZMJ5ts&limit=10";
    
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);

            var result = response.data;
            console.log(result);
            var foto = $("<img>");

            foto.attr("src", result[0].images.fixed_height.url);
            foto.attr("alt", "picture of something")

            $("#coolStuff").prepend(foto);


        });
    });
});

