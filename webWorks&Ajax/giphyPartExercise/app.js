console.log("Let's get this party started!");

const KEY = "Q0yE0f71P3haCUOm8nUYXjj3qTy5oVPN"


async function getRandomResponse(){
    let response = await axios.get("https://api.giphy.com/v1/gifs/random", {params: {api_key: KEY}});
    console.log(response);
}

async function getRandomGifURL(){
    let response = await axios.get("https://api.giphy.com/v1/gifs/random", {params: {api_key: KEY}});
    console.log(response.data.data.images.original.url);
}

function appendGif(gifURL){
    let newImg = $(`'<img src="${gifURL}"/>'`)
    $('#gifCollection').append(newImg);
};
