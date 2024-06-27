console.log("Let's get this party started!");

const KEY = "Q0yE0f71P3haCUOm8nUYXjj3qTy5oVPN"

async function getGifSearchURL(query){
    let response = await axios.get("https://api.giphy.com/v1/gifs/search", {params:{api_key: KEY, q:query}});
    return response.data.data[0].images.original.url;
}

async function appendGif(getURL){
    let link = await getURL;
    let newImg = $('<img/>');
    newImg.attr('src', link);
    newImg.toggleClass("gif");
    newImg.toggleClass("max-vw-25");
    newImg.toggleClass("max-vh-25");
    $('.gifCollection').append(newImg);
};

$('.searchButton').on('click', function(){
    let query = $('.gifQuery').val();
    if(query === ''){
        alert("Please Enter a Search Term")
    } else {
    appendGif(getGifSearchURL(query));
    }
});

$('.removeGifs').on('click', function(){
    $('.gif').remove();
})