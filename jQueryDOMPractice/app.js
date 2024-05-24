console.log("eek");

/**
 * 1. When the DOM is ready, console.log the message
 * "Let's get ready to party with jQuery!"
 */

$("document").ready(function(){
    console.log("Lets get ready to party with jQuery!")
})

/**
 * 2. Give all images inside of the article tag the class of 
 * image-center(this class is defined inside of the style tag in the
 * head)
 */

//this will "activate" the image-center class
$("img").toggleClass("image-center");

/**
 * 3. Remove the last paragraph in the article
 */

$("body").find("p").last().remove();

/**
 * 4. Set the font size of the title to be a random pixel size 
 * from 0 to 100
 */

let rand = Math.floor(Math.random() * 101);
$("h1").css("font-size",`${rand}px`);

/**
 * 5. Add an item to the list; it can say whatever you want!
 */

$("ol").append("<li> eek i'm a new li!</li>")

/**
 * 6. Scratch that, the list is silly. Empty the aside and put
 * a paragraph apologizing for the list's existence.
 */

let apologyTxt = "Hello, we'd like to Apologize about the list that used to be here. Moving forward we will try our best to refrain from silly Lists."

$("ol").remove();
$("h4").after(`<p> ${apologyTxt}</p>`);

/**
 * 7. When you change the numbers in the three inputs
 * on the bottom, the background color of the body should chamge to 
 * match whatever the three values
 * in the inputs are.
 */



function rbgCode(){
    let red = $(".redValue").val();
    let blue = $(".blueValue").val();
    let green = $(".greenValue").val();
    return `rgb(${red}, ${blue}, ${green})`
};

$(".redValue, .blueValue, .greenValue").on("change", function(){
    $("body").css("background-color", rbgCode());
    console.log(rbgCode());
})


/**
 * add an event listener so when you click on the image,
 * it is removed from the DOM
 */

$("img").on("click", function(e){
    $("img").remove();
});


