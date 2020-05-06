/*var api = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=voEUX20dXb64f46gtSfo1eF0HTlFL4PJ"
var query = "&q=funny"


http://api.giphy.com/v1/gifs/search?q=funny&api_key=voEUX20dXb64f46gtSfo1eF0HTlFL4PJ&limit=12

http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5



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
*/
(function () {
  function giphySearch(keyword) {
    // Make a request to giphy API here
    return fetch(`http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=voEUX20dXb64f46gtSfo1eF0HTlFL4PJ&limit=15`).then(response => response.json())
  }

  function appendImage(img) {
    let $div = $('<div class="img-wrapper"></div>');
    $('<div class="inner"></div>').append(img).appendTo($div);
    $('#thumbs').append($div)
  }


  (function listenOnFormSubmit() {
    $('#searchForm').submit(async(ev) => {
      ev.preventDefault();
      let $input = $('#searchInput');

      main($input.val());
    });
  })();
  

  async function main(searchKeyword) {
    //Write our code here
    const result = await giphySearch(searchKeyword);
    $('thumbs').html('');
    result.data.forEach(data => {
        let img = new Image();
        img.src = data.images.original.url;
        appendImage(img);
    })
  }
})();