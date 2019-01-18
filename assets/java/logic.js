//hello world


var test = "ufc";

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + test + "&api_key=lrBVvkogHvFM0M7SIt1N7bIGmqZMJ5ts&limit=10";



$(document).ready(function() {
    var topics = ["connor mcgregor" , "jon jones" , "yoel romero" , "amanda nunes" , "ufc"];

    for(var i = 0; i < topics.length; i++) {
        var strt = topics[i];
        console.log(strt);

        var strtBtn = $("<button>");

        strtBtn.addClass("startBtn");
        strtBtn.attr(strt);
        strtBtn.text(strt);
        $("#buttons").append(strtBtn);
    };

})

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);
});