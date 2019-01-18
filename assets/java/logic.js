//hello world

var topics = ["connor mcgregor" , "jon jones" , "yoel romero" , "amanda nunes"];

var test = "ufc";

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + test + "&api_key=lrBVvkogHvFM0M7SIt1N7bIGmqZMJ5ts&limit=10";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);
});