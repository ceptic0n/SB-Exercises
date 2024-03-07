const colors = ["red", "blue", "green", "yellow"];



//forEach Function
function forEach(arr, callback){
    for(let i = 0; i < arr.length; i++){
        callback(arr[i], i);
    }
}


//implementation
forEach(colors, function(colors, i){
    console.log(colors.toUpperCase(), i);
});