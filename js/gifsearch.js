var api = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=voEUX20dXb64f46gtSfo1eF0HTlFL4PJ"
var query = "&q=funny"






function setup() {
    noCanvas();
    var url = api + apiKey + query;
    loadJSON(url, gotData);
}

function gotData(giphy) {
    for (var i = 0; i < giphy.data.length; i++){
    createImg(giphy.data[0].images.original.url)
}
}