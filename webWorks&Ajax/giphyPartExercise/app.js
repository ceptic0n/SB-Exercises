console.log("Let's get this party started!");

const KEY = "Q0yE0f71P3haCUOm8nUYXjj3qTy5oVPN"


async function getRandomResponse(){
    let response = await axios.get("https://api.giphy.com/v1/gifs/random", {params: {api_key: KEY}});
    console.log(response);
}



async function getRandomGifURL(){
    let response = await axios.get("https://api.giphy.com/v1/gifs/random", {params: {api_key: KEY}});
    let link = response.data.data.images.original.url;
    return link;
}

async function appendGif(gifURL){
    let link = await getRandomGifURL();

    console.log(link);

    let newImg = $('<img/>');
    newImg.attr('src', link);
    console.log(newImg.prop('outerHTML'));
    $('#gifCollection').append(newImg);
};

async function appendRandomGif(){
    let gifURL = await getRandomGifURL();
    appendGif(gifURL);
}