(function () {
  function giphySearch(keyword) {
    // Make a request to giphy API here
    return fetch(`https://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=voEUX20dXb64f46gtSfo1eF0HTlFL4PJ&limit=16`).then(response => response.json())
  }

  function appendImage(img) {
    let $div = $('<div class="img-wrapper col-auto"></div>');
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


/*
voEUX20dXb64f46gtSfo1eF0HTlFL4PJ
*/