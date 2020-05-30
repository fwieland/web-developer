//jQuery for clearing results for new search
$( "#searchButton" ).click(function() {
  $( ".inner, .img-wrapper" ).remove();
});
//deletes inputed text on click
$('input:text').click(
    function(){
        $(this).val('');
    });
$("#gif-Num").on('change', function(){
  numGifs = $(this).val();
})

//gif # selector 
let numGifs = 12;

function errorHandling() {
    alert("Error: Check Network Connection.");
}
(function () {
  function giphySearch(keyword) {
    // Make a request to giphy API here
    return fetch(`https://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=voEUX20dXb64f46gtSfo1eF0HTlFL4PJ&limit=${numGifs}`).then(response => response.json())
    .catch( errorHandling );
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
    const result = await giphySearch(searchKeyword);

    if ( typeof result === 'object' && Array.isArray(result.data) ) {
        result.data.forEach(data => {
            let img = new Image();
            img.src = data.images.original.url;
            appendImage(img);
        })
    } else {
        alert("Application failed to load data.");
    }
  }
})();