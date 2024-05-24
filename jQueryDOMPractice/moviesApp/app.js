console.log("eek")

$("body").on("click", function(e){
    if($(e.target).is("input[type='submit']")){
        e.preventDefault();

        if(testIfMovieisValid() && testValidRating()){
        $(".movieList").append(formattedMovieRating());
        }
    }

    if(e.target.tagName === "BUTTON"){
        $(e.target).parent().remove();
    }
});


//function to format rating + movie title

function formattedMovieRating(){
    let movieTitle = $(".movieTitle").val();
    let movieRating = $(".movieRating").val();
    return `<li>"${movieTitle}" - ${movieRating}/10 <button>Remove</button> </li>`
}

function testIfMovieisValid(){
    if($(".movieTitle").val().length < 2){
        alert("Movie Title must be more than 2 characters.")
        return false;
    } else {
        return true;
    }
}

function testValidRating(){
    if($(".movieRating").val() === ""){
        alert("Please enter a rating");
        return false;
    }

    if($(".movieRating").val() < 0 || $(".movieRating").val() > 10){
        alert("Movie Rating must be 0 - 10")
        return false;
    } else {
        return true;
    }
}

