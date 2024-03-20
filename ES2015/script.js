console.log(eek);


function eek(){
    console.log(arguments);
}

eek(0,1,2,3,4,5,6,7,8,9);



function printNums(...nums){
    console.log(nums);
}

printNums(0,1,2,4,5,6,7);

function songsByArtist(artist, ...songs){
    songs.forEach(el => {
        console.log(`${el} by ${artist}`);
    });
}

songsByArtist("Porter Robinson", "Cheerleader", "Look at the Sky", "Divinity");